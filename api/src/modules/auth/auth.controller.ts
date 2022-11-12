import {
  Controller,
  Body,
  Post,
  HttpException,
  HttpStatus,
  Logger,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { UserService } from '../user/user.service';

import { SignInPayload, SignInRes, SignUpPayload, SignUpRes } from './auth.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.guard';

@Controller({ path: 'auth' })
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('sign-in')
  @ApiOperation({ summary: 'User signing in' })
  @ApiOkResponse({ type: SignInRes })
  @ApiBody({ type: SignInPayload })
  async signIn(@Body() body: SignInPayload) {
    try {
      const result = await this.authService.signIn(body);

      if (!result) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }

      return result;
    } catch (error) {
      this.logger.error('@AuthController.signIn:error', error);
      throw error;
    }
  }

  @Post('sign-up')
  @ApiOperation({ summary: 'User signing up' })
  @ApiOkResponse({ type: SignUpRes })
  @ApiBody({ type: SignUpPayload })
  async signUp(@Body() body: SignUpPayload) {
    try {
      const existingUser = await this.userService.findByEmail(body.email);

      if (!!existingUser) {
        throw new HttpException(
          'Email already registered',
          HttpStatus.CONFLICT,
        );
      }

      return this.authService.registerUser(body);
    } catch (error) {
      this.logger.error('@AuthController.signUp:error', error);
      throw error;
    }
  }

  @Get('profile')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}

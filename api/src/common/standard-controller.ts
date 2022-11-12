import {
  applyDecorators,
  Controller,
  UseGuards,
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { ErrorResponse } from './errors.class';

export type SecurityType = 'jwt';

export interface StandardControllerOptions {
  prefix?: string;
  tags: string[];
  securityType?: SecurityType;
}

@Injectable()
export class StandardControllerGuard implements CanActivate {
  private readonly logger = new Logger(StandardControllerGuard.name);

  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { securityTypesFromController, securityTypesFromHandler } =
      this.getSecurityTypes(context);

    const fromController = securityTypesFromController?.length;
    const fromHandler = securityTypesFromHandler?.length;

    const shouldAuthenticateFromController = fromController && !fromHandler;
    const shouldAuthenticateFromHandler =
      (!fromController && fromHandler) || (fromController && fromHandler);

    if (shouldAuthenticateFromController) {
      return this.authenticate(context, securityTypesFromController);
    }

    if (shouldAuthenticateFromHandler) {
      return this.authenticate(context, securityTypesFromHandler);
    }

    return true;
  }

  private async authenticate(
    context: ExecutionContext,
    securityType?: SecurityType,
  ): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    if (securityType === 'jwt') {
      // TODO
    }

    return true;
  }

  private getSecurityTypes(context: ExecutionContext) {
    const securityTypesFromController = this.reflector.get<SecurityType>(
      'securityType',
      context.getClass(),
    );

    const securityTypesFromHandler = this.reflector.get<SecurityType>(
      'securityType',
      context.getHandler(),
    );

    return {
      securityTypesFromController,
      securityTypesFromHandler,
    };
  }
}

export const StandardController = (options: StandardControllerOptions) => {
  const { prefix, tags, securityType } = options;

  const decorators: (MethodDecorator | ClassDecorator)[] = [
    ApiBadRequestResponse({ type: ErrorResponse }),
    ApiInternalServerErrorResponse({ type: ErrorResponse }),
    ApiUnauthorizedResponse({ type: ErrorResponse }),
    ApiTags(...tags),
  ];

  decorators.push(Controller(prefix));

  if (securityType === 'jwt') {
    decorators.push(UseGuards(AuthGuard('jwt'), StandardControllerGuard));
  }

  return applyDecorators(...decorators);
};

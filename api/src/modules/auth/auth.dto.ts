import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsNotEmpty } from 'class-validator';
import { IUser } from '../user/user.interface';

import { AccessToken } from './auth.interface';

export class SignInPayload {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}

export class SignInRes implements AccessToken {
  @ApiProperty({ description: 'User access token' })
  readonly access_token: string;
}

export class SignUpPayload {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}

export class SignUpRes
  implements Omit<IUser, 'id' | 'password' | 'updated_at' | 'deleted_at'>
{
  @ApiProperty({ description: 'User email' })
  readonly email: string;

  @ApiProperty({ description: 'User name' })
  readonly username: string;

  @ApiProperty({ description: 'User creation date' })
  readonly created_at: Date;
}

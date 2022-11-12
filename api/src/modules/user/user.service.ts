import { Injectable, Logger } from '@nestjs/common';

import UserRepository from './user.repository';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly userRepository: UserRepository) {}
}

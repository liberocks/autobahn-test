import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from './modules/sequelize';

@Module({
  imports: [ConfigModule, SequelizeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestjsUserLibModule } from '@food-blog/nestjs-user-lib';
import { NestjsAuthLibModule } from '@food-blog/nestjs-auth-lib';

@Module({
  imports: [NestjsUserLibModule, NestjsAuthLibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { NestjsUserLibService } from './nestjs-user-lib.service';

@Module({
  providers: [NestjsUserLibService],
  exports: [NestjsUserLibService],
})
export class NestjsUserLibModule {}

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import pkg from '@nestjs/core';
const { NestFactory } = pkg;
import {
  MicroserviceOptions,
  RpcException,
  Transport,
} from '@nestjs/microservices';
import { ShopModule } from './app/shop.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ExceptionFilter } from './common/filter/microservice-exception.filter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ShopModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3001,
      },
    }
  );

  await app.listen();
}

bootstrap();

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
        port: 3001,
      },
    }
  );
  // app.useGlobalFilters(new ExceptionFilter());
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     exceptionFactory: (errors) => {
  //       return new RpcException(errors);
  //     },
  //   })
  // );
  await app.listen();
}

bootstrap();

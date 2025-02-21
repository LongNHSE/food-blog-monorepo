import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NestjsAuthLibModule } from '@food-blog/nestjs-auth-lib';
@Module({
  imports: [
    NestjsAuthLibModule,
    ClientsModule.register([
      {
        name: 'SHOP_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'nestjs-shop-service',
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

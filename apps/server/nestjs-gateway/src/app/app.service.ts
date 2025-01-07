import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(@Inject('SHOP_SERVICE') private shopService: ClientProxy) {}


  getShop() {
    throw new Error('Method not implemented.');
  }
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}

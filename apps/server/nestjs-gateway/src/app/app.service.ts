import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { apiSuccess } from '@food-blog/interfaces';

@Injectable()
export class AppService {
  constructor(@Inject('SHOP_SERVICE') private shopService: ClientProxy) {}

  async getShop() {
    console.log('getShop');
    const result = await this.shopService.send('getShop', {}).toPromise();
    console.log(result);
    return apiSuccess(result, 'Successfully get shop data', 200);
  }

  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}

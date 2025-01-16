import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { apiSuccess } from '@food-blog/interfaces';
import { catchError, firstValueFrom, throwError, timeout } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('SHOP_SERVICE') private shopService: ClientProxy) {}

  async createShop(createShopDto: any) {
    const result = this.shopService
      .send('createShop', createShopDto)
      .pipe(catchError((error) => throwError(() => error)));
    return result;
  }

  async getShop() {
    const result = await this.shopService.send('getShop', {}).toPromise();
    return apiSuccess(result, 'Successfully get shop data', 200);
  }

  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { apiSuccess, LoginDto } from '@food-blog/interfaces';
import { catchError, firstValueFrom, throwError } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('SHOP_SERVICE') private shopService: ClientProxy,
    @Inject('AUTH_SERVICE') private authService: ClientProxy
  ) {}

  async login(loginDto: LoginDto) {
    const result = await firstValueFrom(
      this.authService.send('login', loginDto)
    );
    return result;
  }

  async createShop(createShopDto: any) {
    const result = this.shopService.send('createShop', createShopDto).pipe(
      catchError((error) =>
        throwError(() => {
          console.error('Error:', error);
          throw new RpcException(error);
        })
      )
    );
    return result;
  }

  async getShop() {
    const result = await firstValueFrom(this.shopService.send('getShop', {}));
    return apiSuccess(result, 'Successfully get shop data', 200);
  }

  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}

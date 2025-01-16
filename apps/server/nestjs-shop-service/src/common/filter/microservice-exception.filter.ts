// import {
//     ArgumentsHost,
//     Catch,
//     RpcExceptionFilter,
//     Logger,
//     HttpStatus,
//   } from '@nestjs/common';
//   import { Observable, throwError } from 'rxjs';
//   import { RpcException } from '@nestjs/microservices';

//   @Catch(RpcException)
//   export class MicroserviceExceptionFilter
//     implements RpcExceptionFilter<RpcException>
//   {
//     catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
//       console.log('MicroserviceExceptionFilter');
//       Logger.error(exception);

//       let errorResponse: any;

//       if (exception instanceof RpcException) {
//         const error = exception.getError();
//         errorResponse = typeof error === 'string' ? { message: error } : error;
//       } else {
//         errorResponse = {
//           statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
//           message: 'Internal server error',
//         };
//       }

//       return throwError(() => exception.getError());
//     }
//   }

import { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class ExceptionFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    console.log('MicroserviceExceptionFilter');
    return throwError(() => exception.getError());
  }
}

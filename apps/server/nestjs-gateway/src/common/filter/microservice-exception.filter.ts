import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { RpcException } from '@nestjs/microservices';
import { ValidationError } from 'class-validator';
import { apiFailed, apiSuccess } from '@food-blog/interfaces';

@Catch(RpcException)
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    Logger.error(exception);
    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let responseBody: any;

    if (exception instanceof RpcException) {
      console.error('Exception is an instance of RpcException');
      const error = exception.getError();
      responseBody = typeof error === 'string' ? { message: error } : error;
    } else if (
      Array.isArray(exception) &&
      exception[0] instanceof ValidationError
    ) {
      console.error('Exception is an instance of ValidationError');
      responseBody = this.formatValidationErrors(exception);
    } else if (exception instanceof HttpException) {
      console.error('Exception is an instance of HttpException');
      responseBody = exception.getResponse();
    } else {
      console.error('Exception is an unknown type');
      responseBody = {
        statusCode: httpStatus,
        message: 'Internal server error',
      };
    }

    const apiFailedResponse = apiFailed(responseBody, 'Failed', httpStatus);

    httpAdapter.reply(ctx.getResponse(), apiFailedResponse, httpStatus);
  }

  private formatValidationErrors(errors: ValidationError[]): any {
    return errors.map((error) => ({
      property: error.property,
      constraints: error.constraints,
    }));
  }
}

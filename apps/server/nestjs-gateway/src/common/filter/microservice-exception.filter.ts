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

interface ErrorResponse {
  error?: any;
  message: string;
  data?: any;
}
@Catch(RpcException)
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    let httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let responseBody: ErrorResponse;

    if (exception instanceof RpcException) {
      const error:any = exception.getError();
      if (typeof error === 'string') {
        responseBody = {
          message: error,
        };
        httpStatus = HttpStatus.BAD_REQUEST; // Default to 400 for RpcException
      } else {
        responseBody = {
          message: error?.message || 'Internal server error',
          error: error.errors,
        };
        httpStatus = error?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
      }
    } else if (
      Array.isArray(exception) &&
      exception[0] instanceof ValidationError
    ) {
      console.error('Exception is an instance of ValidationError');
      responseBody = this.formatValidationErrors(exception);
    } else if (exception instanceof HttpException) {
      console.error('Exception is an instance of HttpException');
      responseBody = {
        message: exception.message,
        error: exception.getResponse(),
      };
    } else {
      responseBody = {
        message: 'Internal server error',
      };
    }

    const apiFailedResponse = apiFailed(
      responseBody.error,
      responseBody.message,
      httpStatus
    );

    httpAdapter.reply(ctx.getResponse(), apiFailedResponse, httpStatus);
  }

  private formatValidationErrors(errors: ValidationError[]): any {
    return errors.map((error) => ({
      property: error.property,
      constraints: error.constraints,
    }));
  }
}

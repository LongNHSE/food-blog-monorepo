export interface ApiResponse<T> {
  message: string;
  statusCode: number;
  data?: T;
  error?: any;
}

export const apiSuccess = <T>(
  data: T,
  message = 'Success',
  statusCode = 200
): ApiResponse<T> => ({
  message,
  statusCode: statusCode,
  data,
});

export const apiFailed = (
  error?: any,
  message = 'Failed',
  statusCode = 500,
  data = null,
): ApiResponse<null> => ({
  message,
  statusCode,
  data,
  error,
});

export interface ApiResponse<T> {
    message: string;
    statusCode: number;
    data?: T;
    error?: any;
}
export declare const apiSuccess: <T>(data: T, message?: string, statusCode?: number) => ApiResponse<T>;
export declare const apiFailed: (error?: any, message?: string, statusCode?: number, data?: null) => ApiResponse<null>;
//# sourceMappingURL=response.interface.d.ts.map
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
export declare class NestjsUserLibService {
    private userModel;
    constructor(userModel: Model<User>);
    getUserById(id: string): Promise<User | null>;
    getUserByUsername(username: string): Promise<User | null>;
    createUser(user: {
        _id: import('mongoose').Schema.Types.ObjectId;
        status: string;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        __v: number;
        avatar?: string | undefined;
    }): Promise<User>;
}
//# sourceMappingURL=nestjs-user-lib.service.d.ts.map
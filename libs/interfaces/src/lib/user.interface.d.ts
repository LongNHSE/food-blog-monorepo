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
import { Schema } from 'mongoose';
import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
    _id: z.ZodType<Schema.Types.ObjectId, z.ZodTypeDef, Schema.Types.ObjectId>;
    firstName: z.ZodString;
    lastName: z.ZodString;
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    role: z.ZodString;
    status: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    __v: z.ZodNumber;
    avatar: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    _id: Schema.Types.ObjectId;
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
}, {
    _id: Schema.Types.ObjectId;
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
}>;
export type TUser = z.infer<typeof UserSchema>;
//# sourceMappingURL=user.interface.d.ts.map
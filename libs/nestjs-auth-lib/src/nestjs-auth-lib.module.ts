import { Module } from '@nestjs/common';
import { NestjsAuthLibService } from './nestjs-auth-lib.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NestjsUserLibModule } from '@food-blog/nestjs-user-lib';

@Module({
  imports: [
    NestjsUserLibModule,
    PassportModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_KEY'),
        signOptions: { expiresIn: configService.get('JWT_KEY_EXPIRES_IN') },
      }),
    }),
  ],
  providers: [NestjsAuthLibService],
  exports: [NestjsAuthLibService],
})
export class NestjsAuthLibModule {}

import { Module } from '@nestjs/common';
import { NestjsAuthLibService } from './nestjs-auth-lib.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NestjsUserLibModule } from '@food-blog/nestjs-user-lib';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './nestjs-auth-guard';

@Module({
  imports: [
    NestjsUserLibModule,
    PassportModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule], // Ensure ConfigModule is imported
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const jwtKey = configService.get<string>('JWT_KEY');
        const jwtExpiresIn = configService.get<string>('JWT_KEY_EXPIRES_IN');
        return {
          secret: jwtKey,
          signOptions: { expiresIn: jwtExpiresIn || '3600s' },
        };
      },
    }),
  ],
  providers: [NestjsAuthLibService, JwtStrategy],
  exports: [NestjsAuthLibService],
})
export class NestjsAuthLibModule {}

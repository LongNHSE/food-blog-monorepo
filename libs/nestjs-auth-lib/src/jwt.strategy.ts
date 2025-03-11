import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { NestjsAuthLibService } from './nestjs-auth-lib.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    public configService: ConfigService,
    private readonly nestjsAuthLibService: NestjsAuthLibService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      algorithms: ['RS256'],
      secretOrKey: configService.get<string>(
        'JWT_KEY_SECRET',
        'defaultSecretKey'
      ),
    });
  }

  async validate(payload: any): Promise<{ userId: string; username: string }> {
    return { userId: payload.sub, username: payload.username };
  }
}

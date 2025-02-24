import { Injectable } from '@nestjs/common';
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
      secretOrKey: configService.get<string>('JWT_SECRET', 'defaultSecretKey'),
    });
  }
  
  validate(payload: any): { userId: string; username: string } {
    console.log(this.nestjsAuthLibService)
    return { userId: payload.sub, username: payload.username };
  }
}

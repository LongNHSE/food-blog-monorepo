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
      secretOrKey: configService.get<string>('JWT_SECRET', 'defaultSecretKey'),
    });
  }

  async validate(payload: any): Promise<{ userId: string; username: string }> {
    const user = await this.nestjsAuthLibService.validateUser(
      payload.username,
      payload.password
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return { userId: payload.sub, username: payload.username };
  }
}

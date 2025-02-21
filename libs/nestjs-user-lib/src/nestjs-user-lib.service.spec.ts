import { Test, TestingModule } from '@nestjs/testing';
import { NestjsUserLibService } from './nestjs-user-lib.service';

describe('NestjsUserLibService', () => {
  let service: NestjsUserLibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestjsUserLibService],
    }).compile();

    service = module.get<NestjsUserLibService>(NestjsUserLibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

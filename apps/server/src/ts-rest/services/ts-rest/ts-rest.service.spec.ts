import { Test, TestingModule } from '@nestjs/testing';
import { TsRestService } from './ts-rest.service';

describe('TsRestService', () => {
  let service: TsRestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TsRestService],
    }).compile();

    service = module.get<TsRestService>(TsRestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

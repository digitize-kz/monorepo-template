import { Test, TestingModule } from '@nestjs/testing';
import { TsRestController } from './ts-rest.controller';

describe('TsRestController', () => {
  let controller: TsRestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TsRestController],
    }).compile();

    controller = module.get<TsRestController>(TsRestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

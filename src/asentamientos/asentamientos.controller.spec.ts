import { Test, TestingModule } from '@nestjs/testing';
import { AsentamientosController } from './asentamientos.controller';

describe('AsentamientosController', () => {
  let controller: AsentamientosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsentamientosController],
    }).compile();

    controller = module.get<AsentamientosController>(AsentamientosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

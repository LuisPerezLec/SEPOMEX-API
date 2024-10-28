import { Test, TestingModule } from '@nestjs/testing';
import { AsentamientosService } from './asentamientos.service';

describe('AsentamientosService', () => {
  let service: AsentamientosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsentamientosService],
    }).compile();

    service = module.get<AsentamientosService>(AsentamientosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

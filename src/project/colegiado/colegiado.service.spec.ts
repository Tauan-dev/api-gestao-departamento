import { Test, TestingModule } from '@nestjs/testing';
import { ColegiadoService } from './colegiado.service';

describe('ColegiadoService', () => {
  let service: ColegiadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColegiadoService],
    }).compile();

    service = module.get<ColegiadoService>(ColegiadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ColegiadoController } from './colegiado.controller';

describe('ColegiadoController', () => {
  let controller: ColegiadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColegiadoController],
    }).compile();

    controller = module.get<ColegiadoController>(ColegiadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

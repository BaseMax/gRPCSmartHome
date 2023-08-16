import { Test, TestingModule } from '@nestjs/testing';
import { ThingController } from './thing.controller';
import { ThingService } from './thing.service';

describe('ThingController', () => {
  let controller: ThingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThingController],
      providers: [ThingService],
    }).compile();

    controller = module.get<ThingController>(ThingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ThingService } from './thing.service';

describe('ThingService', () => {
  let service: ThingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThingService],
    }).compile();

    service = module.get<ThingService>(ThingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { HouseService } from './house.service';

describe('HouseService', () => {
  let service: HouseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HouseService],
    }).compile();

    service = module.get<HouseService>(HouseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

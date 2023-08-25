import { Test, TestingModule } from '@nestjs/testing';
import { HouseService } from './house.service';
import { ClientsModule } from '@nestjs/microservices';

describe('HouseService', () => {
  let service: HouseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ClientsModule.register([{ name: 'HOUSE_PACKAGE' }])],
      providers: [HouseService],
    }).compile();

    service = module.get<HouseService>(HouseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

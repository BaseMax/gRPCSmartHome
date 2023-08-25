import { Test, TestingModule } from '@nestjs/testing';
import { ThingService } from './thing.service';
import { ClientsModule } from '@nestjs/microservices';

describe('ThingService', () => {
  let service: ThingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ClientsModule.register([{ name: 'THING_PACKAGE' }])],
      providers: [ThingService],
    }).compile();

    service = module.get<ThingService>(ThingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ThingController } from './thing.controller';
import { ThingService } from './thing.service';
import { ClientsModule } from '@nestjs/microservices';

describe('ThingController', () => {
  let controller: ThingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          { name: 'THING_PACKAGE' },
          { name: 'AUTH_PACKAGE' },
        ]),
      ],
      controllers: [ThingController],
      providers: [ThingService],
    }).compile();

    controller = module.get<ThingController>(ThingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

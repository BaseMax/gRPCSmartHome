import { Test, TestingModule } from '@nestjs/testing';
import { HouseController } from './house.controller';
import { HouseService } from './house.service';
import { ClientsModule } from '@nestjs/microservices';

describe('HouseController', () => {
  let controller: HouseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          { name: 'HOUSE_PACKAGE' },
          { name: 'AUTH_PACKAGE' },
        ]),
      ],
      controllers: [HouseController],
      providers: [HouseService],
    }).compile();

    controller = module.get<HouseController>(HouseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

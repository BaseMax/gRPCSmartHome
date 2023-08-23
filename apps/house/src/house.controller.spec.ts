import { Test, TestingModule } from '@nestjs/testing';
import { HouseController } from './house.controller';
import { HouseService } from './house.service';

describe('HouseController', () => {
  let houseController: HouseController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HouseController],
      providers: [HouseService],
    }).compile();

    houseController = app.get<HouseController>(HouseController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(houseController.getHello()).toBe('Hello World!');
    });
  });
});

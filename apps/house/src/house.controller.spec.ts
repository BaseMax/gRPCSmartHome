import { Test, TestingModule } from '@nestjs/testing';
import { HouseController } from './house.controller';
import { HouseService } from './house.service';
import { MongooseModule } from '@nestjs/mongoose';
import { House, HouseSchema } from './house.model';

describe('HouseController', () => {
  let houseController: HouseController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'test' }),
        MongooseModule.forFeature([{ name: House.name, schema: HouseSchema }]),
      ],
      controllers: [HouseController],
      providers: [HouseService],
    }).compile();

    houseController = app.get<HouseController>(HouseController);
  });

  describe('createHouse', () => {
    it('should be defined', () => {
      expect(houseController.createHouse).toBeDefined();
    });
  });

  describe('deleteHouse', () => {
    it('should be defined', () => {
      expect(houseController.deleteHouse).toBeDefined();
    });
  });

  describe('findHouseById', () => {
    it('should be defined', () => {
      expect(houseController.findHouseById).toBeDefined();
    });
  });

  describe('updateHouse', () => {
    it('should be defined', () => {
      expect(houseController.updateHouse).toBeDefined();
    });
  });
});

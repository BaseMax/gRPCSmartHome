import { Test, TestingModule } from '@nestjs/testing';
import { ThingController } from './thing.controller';
import { ThingService } from './thing.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Thing, ThingSchema } from './thing.model';

describe('ThingController', () => {
  let thingController: ThingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'test' }),
        MongooseModule.forFeature([{ name: Thing.name, schema: ThingSchema }]),
      ],
      controllers: [ThingController],
      providers: [ThingService],
    }).compile();

    thingController = app.get<ThingController>(ThingController);
  });

  describe('createThing', () => {
    it('should be defined', () => {
      expect(thingController.createThing).toBeDefined();
    });
  });

  describe('deleteThing', () => {
    it('should be defined', () => {
      expect(thingController.deleteThing).toBeDefined();
    });
  });

  describe('findThingById', () => {
    it('should be defined', () => {
      expect(thingController.findThingById).toBeDefined();
    });
  });

  describe('doActin', () => {
    it('should be defined', () => {
      expect(thingController.doAction).toBeDefined();
    });
  });

  describe('updateThing', () => {
    it('should be defined', () => {
      expect(thingController.updateThing).toBeDefined();
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ThingController } from './thing.controller';
import { ThingService } from './thing.service';

describe('ThingController', () => {
  let thingController: ThingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ThingController],
      providers: [ThingService],
    }).compile();

    thingController = app.get<ThingController>(ThingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(thingController.getHello()).toBe('Hello World!');
    });
  });
});

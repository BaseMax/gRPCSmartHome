import { NestFactory } from '@nestjs/core';
import { ThingModule } from './thing.module';

async function bootstrap() {
  const app = await NestFactory.create(ThingModule);
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { ThingModule } from './thing.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { THING_PACKAGE_NAME, THING_PORT } from '@app/common';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ThingModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:' + THING_PORT,
        protoPath: join(__dirname, '../thing.proto'),
        package: THING_PACKAGE_NAME,
      },
    },
  );
  await app.listen();
}
bootstrap();

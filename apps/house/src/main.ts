import { NestFactory } from '@nestjs/core';
import { HouseModule } from './house.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HOUSE_PACKAGE_NAME, HOUSE_PORT } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    HouseModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:' + HOUSE_PORT,
        protoPath: join(__dirname, '../house.proto'),
        package: HOUSE_PACKAGE_NAME,
      },
    },
  );
  await app.listen();
}
bootstrap();

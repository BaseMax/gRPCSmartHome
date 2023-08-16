import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { USER_PACKAGE_NAME, USER_PORT } from '@app/common';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:' + USER_PORT,
        protoPath: join(__dirname, '../user.proto'),
        package: USER_PACKAGE_NAME,
      },
    },
  );
  await app.listen();
}
bootstrap();

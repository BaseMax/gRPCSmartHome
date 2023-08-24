import { Module } from '@nestjs/common';
import { ThingService } from './thing.service';
import { ThingController } from './thing.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { THING_PACKAGE_NAME, THING_PORT } from '@app/common';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'THING_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:' + THING_PORT,
          package: THING_PACKAGE_NAME,
          protoPath: join(__dirname, '../thing/thing.proto'),
        },
      },
    ]),
  ],
  controllers: [ThingController],
  providers: [ThingService],
})
export class ThingModule {}

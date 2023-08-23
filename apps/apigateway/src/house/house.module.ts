import { Module } from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HOUSE_PACKAGE_NAME, HOUSE_PORT } from '@app/common';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HOUSE_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:' + HOUSE_PORT,
          package: HOUSE_PACKAGE_NAME,
          protoPath: join(__dirname, '../house/house.proto'),
        },
      },
    ]),
  ],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule {}

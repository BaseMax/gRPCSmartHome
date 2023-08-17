import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ThingModule } from './thing/thing.module';
import { GroupModule } from './group/group.module';
import { RoomModule } from './room/room.module';
import { HouseModule } from './house/house.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ThingModule,
    GroupModule,
    RoomModule,
    HouseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

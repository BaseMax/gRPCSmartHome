import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ThingModule } from './thing/thing.module';
import { HouseModule } from './house/house.module';

@Module({
  imports: [AuthModule, UserModule, ThingModule, HouseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

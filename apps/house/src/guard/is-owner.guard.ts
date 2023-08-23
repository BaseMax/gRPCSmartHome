import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { HouseService } from '../house.service';

@Injectable()
export class isOwnerGuard implements CanActivate {
  constructor(private houseService: HouseService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = this.extractOwnerIdAndHouseId(context);
    console.log({ result });

    const isOwner = await this.houseService.isOwner(result.userId, result.id);
    console.log({ isOwner });

    return !!isOwner;
  }
  private extractOwnerIdAndHouseId(context: ExecutionContext) {
    const request = context.switchToRpc();
    const info = request.getData();

    return {
      userId: info.userId,
      id: info.id,
    };
  }
}

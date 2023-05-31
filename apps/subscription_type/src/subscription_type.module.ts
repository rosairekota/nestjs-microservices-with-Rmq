import { Module } from '@nestjs/common';
import { SubscriptionTypeController } from './subscription_type.controller';
import { SubscriptionTypeService } from './subscription_type.service';

@Module({
  imports: [],
  controllers: [SubscriptionTypeController],
  providers: [SubscriptionTypeService],
})
export class SubscriptionTypeModule {}

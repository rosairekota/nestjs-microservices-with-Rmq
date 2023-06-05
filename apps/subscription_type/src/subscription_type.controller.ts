import { Controller, Get } from '@nestjs/common';
import { SubscriptionTypeService } from './subscription_type.service';
import { EventPattern, Ctx, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class SubscriptionTypeController {
  constructor(
    private readonly subscriptionTypeService: SubscriptionTypeService,
  ) {}

  @Get()
  getHello(): string {
    return this.subscriptionTypeService.getHello();
  }
  @EventPattern('subscription_created')
  handleSubscriptionCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.subscriptionTypeService.create(data)
  }
}

import { Controller, Get } from '@nestjs/common';
import { SubscriptionTypeService } from './subscription_type.service';

@Controller()
export class SubscriptionTypeController {
  constructor(private readonly subscriptionTypeService: SubscriptionTypeService) {}

  @Get()
  getHello(): string {
    return this.subscriptionTypeService.getHello();
  }
}

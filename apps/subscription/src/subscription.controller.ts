import { Body, Controller, Get, Post } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { StoreSubscriptionRequest } from './dto/store-subscription.dto';

@Controller('subscriptions')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get()
  getAll() {
    return this.subscriptionService.findAll();
  }
  @Post()
  async store(@Body() storeSubscriptionRequest: StoreSubscriptionRequest) {
    return await this.subscriptionService.add(storeSubscriptionRequest);
  }
}

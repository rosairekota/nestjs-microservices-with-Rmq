import { Injectable } from '@nestjs/common';
import { SubscriptionRepisitory } from './repository/subscription.repository';
import { Subscription } from './schema/subscription.schema';
import { StoreSubscriptionRequest } from './dto/store-subscription.dto';

@Injectable()
export class SubscriptionService {
  constructor(private subscriptionRepo: SubscriptionRepisitory) {}
  async findAll(): Promise<Subscription[]> {
    return await this.subscriptionRepo.findAll();
  }
  async add(
    storeSubscriptionRequest: StoreSubscriptionRequest,
  ): Promise<Subscription> {
    return await this.subscriptionRepo.create({
      name: storeSubscriptionRequest.name,
    });
  }
}

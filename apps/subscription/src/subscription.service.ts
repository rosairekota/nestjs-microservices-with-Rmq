import { Inject, Injectable } from '@nestjs/common';
import { SubscriptionRepisitory } from './repository/subscription.repository';
import { Subscription } from './schema/subscription.schema';
import { StoreSubscriptionRequest } from './dto/store-subscription.dto';
import { SUBSCRIPTION_TYPE_SERVICE } from '@app/rmq';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class SubscriptionService {
  constructor(
    private readonly subscriptionRepo: SubscriptionRepisitory,
    @Inject(SUBSCRIPTION_TYPE_SERVICE)
    private subscriptionTypeClient: ClientProxy,
  ) {}
  async findAll(): Promise<Subscription[]> {
    return await this.subscriptionRepo.findAll();
  }
  async add(
    storeSubscriptionRequest: StoreSubscriptionRequest,
  ): Promise<Subscription> {
    const transaction = await this.subscriptionRepo.startTransaction();
    try {
      const data = await this.subscriptionRepo.create(
        storeSubscriptionRequest,
        { session: transaction },
      );
      await lastValueFrom(
        this.subscriptionTypeClient.emit('subscription_created', data),
      );
      await transaction.commitTransaction();
      return data;
    } catch (error) {
      await transaction.abortTransaction();
    }
  }
}

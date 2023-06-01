import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Subscription } from '../schema/subscription.schema';
import { AbstractRepository } from '@app/database/abstract.repository';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SubscriptionRepisitory extends AbstractRepository<Subscription> {
  protected readonly logger: Logger = new Logger(SubscriptionRepisitory.name);

  constructor(
    @InjectModel(Subscription.name) subscriptionModel: Model<Subscription>,
    @InjectConnection() connection: Connection,
  ) {
    super(subscriptionModel, connection);
  }
}

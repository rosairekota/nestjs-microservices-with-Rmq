import { Module } from '@nestjs/common';
import { SubscriptionTypeController } from './subscription_type.controller';
import { SubscriptionTypeService } from './subscription_type.service';
import { RmqModule } from '@app/rmq';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_SUBSCRIPTION_TYPE_QUEUE: Joi.string().required,
      }),
    }),
    RmqModule,
  ],
  controllers: [SubscriptionTypeController],
  providers: [SubscriptionTypeService],
})
export class SubscriptionTypeModule {}

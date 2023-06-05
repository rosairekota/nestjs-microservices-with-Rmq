import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/database';
import { SubscriptionRepisitory } from './repository/subscription.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Subscription, SubscriptionSchema } from './schema/subscription.schema';
import { RmqModule, SUBSCRIPTION_TYPE_SERVICE } from '@app/rmq';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/subscription/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      {
        name: Subscription.name,
        schema: SubscriptionSchema,
      },
    ]),
    RmqModule.register({
      name: SUBSCRIPTION_TYPE_SERVICE,
    }),
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService, SubscriptionRepisitory],
})
export class SubscriptionModule {}

import { NestFactory } from '@nestjs/core';
import { SubscriptionTypeModule } from './subscription_type.module';
import { RmqService } from '@app/rmq';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(SubscriptionTypeModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<MicroserviceOptions>(
    rmqService.getOptions('SUBSCRIPTION_TYPE'),
  );
  await app.startAllMicroservices();
}
bootstrap();

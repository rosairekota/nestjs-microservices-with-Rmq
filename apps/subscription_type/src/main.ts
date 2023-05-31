import { NestFactory } from '@nestjs/core';
import { SubscriptionTypeModule } from './subscription_type.module';

async function bootstrap() {
  const app = await NestFactory.create(SubscriptionTypeModule);
  await app.listen(3000);
}
bootstrap();

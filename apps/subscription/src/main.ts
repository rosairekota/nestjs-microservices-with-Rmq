import { NestFactory } from '@nestjs/core';
import { SubscriptionModule } from './subscription.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(SubscriptionModule);
  //app.use(new ValidationPipe());
  app.setGlobalPrefix('api');
  const configService = app.get(ConfigService);
  await app.listen(parseInt(configService.get('PORT')));
}
bootstrap();

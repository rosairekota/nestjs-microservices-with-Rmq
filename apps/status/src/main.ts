import { NestFactory } from '@nestjs/core';
import { StatusModule } from './status.module';

async function bootstrap() {
  const app = await NestFactory.create(StatusModule);
  await app.listen(4700);
}
bootstrap();

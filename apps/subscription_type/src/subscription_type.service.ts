import { Injectable } from '@nestjs/common';

@Injectable()
export class SubscriptionTypeService {
  getHello(): string {
    return 'Hello World!';
  }
}

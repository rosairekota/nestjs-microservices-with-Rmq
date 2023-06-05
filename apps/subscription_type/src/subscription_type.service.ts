import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SubscriptionTypeService {
  private logger: Logger = new Logger(SubscriptionTypeService.name);
  getHello(): string {
    return 'Hello World!';
  }
  create(data: any) {
    this.logger.log('events emitted: ', data);
  }
}

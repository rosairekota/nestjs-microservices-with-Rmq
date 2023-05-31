import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionTypeController } from './subscription_type.controller';
import { SubscriptionTypeService } from './subscription_type.service';

describe('SubscriptionTypeController', () => {
  let subscriptionTypeController: SubscriptionTypeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionTypeController],
      providers: [SubscriptionTypeService],
    }).compile();

    subscriptionTypeController = app.get<SubscriptionTypeController>(SubscriptionTypeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(subscriptionTypeController.getHello()).toBe('Hello World!');
    });
  });
});

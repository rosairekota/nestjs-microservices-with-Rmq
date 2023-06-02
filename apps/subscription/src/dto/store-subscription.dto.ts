import { IsString } from 'class-validator';

export class StoreSubscriptionRequest {
  @IsString()
  name: string;
}

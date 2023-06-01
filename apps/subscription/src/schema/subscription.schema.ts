import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/database/schema/abstract.schema';
import { SchemaTypes } from 'mongoose';

@Schema()
export class Subscription extends AbstractDocument {
  @Prop({ type: SchemaTypes.String })
  name: string;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);

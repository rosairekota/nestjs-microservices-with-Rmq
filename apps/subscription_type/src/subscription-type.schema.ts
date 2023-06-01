import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/database/schema/abstract.schema';
import { SchemaTypes } from 'mongoose';

@Schema()
export class SubscriptionType extends AbstractDocument {
  @Prop({ type: SchemaTypes.String })
  name: string;

  @Prop({ type: SchemaTypes.String })
  description: string;
}

export const SubscriptionTypeSchema =
  SchemaFactory.createForClass(SubscriptionType);

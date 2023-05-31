import { Schema, Prop } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/database/schema/abstract.schema';
import { SchemaTypes } from 'mongoose';

@Schema()
export class SubscriptionSchema extends AbstractDocument {
  @Prop({ type: SchemaTypes.String })
  name: string;
}

import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
import { User } from '../../user/schemas/user.schema';
import { Shop } from './shop.schema';

export type ComplaintDocument = Complaint & Document;

@Schema()
export class Complaint {
  @Prop()
  text: string;

  @Prop({ type: Date })
  datetime: Date;

  @Prop()
  result: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Shop' })
  shopId: Shop;
}

export const ComplaintSchema = SchemaFactory.createForClass(Complaint);

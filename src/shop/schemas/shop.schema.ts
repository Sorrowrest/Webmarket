import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Product } from '../../product/schemas/product.schema';

import { Complaint } from './complaint.schema';

export type ShopDocument = Shop & Document;

@Schema()
export class Shop {
  @Prop()
  name: string;

  @Prop()
  url: string;

  @Prop()
  rating: number;

  @Prop()
  status: string;

  @Prop()
  legalAddress: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  product: Product[];

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]})
  comment: Comment[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Complaint' }] })
  complaint: Complaint[];
}

export const ShopSchema = SchemaFactory.createForClass(Shop);

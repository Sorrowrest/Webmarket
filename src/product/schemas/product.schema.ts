import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
import { Shop } from '../../shop/schemas/shop.schema';
import { Comment } from './comment.schema';


export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  url: string;

  @Prop({ type: Date, default: Date.now })
  date: Date;

  @Prop()
  price: string;

  @Prop()
  manufacturer: string;

  @Prop()
  category: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Shop' })
  shop: Shop;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]})
  comment: Comment[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);

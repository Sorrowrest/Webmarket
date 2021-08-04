import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../../user/schemas/user.schema';
import { Product } from '../../product/schemas/product.schema';

export type FavoriteDocument = Favorite & Document;

@Schema()
export class Favorite {
  @Prop()
  productName: string;

  @Prop()
  result: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  product: Product;
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);

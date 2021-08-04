import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
//import { User } from '../../user/schemas/user.schema';
import { Shop } from './shop.schema';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  text: string;

  @Prop({ type: Date, default: Date.now })
  datetime: Date;

  //@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  //userId: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Shop' })
  shopId: Shop;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

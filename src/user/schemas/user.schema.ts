import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Favorite } from '../../favorite/schemas/favorite.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userInfo: string;

  @Prop()
  email: string;

  @Prop()
  login: string;

  @Prop()
  blackList: boolean;

  @Prop()
  telephone: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Favorite' })
  favorite: Favorite;
}

export const UserSchema = SchemaFactory.createForClass(User);

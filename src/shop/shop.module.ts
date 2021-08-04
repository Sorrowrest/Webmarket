import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { Shop, ShopSchema } from './schemas/shop.schema';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { Complaint, ComplaintSchema } from './schemas/complaint.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Shop.name, schema: ShopSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    MongooseModule.forFeature([
      { name: Complaint.name, schema: ComplaintSchema },
    ]),
  ],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}

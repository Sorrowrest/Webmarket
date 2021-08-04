import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { CreateShopDto } from './dto/create-shop.dto';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { Complaint, ComplaintDocument } from './schemas/complaint.schema';
import { Shop, ShopDocument } from './schemas/shop.schema';

@Injectable()
export class ShopService {
  constructor(
    @InjectModel(Shop.name) private shopModel: Model<ShopDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    @InjectModel(Complaint.name)
    private complaintModel: Model<ComplaintDocument>,
  ) {}

  async create(dto: CreateShopDto): Promise<Shop> {
    const shop = await this.shopModel.create({ ...dto, rating: 0 });
    return shop;
  }
  async getAll(): Promise<Shop[]> {
    const shops = await this.shopModel.find();
    return shops;
  }
  async getOne(id: ObjectId): Promise<Shop> {
    const shop = await this.shopModel
      .findById(id)
      .populate('comment')
      .populate('complaint');
    return shop;
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const shop = await this.shopModel.findByIdAndDelete(id);
    return shop._id;
  }
  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const shop = await this.shopModel.findById(dto.shopId);
    const comment = await this.commentModel.create({ ...dto, score: 0 });
    if (!Array.isArray(shop.comment)) {
      shop.comment = [];
    }
    shop.comment.push(comment._id);
    await shop.save();
    return comment;
  }
  async addComplaint(dto: CreateComplaintDto): Promise<Complaint> {
    const shop = await this.shopModel.findById(dto.shopId);
    const complaint = await this.complaintModel.create({
      ...dto,
      result: false,
    });
    if (!Array.isArray(shop.complaint)) {
      shop.complaint = [];
    }
    shop.complaint.push(complaint._id);
    await shop.save();
    return complaint;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
    const product = await this.productModel.create({ ...dto });
    return product;
  }
  async getAll(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }
  async getOne(id: ObjectId): Promise<Product> {
    const product = await this.productModel.findById(id).populate('comment');
    return product;
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const product = await this.productModel.findByIdAndDelete(id);
    return product._id;
  }
  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const product = await this.productModel.findById(dto.productId);
    const comment = await this.commentModel.create({ ...dto, score: 0 });
    if (!Array.isArray(product.comment)) {
      product.comment = [];
    }
    product.comment.push(comment._id);
    await product.save();
    return comment;
  }
}

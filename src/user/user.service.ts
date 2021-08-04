import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async createUser(dto: CreateUserDto) {
    const user = await this.userModel.create(dto);
    return user;
  }
  async getAllUsers() {
    const users = await this.userModel.find();
    return users;
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const user = await this.userModel.findByIdAndDelete(id);
    return user._id;
  }
}

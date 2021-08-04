import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Favorite, FavoriteDocument } from './schemas/favorite.schema';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectModel(Favorite.name) private FavoriteModel: Model<FavoriteDocument>,
  ) {}

  async create() {}
  async getAll() {}
  async getOne() {}
  async Delete() {}
}

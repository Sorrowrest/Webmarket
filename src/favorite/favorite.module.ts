import { FavoriteService } from './favorite.service';
import { Favorite, FavoriteSchema } from './schemas/favorite.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Favorite.name, schema: FavoriteSchema },
    ]),
  ],
  controllers: [],
  providers: [FavoriteService],
})
export class FavoriteModule {}

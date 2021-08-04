import { FavoriteModule } from './favorite/favorite.module';
import { UserModule } from './user/user.module';
import { ShopModule } from './shop/shop.module';
import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    FavoriteModule,
    UserModule,
    ShopModule,
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:12345@cluster0.prfs0.mongodb.net/webmarket?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}

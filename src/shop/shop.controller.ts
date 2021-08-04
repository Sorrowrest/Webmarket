import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { CreateShopDto } from './dto/create-shop.dto';
import { ShopService } from './shop.service';

@Controller('/shop')
export class ShopController {
  constructor(private shopService: ShopService) {}

  @Post()
  create(@Body() dto: CreateShopDto) {
    return this.shopService.create(dto);
  }
  @Get()
  getAll() {
    return this.shopService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.shopService.getOne(id);
  }
  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.shopService.delete(id);
  }
  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.shopService.addComment(dto);
  }
  @Post('/complaint')
  addComplaint(@Body() dto: CreateComplaintDto) {
    return this.shopService.addComplaint(dto);
  }
}

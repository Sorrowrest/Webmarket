import { ObjectId } from "mongoose";

export class CreateCommentDto {
    readonly text;
    //readonly userId: ObjectId;
    readonly productId: ObjectId;
}
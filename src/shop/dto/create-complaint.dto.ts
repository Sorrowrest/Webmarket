import { ObjectId } from "mongoose";

export class CreateComplaintDto {
    readonly text;
    //readonly userId: ObjectId;
    readonly shopId: ObjectId;
}
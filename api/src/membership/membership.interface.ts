import { Document } from "mongoose";

export interface Member extends Document {
    name: string;
    email: string;
    dob: string;
}
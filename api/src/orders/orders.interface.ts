import mongoose from "mongoose";


export interface Order extends mongoose.Document {
    id: string;
    items: { name: string; price: number; quantity: number }[];
    total: number;
  }
  
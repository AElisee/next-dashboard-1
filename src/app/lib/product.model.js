import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
      min: 0,
    },
    color: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    size: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Product =
  mongoose.models?.Product || mongoose.model("Product", ProductSchema);

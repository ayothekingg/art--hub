import mongoose from "mongoose";

export const Status = {
  AVAILABLE: "available",
  NOT_AVAILABLE: "not available",
};

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    creator: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    listedAt: {
      type: Date,
      default: Date.now,
    },
    description: {
      type: String,
    },
    deadline: {
      type: Date,
      required: false,
    },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.AVAILABLE,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    category: {
      type: String,
      index: true,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

export default Product;

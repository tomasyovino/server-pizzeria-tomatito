import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    image: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true},
    description: { type: String, required: true }
}, { timestamps: true });

export const ProductModel = mongoose.model("Product", productSchema);
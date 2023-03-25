import mongoose from "mongoose";

const productSchema = mongoose.Schema({

});

export const ProductModel = mongoose.model("Product", productSchema);
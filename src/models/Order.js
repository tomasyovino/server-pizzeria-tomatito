import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    products: { type: Array, required: true, max: 100 },
    amount: { type: Number, required: true },
    payMethod: { type: String, required: true }
}, { timestamps: true });

export const OrderModel = mongoose.model("Order", orderSchema);
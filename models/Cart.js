import mongoose from 'mongoose'

export const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [{
    productId: { type: String },
    quantity: { type: Number, default: 1 }
  }]
}, { timestamps: true })

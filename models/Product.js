import mongoose from 'mongoose'

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  categories: { type: Array },
  size: { type: String },
  color: { type: String },
  price: { type: Number, required: true }
}, { timestamps: true })

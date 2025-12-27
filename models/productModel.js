import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
  author: ObjectId,
  name: String,
  price: Number,
  discount: Number,
  categoryid: String,
  brandid: String,
  description: String,
  filepath:String
});

const productModel = mongoose.model('products', productSchema);
export default productModel;
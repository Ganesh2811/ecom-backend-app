import mongoose from "mongoose";

const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: String
});

const brandModel = mongoose.model('brands', brandSchema);

export default brandModel;
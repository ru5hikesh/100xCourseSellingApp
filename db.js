require("dotenv").config();
const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },
});

const adminSchema = mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: String,
});

const purchaseSchema = mongoose.Schema({
    userId: ObjectId,
    courseId: ObjectId,
})

const userModel = mongoose.model("user", userSchema)
const adminModel = mongoose.model("admin", adminSchema)
const courseModel = mongoose.model("course", courseSchema)
const purchaseModel = mongoose.model("purchase", purchaseSchema)


module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
}
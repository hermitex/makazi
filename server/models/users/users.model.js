import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    accountType: { type: String, required: true, trim: true },
    agreement: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
  },
  { timestamps: true }
);


const User = mongoose.model('Users', userSchema)

export default User;
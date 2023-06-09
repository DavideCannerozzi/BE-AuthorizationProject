import mongoose, { Document, Schema } from "mongoose"

export interface UserDocument extends Document {
  username: string
  email: string
  password: string
}

const UserSchema: Schema<UserDocument> = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const User = mongoose.model("User", UserSchema, "auth1")

export default User

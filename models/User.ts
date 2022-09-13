import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }, 
  companyName: {
    type: String
  },
  linkedinUrl: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    unique: true
  },
  contactNumber: {
    type:String,
    required: true
  },
  message: {
    type: String,
    required: true,
    maxlength: [100, 'Message cannot be more than 100 Characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const UserModel:any = mongoose.models.user || model("user", UserSchema);
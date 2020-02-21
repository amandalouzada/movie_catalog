import { Schema, model, Document, } from 'mongoose';

interface UserInterface extends Document {
  username: string;
  password: string;
  token: string;
  createdAt?: Date;
  updatedAt?: Date;
}


const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    unique: true,
    sparse:true,
  },
}, { timestamps: true, });


export const User = model<UserInterface>('user', UserSchema);


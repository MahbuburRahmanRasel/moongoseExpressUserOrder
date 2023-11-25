import { Schema, model } from 'mongoose';
import { IUserOrder } from './users.interface';

const userSchema = new Schema<IUserOrder>({
  user: {
    userId: {
      type: Number,
      required: [true, 'ID is required'],
      unique: true,
    },
    username: {
      type: String,
      required: [true, 'Please Provide username'],
    },
    password: {
      type: String,
      required: [true, 'Please provide password'],
    },
    fullName: {
      firstName: {
        type: String,
        required: [true, 'Please provide first name'],
      },
      lastName: {
        type: String,
        required: [true, 'Please provide last name'],
      },
    },
    age: {
      type: Number,
      required: [true, 'Please provide age'],
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    hobbies: [String],
    address: {
      street: {
        type: String,
        required: [true],
      },
      city: {
        type: String,
        required: [true],
      },
      country: {
        type: String,
        required: [true],
      },
    },
  },
  order: [
    {
      productName: String,
      price: Number,
      quantity: Number,
    },
  ],
});



const User = model<IUserOrder>('User', userSchema);

export default User;

//import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import { IUserOrder } from './users.interface';
//import config from '../../config';


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

// userSchema.pre('save', async function (next) {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const userdata = this; 
//   userdata.user.password = await bcrypt.hash(
//     userdata.user.password,
//     Number(config.bcrypt_salt_rounds)
//   );
//   next();
// });


// userSchema.post('save', function (doc, next) {
//   doc.user.password = '';
//   next();
// });






const User = model<IUserOrder>('User', userSchema);

export default User;

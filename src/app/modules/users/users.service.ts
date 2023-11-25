import { IUserOrder } from './users.interface';
import User from './users.model';

const createUser = async (userData: IUserOrder): Promise<IUserOrder> => {
  const result = await User.create(userData);
  return result;
};

const getAllusers = async (): Promise<IUserOrder[]> => {
  const result = await User.find({}, { order: 0 });
  return result;
};

const getSingleUser = async (userId: string) => {
  const result = await User.findOne({ 'user.userId': userId }, { order: 0 });
  return result;
};

const updateUser = async (
  userId: string,
  userData: any,
): Promise<IUserOrder | null> => {
  const result = await User.findOneAndUpdate(
    { 'user.userId': userId },
    { $set: { user: userData } },
    { new: true },
  );

  return result;
};

const deleteUser = async (userId: string): Promise<IUserOrder | null> => {
  const result = await User.findOneAndDelete({ userId: userId });
  return result;
};

const updateOrder = async (
  userId: string,
  newOrderData: any,
): Promise<IUserOrder | null> => {
  const result = await User.findOneAndUpdate(
    { 'user.userId': userId },
    { $push: { order: newOrderData } },
    { new: true },
  );

  return result;
};

const getSingleUserOrder = async (userId: string) => {
  const result = await User.findOne({ 'user.userId': userId }, { user: 0 });
  return result;
};

const getTotalPrice = async (userId: string): Promise<number | null> => {
  const user = await User.findOne({ 'user.userId': userId });

  if (!user) {
    throw null; // User not found
  }

  const totalPrice = user.order?.reduce(
    (acc, order) => acc + order.price * order.quantity,
    0,
  );

  return totalPrice as number;
};

export const userServices = {
  createUser,
  getAllusers,
  getSingleUser,
  updateUser,
  deleteUser,
  updateOrder,
  getSingleUserOrder,
  getTotalPrice,
};

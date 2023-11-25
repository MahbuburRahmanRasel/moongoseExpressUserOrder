import express from 'express';
import { userController } from './users.controller';

const router = express.Router();
router.post('/users', userController.createUser);
router.get('/users', userController.getAllusers);
router.get('/users/:userId', userController.getSingleUser);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

router.put('/users/:userId/orders', userController.updateOrder);
router.get('/users/:userId/orders', userController.getSingleUserOder);
router.get('/users/:userId/orders/total-price', userController.getTotalPrice);

export const userRouter = {
  router,
};

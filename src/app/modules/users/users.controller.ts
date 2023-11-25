import { Request, Response } from 'express';
import { userServices } from './users.service';
import { IUserOrder } from './users.interface';



const createUser = async (req: Request, res: Response) => {
  try {
    
    const userData = req.body
    const result = await userServices.createUser(userData)
    
    res.status(201).json({
      status: 'success',
      message: 'User Created Successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      meassage: error.meassage || 'Somthing Went Wrong',
    });
  }
};

const getAllusers = async (req: Request, res: Response) => {
    try {
      
     
      const result = await userServices.getAllusers()
      
      res.status(200).json({
        status: 'success',
        message: 'User fetched Successfully',
        data: result,
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        status: 'fail',
        meassage: error.meassage || 'Somthing Went Wrong',
      });
    }
  };

  const getSingleUser = async (req: Request, res: Response) => {
    try {
      
      const userId  = req.params.userId;
      const result = await userServices.getSingleUser(userId)
      
      res.status(200).json({
        status: 'success',
        message: 'Single User fetched Successfully',
        data: result,
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        status: 'fail',
        meassage: error.meassage || 'Somthing Went Wrong',
      });
    }
  };

const updateUser = async (req: Request, res: Response) => {
    try {
      
      const userData = req.body
      const {userId} = req.params
      const result = await userServices.updateUser(userId,userData)
      
      
      res.status(200).json({
        status: 'success',
        message: 'User updated Successfully',
        data: result,
      });

    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        status: 'fail',
        meassage: error.meassage || 'Somthing Went Wrong',
      });
    }
  };

  const deleteUser = async (req: Request, res: Response) => {
    try {
      
      const {userId} = req.params
     await userServices.deleteUser(userId)
      
      res.status(200).json({
        status: 'success',
        message: 'User deleted Successfully',
   
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        status: 'fail',
        meassage: error.meassage || 'Somthing Went Wrong',
      });
    }
  };


  const updateOrder = async (req: Request, res: Response) => {
    try {
      
      const userData = req.body
      const {userId} = req.params
      const result = await userServices.updateOrder(userId,userData)
      
      res.status(200).json({
        status: 'success',
        message: "Order created successfully!",
        data: null,
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        status: 'fail',
        meassage: error.meassage || 'Somthing Went Wrong',
      });
    }
  };


  const getSingleUserOder = async (req: Request, res: Response) => {
    try {
      
      const userId  = req.params.userId;
      const result = await userServices.getSingleUserOrder(userId)
      
      res.status(200).json({
        status: 'success',
        message: 'Order fetched Successfully',
        data: result,
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        status: 'fail',
        meassage: error.meassage || 'Somthing Went Wrong',
      });
    }
  };


  const getTotalPrice = async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const totalPrice = await userServices.getTotalPrice(userId);
  
      if (totalPrice === null) {
        return res.status(404).json({
          status: 'fail',
          message: 'User not found',
        });
      }
  
      res.status(200).json({
        status: 'success',
        message: 'Total price retrieved successfully',
        data: {
          userId,
          totalPrice,
        },
      });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({
        status: 'fail',
        message: error.message || 'Something went wrong',
      });
    }
  };


export const userController = {
  createUser,
  getAllusers, 
    getSingleUser,
    updateUser,
    deleteUser,
    updateOrder,
    getSingleUserOder,
    getTotalPrice
};

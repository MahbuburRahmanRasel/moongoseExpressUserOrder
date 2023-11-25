interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
}

interface IOrders {
  productName: string;
  price: number;
  quantity: number;
}

interface IUserOrder {
  user: IUser;
  order?: IOrders[];
}

export { IUserOrder };

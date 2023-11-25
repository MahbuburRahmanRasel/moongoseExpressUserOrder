import express, { Request, Response } from 'express';
import cors from 'cors';
import { userRouter } from './app/modules/users/users.route';

const app = express();

//use parsers
app.use(express.json());
//use cors
app.use(cors());

app.use('/api', userRouter.router);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'Success',
    message: 'hello Users',
  });
});

export default app;

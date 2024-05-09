import UserService from '../service/user.service';
import { Request, Response, NextFunction } from 'express';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UserService.createUser(req.body);
    res.json('Success');
  } catch (err) {
    next(err);
  }
};

const UserController = { createUser };

export default UserController;

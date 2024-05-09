import express from 'express';
import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import UserController from '../controllers/user.controller';
const router = express.Router();

router.post(
  '/',

  UserController.createUser,
);

export default router;

import express from 'express';
import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import UserController from '../controllers/user.controller';
const router = express.Router();



router.post(
  '/',
  
  UserController.createUser,
);

// router.post(
//   '/upload',
//   upload.single('image'),
//   (req: Request, res: Response, next: NextFunction) => {
//     try {
//       console.log('route entered');
//       res.json({ message: 'Image uploaded successfully', file: req.file });
//     } catch (err: any) {
//       next(err);
//       res.status(400).json({ statusCode: 400, message: err.message });
//     }
//   },
// );

export default router;

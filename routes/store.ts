import express from 'express';
import StoreController from '../controllers/store.controller';
import { valid } from 'joi';
import validate, { ValidationSource } from '../middleware/validate';
import {
  createGroceryStore,
  createStoreSchema,
  deleteStoreSchema,
  updateStoreSchema,
} from '../schema/store';

const router = express.Router();

router.get('/', StoreController.getStores);

router.post(
  '/',
  validate(createStoreSchema, ValidationSource.BODY),
  StoreController.createStore,
);

router.patch(
  '/',
  validate(updateStoreSchema, ValidationSource.BODY),
  StoreController.updateStore,
);
router.post(
  '/groceryStore',
  validate(createGroceryStore, ValidationSource.BODY),
  StoreController.createGroceryStore,
);
router.patch(
  '/delete',
  validate(deleteStoreSchema, ValidationSource.BODY),
  StoreController.deleteStore,
);
// Add more routes as needed

export default router;

import express from 'express';
import validate, { ValidationSource } from '../middleware/validate';
import {
  createProduct,
  createProductCategory,
  deleteProduct,
  deleteProductCategory,
  fetchProductsMappedUnderStore,
  updateProduct,
  updateProductCategory,
} from '../schema/product';
import ProductController from '../controllers/product.controller';

const router = express.Router();

router.get(
  '/',
  validate(fetchProductsMappedUnderStore, ValidationSource.QUERY),
  ProductController.getAllproductsMappedUnderStore,
);
router.get(
  '/productCategory',
  validate(fetchProductsMappedUnderStore, ValidationSource.QUERY),
  ProductController.getaAllproductCategroyUnderStore,
);
router.post(
  '/',
  validate(createProduct, ValidationSource.BODY),
  ProductController.createProduct,
);
router.post(
  '/productCategory',
  validate(createProductCategory, ValidationSource.BODY),
  ProductController.createProductCategory,
);
router.patch(
  '/',
  validate(updateProduct, ValidationSource.BODY),
  ProductController.updateProduct,
);
router.patch(
  '/productCategory',
  validate(updateProductCategory, ValidationSource.BODY),
  ProductController.updateProductCategory,
);
router.patch(
  '/delete',
  validate(deleteProduct, ValidationSource.BODY),
  ProductController.softDeleteProduct,
);
router.patch(
  'delete/productCategory',
  validate(deleteProductCategory, ValidationSource.BODY),
  ProductController.softDeleteProductCategory,
);
export default router;

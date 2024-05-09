import Joi from 'joi';

export const createProduct = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().integer().min(1).required(),
  productCategoryId: Joi.number().min(1).required(),
});

export const updateProduct = Joi.object({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().min(3).required(),
  price: Joi.number().integer().min(1).required(),
});

export const deleteProduct = Joi.object({
  id: Joi.number().integer().min(1).required(),
});

export const createProductCategory = Joi.object({
  name: Joi.string().min(3).required(),
  storeId: Joi.number().integer().min(1).required(),
});

export const fetchProductsMappedUnderStore = Joi.object({
  storeId: Joi.number().integer().min(1).required(),
});
export const updateProductCategory = Joi.object({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().min(3).required(),
  storeId: Joi.number().integer().min(1).required(),
});

export const deleteProductCategory = Joi.object({
  id: Joi.number().integer().min(1).required(),
});

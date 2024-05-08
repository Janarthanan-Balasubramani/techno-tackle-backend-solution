import Joi from "joi";

export const createStoreSchema = Joi.object({
    name: Joi.string().min(3).required(),
    address: Joi.string().min(10).required(),
  });
  


  export const updateStoreSchema = Joi.object({
    id:Joi.number().integer().min(1).required(),
    name: Joi.string().min(3).required(),
    address: Joi.string().min(10).required(),
  });
  

  export const deleteStoreSchema = Joi.object({
    id:Joi.number().integer().min(1).required()
  });
  
  export const createGroceryStore = Joi.object({
    name: Joi.string().min(3).required(),
    address: Joi.string().min(10).required(),
  });
  
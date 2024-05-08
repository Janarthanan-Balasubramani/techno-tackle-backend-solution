import StoreService from '../service/store.service';
import { Request, Response } from 'express';
import ApiResponse from '../utils/apiResponse';
import asyncHandler from '../middleware/asyncHandler';
import { HttpStatus } from '../utils/httpError';

const getStores =asyncHandler( async (req: Request, res: Response) => {
  const posts = await StoreService.getStores();
  ApiResponse.send(res,200,"Store fetched successfully",posts)
});

const createStore = asyncHandler(async (req: Request, res: Response) => {
 await StoreService.createStore(req.body);
  ApiResponse.send(res,HttpStatus.OK.code,"Store created Successfully")
  return 
});

const updateStore = asyncHandler(async(req: Request, res: Response)=>{
 await StoreService.updateStore(req.body)
ApiResponse.send(res,200,"Store updated Successfully")
return
});

const deleteStore = asyncHandler(async(req: Request, res: Response)=>{
  console.log(typeof(req.body.id))
  const deleteStore = await StoreService.deleteStore(req.body)
  ApiResponse.send(res,200,"Store deleted Successfully")

})
const StoreController = { getStores, createStore,updateStore ,deleteStore};

export default StoreController;

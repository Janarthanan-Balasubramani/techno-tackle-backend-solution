import asyncHandler from "../middleware/asyncHandler";
import ProductService from "../service/product.service";
import ApiResponse from "../utils/apiResponse";
import { HttpStatus } from "../utils/httpError";
import { Request, Response } from 'express';



const createProduct = asyncHandler(async(req:Request,res:Response )=>{
    const product = await ProductService.createProduct(req.body)
    ApiResponse.send(res,HttpStatus.OK.code,"Product created Successfully",product)
    return 
  
});


const createProductCategory = asyncHandler(async(req:Request,res:Response )=>{
    const product = await ProductService.createProductCategory(req.body)
    ApiResponse.send(res,HttpStatus.OK.code,"Product category Successfully",product)
    return 
  
});

const updateProduct = asyncHandler(async(req:Request,res:Response)=>{
    await ProductService.updateProduct(req.body)
    ApiResponse.send(res,HttpStatus.OK.code,"product updated successfully")
    return 

})

const updateProductCategory = asyncHandler(async(req:Request,res:Response)=>{
  await ProductService.updateProductCategory(req.body)
    ApiResponse.send(res,HttpStatus.OK.code,"product category updated successfully")
    return 

})


const softDeleteProduct   = asyncHandler(async(req:Request,res:Response)=>{
    await ProductService.softDeleteProduct(req.body)
})



const softDeleteProductCategory = asyncHandler(async(req:Request,res:Response)=>{
    await ProductService.softDeleteProductCategory(req.body)
})

const getAllproductsMappedUnderStore = asyncHandler(async(req:Request,res:Response)=>{
    const data = await ProductService.getAllproductsMappedUnderStore(req.query.storeId)
    ApiResponse.send(res,HttpStatus.OK.code,"Products mapped under store fetched successfully",data)
    return 

})

const getaAllproductCategroyUnderStore = asyncHandler(async(req:Request,res:Response)=>{
    const data = await ProductService.getAllProductCategoryMappedUnderStore(req.query.storeId)
    ApiResponse.send(res,HttpStatus.OK.code,"Product category mapped under store fetched successfully",data)
    return 

})
const ProductController = {createProduct,createProductCategory,updateProduct,updateProductCategory,softDeleteProduct,softDeleteProductCategory,getAllproductsMappedUnderStore,getaAllproductCategroyUnderStore}

export default ProductController
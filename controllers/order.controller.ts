

import { Request, Response } from 'express';
import asyncHandler from '../middleware/asyncHandler';
import OrderService from '../service/order.service';
import ApiResponse from '../utils/apiResponse';
import { HttpStatus } from '../utils/httpError';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const orderCreate = asyncHandler(async(req:Request,res:Response)=>{
   await OrderService.createOrder(req.body)
   ApiResponse.send(res,HttpStatus.OK.code,"order  created Successfully")
   return 

})

const fetchOrders = asyncHandler(async(req:Request,res:Response)=>{
  const data =  await  OrderService.fetchOrder(req.query.storeId,req.query.groceryStoreId)
  ApiResponse.send(res,HttpStatus.OK.code,"Orders fetched successfully",data)
  return
})

const fetchOrderDetailsPDF =  asyncHandler(async(req:Request,res:Response)=>{
   const data  = await OrderService.fetchOrderDetails(req.query.orderId)
   const docDefinition: TDocumentDefinitions = {
      content: [
         { text: 'Order Details', style: 'header' },
         {
            style: 'tableExample',
            table: {
               body: [
                  ['Order Name', 'Product Name','Quantity','Stock'],
                  ...data.map((item: any) => [item.order.name, item.product.name,item.orderQuantity,item.stock]) 
               ]
            }
         }
      ],
      styles: {
         header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
         },
         tableExample: {
            margin: [0, 5, 0, 15]
         }
      }
   };

   // Create the PDF
   const pdfDoc = pdfMake.createPdf(docDefinition);
   pdfDoc.getBuffer((buffer: Buffer) => {
      res.end(buffer);
   });
});

const fetchOrderDetails=  asyncHandler(async(req:Request,res:Response)=>{
   const data  = await OrderService.fetchOrderDetails(req.query.orderId)
  ApiResponse.send(res,HttpStatus.OK.code,"Order details fetched successfully",data)
});
const OrderController = {orderCreate,fetchOrders,fetchOrderDetails,fetchOrderDetailsPDF}
export default OrderController
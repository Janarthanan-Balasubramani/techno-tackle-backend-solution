import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();




const createProduct = async(product:any) =>{
   await prisma.product.create({
    data:{
        name:product.name,
    price:product.price,
    productCategoryId:product.productCategoryId
    }
   })
}

const createProductCategory =  async(productCategory:any) =>{
    await prisma.productCategory.create({
     data:{
         name:productCategory.name,
     storeId:productCategory.storeId
     }
    })
}


const updateProduct = async(product:any) =>{
await prisma.product.update({
    where:{
        id:+product.id
    },
    data:{
        name:product.name,
        price:product.price
    }
})
}


const updateProductCategory = async(productCategory:any)=>{
    await prisma.productCategory.update({
        where:{
            id:+productCategory.id
        },
        data:{
            name:productCategory.name,

        }
    })
}


const softDeleteProductCategory = async(productCategory:any) =>{
    await prisma.productCategory.update({
        where:{
            id:+productCategory.id,

        },
        data:{
            isActive:false
        }
    })
}

const softDeleteProduct = async(product:any) =>{
    await prisma.product.update({
        where:{
            id:+product.id,

        },
        data:{
            isActive:false
        }
    })
}

const getAllProductsForStore  =async(storeId:any)=>{
    return prisma.product.findMany({
        where:{
            productCategory:{
                storeId:+storeId
            }
        }
    })
}

const getAllProductcategoryForStore  =async(storeId:any)=>{
    return prisma.productCategory.findMany({
        where:{
           storeId:+storeId
        }
    })
}

const ProductRepository =  {createProduct,createProductCategory,updateProduct,updateProductCategory,softDeleteProductCategory,softDeleteProduct,
    getAllProductsForStore,getAllProductcategoryForStore
}

export default ProductRepository
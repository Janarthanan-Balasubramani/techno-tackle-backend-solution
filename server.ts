import { PrismaClient } from '@prisma/client';
import app from './app';

const port = 3000;


const initDbFunction = async  (prisma:PrismaClient)=>{
  console.log("initDatabase function entered")
 const storeCount = await prisma.store.count()
 const orderStatusCount = await prisma.orderStatus.count()
 console.log(storeCount)
 if (storeCount==0){
  await prisma.store.create({
    data:{
      name:"Default store",
      address:"default address",
      
    }
  })
 }

 if (orderStatusCount==0){
  await prisma.orderStatus.create({
    data:{
      name:"Default status",
      
    }
  })
 }
}
app.listen(port, () => {
  const prisma = new PrismaClient();

  initDbFunction(prisma)
  console.log(`app running in the port ${port} successfully`);
});

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getPosts = async () => {
  return await prisma.store.findMany();
};

const createStore  = async (store:any ) => {
  return await prisma.store.create({ data: store });
};


const updateStore = async(store:any)=>{
  return await prisma.store.update({
    where:{
      id:+store.id,
      
    },
    data:{
      address:store.address,
      name:store.name
    }
  })
}


const checkIsStoreNameAlreadyTaken  = async(store:any): Promise<Boolean> =>{
const count  = await prisma.store.count({
  where:{
    name:{
      equals:store.name
    }
  }
})
return count>0
}

const checkIsStoreNameAlreadyTakenWithDifferentId = async(store:any):Promise<Boolean>=>{
  const count  = await prisma.store.count({
    where:{
      id:{
        not:+store.id
      },
      name:{
        equals:store.name
      }
    }
  })
  return count>0
}

const softDeleteStore  = async(store:any)=>{
  await prisma.store.update({
    where:{
      id:+store.id
    },
    data:{
      isActive:false
    }
  })
}

const isStoreExistWIthId = async(store:any) :Promise<Boolean>=>{
const count = await prisma.store.count({
  where:{
    id:+store.id,
    
  }
})
return count>0
}

const PostRepository = { getPosts, createStore,updateStore,
  checkIsStoreNameAlreadyTaken,checkIsStoreNameAlreadyTakenWithDifferentId,softDeleteStore,isStoreExistWIthId };

export default PostRepository;

import StoreRepository from '../repository/store.repository';
import { HttpError, HttpStatus } from '../utils/httpError';
const getStores = async () => {
  return await StoreRepository.getPosts();
};

const createStore = async (store: any) => {
  const isStoreNameALreadyExist = await StoreRepository.checkIsStoreNameAlreadyTaken(store)
  if(isStoreNameALreadyExist){
    throw new HttpError(
      HttpStatus.BAD_REQUEST,
      'Store name already exist',
    );
  } 
  return await StoreRepository.createStore(store);
};

const updateStore = async(store:any)=>{
const isStoreNameALreadyExist = await StoreRepository.checkIsStoreNameAlreadyTakenWithDifferentId(store)
if(isStoreNameALreadyExist){
  throw new HttpError(
    HttpStatus.BAD_REQUEST,
    'Store name already exist with different store ',
  );
}
return await StoreRepository.updateStore(store)
}

const deleteStore = async(store:any)=>{
 const isStoreExistWIthId = await StoreRepository.isStoreExistWIthId(store)
 if (!isStoreExistWIthId) {
  throw new HttpError(HttpStatus.BAD_REQUEST,"Store with id not found")
 }

 return await StoreRepository.softDeleteStore(store)
}
const createGroceryStore = async(groceryStore:any)=>{
  return await StoreRepository.createGroceryStore(groceryStore)
}
const PostService = { getStores, createStore,updateStore ,deleteStore,createGroceryStore};

export default PostService;

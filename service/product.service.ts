import ProductRepository from '../repository/product.repository';

const createProduct = async (product: any) => {
  return await ProductRepository.createProduct(product);
};

const createProductCategory = async (productCategory: any) => {
  return await ProductRepository.createProductCategory(productCategory);
};
const updateProduct = async (product: any) => {
  return await ProductRepository.updateProduct(product);
};

const updateProductCategory = async (productCategory: any) => {
  return await ProductRepository.updateProductCategory(productCategory);
};
const softDeleteProduct = async (product: any) => {
  return await ProductRepository.softDeleteProduct(product);
};

const softDeleteProductCategory = async (productCategory: any) => {
  return await ProductRepository.softDeleteProductCategory(productCategory);
};

const getAllproductsMappedUnderStore = async (storeId: any) => {
  return await ProductRepository.getAllProductsForStore(storeId);
};

const getAllProductCategoryMappedUnderStore = async (storeId: any) => {
  return await ProductRepository.getAllProductcategoryForStore(storeId);
};
const ProductService = {
  createProduct,
  createProductCategory,
  updateProduct,
  updateProductCategory,
  softDeleteProduct,
  softDeleteProductCategory,
  getAllproductsMappedUnderStore,
  getAllProductCategoryMappedUnderStore,
};

export default ProductService;

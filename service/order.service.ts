import OrderRepository from '../repository/order.repository';

const createOrder = async (order: any) => {
  return await OrderRepository.createOrder(order);
};

const fetchOrder = async (storeId: any, groceryStoreId: any) => {
  return await OrderRepository.fetchOrders(storeId, groceryStoreId);
};

const fetchOrderDetails = async (orderId: any) => {
  return await OrderRepository.fetchOrderDetails(orderId);
};
const OrderService = { createOrder, fetchOrder, fetchOrderDetails };

export default OrderService;

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createOrder = async (order: any) => {
  var totalAmount = 0;

  await prisma.$transaction(async (tx) => {
    const createOrder = await tx.orders.create({
      data: {
        name: order.name,
        orderStatusId: 1,
        senderId: +order.senderId,
        recieverId: +order.receiverId,
        totalAmount: totalAmount,
      },
    });

    for (let i of order.orders) {
      const productPrice = await tx.product.findFirst({
        where: {
          id: +i.productId,
        },
        select: {
          price: true,
        },
      });

      await tx.orderDetails.create({
        data: {
          orderId: +createOrder.id,
          stock: +i.stock,
          orderQuantity: +i.quantity,
          productId: +i.productId,
        },
      });

      if (productPrice) {
        totalAmount = totalAmount + productPrice.price * i.quantity;
      }
    }

    await tx.orders.update({
      where: {
        id: +createOrder.id,
      },
      data: {
        totalAmount: totalAmount,
      },
    });
  });
};

const fetchOrders = async (storeId: any, groceryStoreId: any) => {
  const order = await prisma.orders.findMany({
    where: {
      senderId: +storeId,
      recieverId: +groceryStoreId,
    },
    select: {
      createdAt: true,
      totalAmount: true,
      description: true,
      id: true,
      name: true,
    },
  });
  return order;
};
const fetchOrderDetails = async (orderId: any) => {
  const orderDetails = await prisma.orderDetails.findMany({
    where: {
      orderId: +orderId,
    },
    select: {
      orderId: true,
      order: {
        select: {
          name: true,
        },
      },
      stock: true,
      orderQuantity: true,
      productId: true,
      product: {
        select: {
          name: true,
        },
      },
    },
  });
  return orderDetails;
};

const OrderRepository = { createOrder, fetchOrders, fetchOrderDetails };

export default OrderRepository;

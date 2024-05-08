import Joi from "joi"


export  const createOrder = Joi.object({
    name:Joi.string().min(1).required(),
    senderId :Joi.number().integer().min(1).required(),
    receiverId :Joi.number().integer().min(1).required(),

    orders: Joi.array().items(
        Joi.object({
            productId: Joi.number().integer().min(1).required(),
            quantity : Joi.number().integer().min(1).required(),
            stock: Joi.number().integer().min(1).required()
        })
    ).min(1).required()
});


export const fetchOrder = Joi.object({
    storeId:Joi.number().integer().min(1).required(),
    groceryStoreId:Joi.number().integer().min(1).required(),

})

export  const fetchOrderDetails = Joi.object({
    orderId:Joi.number().integer().min(1).required()
})
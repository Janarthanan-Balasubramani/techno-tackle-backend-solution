This is the backend api

npm run server command is the way to start the server

POST REQUEST
http://localhost:3000/store

creates the store

creates the retail grocery store
http://localhost:3000/store/groceryStore

store details update
http://localhost:3000/store

In patch request

store delete request
http://localhost:3000/store/delete Patch request

creates the new product category
http://localhost:3000/product/productCategory

updates the product categroy details
http://localhost:3000/product/productCategory in patch request

creates new product
http://localhost:3000/product
POST request

update product details
http://localhost:3000/product
in patch request

we can also delete the products

Database design can be found in prisma folder

file name is schema.prisma

creating new order

http://localhost:3000/order POST request

getting order details

http://localhost:3000/order/orderDetails GET request

getting order details in pdf

http://localhost:3000/order/orderDetails/pdf GET request
that serves pdf as response

getting the orders of the particular sender and reciever
http://localhost:3000/order

and Every error is handled and thrown with status code

rate limiting is implemented with 30 requests per api for 1 minute

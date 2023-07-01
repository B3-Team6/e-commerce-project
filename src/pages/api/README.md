## API DOCUMENTATION

## BackOffice

## Order

### Retrieve Order

- `GET /api/backoffice/order/orderId` - Retrieves a specific order by its ID.

Example:
GET /api/backoffice/order/1

### Update Order

- `PATCH /api/backoffice/order/orderId` - Updates an order with the specified ID.

  Request Body:

  - `userId` (optional): ID of the user associated with the order.
  - `status` (optional): Updated status of the order.
  - `date` (optional): Updated date of the order.

Example:
PATCH /api/backoffice/order/1
Body: {
"userId": 2,
"status": "pending",
"date": "2023-06-30"
}

### Delete Order

There is an error when deleting the first element due to its dependency on user and product.

- `DELETE /api/backoffice/order/orderId` - Deletes an order with the specified ID.

Example:
DELETE /api/backoffice/order/1

### Create Order

- `POST /api/backoffice/order` - Creates a new order.

  Request Body:

  - `userId` (required): ID of the user associated with the order.
  - `status` (required): Status of the order.
  - `date` (required): Date of the order.

Example:
POST /api/backoffice/order
Body: {
"userId": 2,
"status": "pending",
"date": "2023-06-30"
}

### Get All Orders

- `GET /api/backoffice/order` - Retrieves all orders.

## order-products.js

## Description

The `order-products.js` file contains the implementation of the order-products API endpoint. This endpoint handles the CRUD operations for managing products within an order. It interacts with the `OrdersProductsModel`, `ProductModel`, and `OrderModel` to perform database operations. The endpoint supports retrieving, creating, updating, and deleting order products based on the provided order ID and product ID.

## Usage

- `GET`: Retrieves the list of products associated with a specific order ID. It validates the order ID parameter and returns the list of order products if found.
- `POST`: Adds a new product to an order. It validates the order ID, product ID, quantity, and price parameters. If the order and product exist, a new record is inserted into the `OrdersProductsModel` table.
- `PATCH`: Updates an existing order product. It validates the order ID, product ID, quantity, and price parameters. If the order and product exist, the quantity of the order product is updated in the `OrdersProductsModel` table.
- `DELETE`: Removes a product from an order. It validates the order ID and product ID parameters. If the order product exists, it is deleted from the `OrdersProductsModel` table.

## Note

The order-products endpoint ensures data integrity by validating the order and product existence before performing any database operations. It returns appropriate error messages if the required records are not found. The API endpoint follows a RESTful design for managing order products.

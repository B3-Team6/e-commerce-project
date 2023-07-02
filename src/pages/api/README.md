# API DOCUMENTATION

## BackOffice

### CATEGORIES

- GET /api/category/category - Returns all categories

- GET /api/category/categories - Returns a specific category

```json
{
  "result": {
    "id": 1,
    "name": "Canapé",
    "description": "Les canapés sont des sièges confortables pour les salons, disponibles dans différentes tailles et matériaux, souvent accompagnés de fauteuils assortis.",
    "image": "https://bucketairneis.s3.eu-west-3.amazonaws.com/Airneis.png",
    "createdAt": "2023-07-02T11:45:02.809Z",
    "updatedAt": "2023-07-02T11:45:02.809Z",
    "slug": "canape"
  }
}
```

- POST /api/category/category - Add a category

```json
{
  "name": "Armoire",
  "description": "Les armoires sont des meubles pour ranger des affaires",
  "image": "https://bucketairneis.s3.eu-west-3.amazonaws.com/Airneis.png"
}
```

- PATCH /api/category/categories - Edit a specific category

- DELETE /api/category/categories - Delete a specific category

### CONTACTS

- GET /api/contact/contact - Returns all contacts

- GET /api/contact/contacts - Returns a specific contact

```json
{
  "result": {
    "id": 2,
    "email": "alexandre@example.com",
    "message": "Salut, je suis intéressé par votre collection de tables basses en bois massif. Pourriez-vous me dire si elles sont fabriquées à partir de bois durable et quelles sont les dimensions disponibles ? Je cherche quelque chose qui s'accorde bien avec mon salon. Merci d'avance !",
    "createdAt": "2023-07-02T11:45:02.835Z",
    "updatedAt": "2023-07-02T11:45:02.835Z"
  }
}
```

- DELETE /api/contact/contacts - Delete a specific contact

## Order

## Retrieve Order

- `GET /api/backoffice/order/orderId` - Retrieves a specific order by its ID.

Example:
GET /api/backoffice/order/1

## Update Order

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

## Delete Order

There is an error when deleting the first element due to its dependency on user and product.

- `DELETE /api/backoffice/order/orderId` - Deletes an order with the specified ID.

Example:
DELETE /api/backoffice/order/1

## Create Order

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

## Get All Orders

- `GET /api/backoffice/order` - Retrieves all orders.

### order-products.js

## Description

The `order-products.js` file contains the implementation of the order-products API endpoint. This endpoint handles the CRUD operations for managing products within an order. It interacts with the `OrdersProductsModel`, `ProductModel`, and `OrderModel` to perform database operations. The endpoint supports retrieving, creating, updating, and deleting order products based on the provided order ID and product ID.

## Usage

- `GET`: Retrieves the list of products associated with a specific order ID. It validates the order ID parameter and returns the list of order products if found.
- `POST`: Adds a new product to an order. It validates the order ID, product ID, quantity, and price parameters. If the order and product exist, a new record is inserted into the `OrdersProductsModel` table.
- `PATCH`: Updates an existing order product. It validates the order ID, product ID, quantity, and price parameters. If the order and product exist, the quantity of the order product is updated in the `OrdersProductsModel` table.
- `DELETE`: Removes a product from an order. It validates the order ID and product ID parameters. If the order product exists, it is deleted from the `OrdersProductsModel` table.

## Note

The order-products endpoint ensures data integrity by validating the order and product existence before performing any database operations. It returns appropriate error messages if the required records are not found. The API endpoint follows a RESTful design for managing order products.

### Contact

### [id].js

## Description:

The `[id].js` file contains the implementation of the contact API handler. This handler is responsible for handling API requests related to contacts. It provides endpoints for retrieving and deleting contact messages.

## Dependencies:

- `ContactModel` from the contact database models
- `validate` middleware for request validation
- `mw` middleware for request handling
- `idValidator` for validating the ID parameter

**Usage:**
The `handler` provides the following endpoints:

## GET Endpoint

- Route: `/api/contact`
- Method: GET
- Description: Retrieves a contact message by its ID.
- Parameters:
  - `id`: The ID of the contact message.
- Returns:
  - Success: Returns the contact message object.
  - Error: Returns an error message if the contact message doesn't exist.

## DELETE Endpoint

- Route: `/api/contact`
- Method: DELETE
- Description: Deletes a contact message by its ID.
- Parameters:
  - `id`: The ID of the contact message.
- Returns:
  - Success: Returns the deleted contact message object.

### index.js

## Description:

The `handler.js` file contains the implementation of the contact API handler. This handler is responsible for handling API requests related to contacts. It provides endpoints for retrieving and creating contact messages.

## Dependencies:

- `ContactModel` from the contact database models
- `validate` middleware for request validation
- `slowDown` middleware for rate limiting
- `mw` middleware for request handling
- `emailValidator` and `messageValidator` for validating the request body

## Usage:

The `handler` provides the following endpoints:

## GET Endpoint

- Route: `/api/contact`
- Method: GET
- Description: Retrieves all contact messages.
- Returns:
  - Success: Returns an array of contact message objects.
  - Error: Returns an error message if there are no contact messages.

## POST Endpoint

- Route: `/api/contact`
- Method: POST
- Description: Creates a new contact message.
- Request Body:
  - `email`: The email address of the contact.
  - `message`: The message content.
- Returns:
  - Success: Returns `true` if the contact message is created successfully.
  - Error: Returns an error message if there is an error during the creation process or if the request is rate-limited.

### User

## Description:

The `[id].js` file contains the implementation of the user API handler. This handler is responsible for handling API requests related to users. It provides endpoints for retrieving, updating, and deleting user data.

## Dependencies:

- `UserModel` from the user database models
- `validate` middleware for request validation
- `mw` middleware for request handling
- `idValidator`, `displayNameValidator`, `emailValidator`, and `boolValidator` for validating the request parameters and body

## Usage:

The `[id]` provides the following endpoints:

## GET Endpoint

- Route: `/api/backoffice/user/userId`
- Method: GET
- Description: Retrieves a user by their ID.
- Parameters:
  - `id`: The ID of the user.
- Returns:
  - Success: Returns the user object.
  - Error: Returns an error message if the user doesn't exist.

## PATCH Endpoint

- Route: `/api/backoffice/user/userId`
- Method: PATCH
- Description: Updates a user by their ID.
- Parameters:
  - `id`: The ID of the user.
- Request Body:
  - `displayName`: The display name of the user.
  - `email`: The email address of the user.
  - `isAdmin`: Indicates whether the user is an admin.
- Returns:
  - Success: Returns the updated user object.
  - Error: Returns an error message if an error occurs during the update process.

## DELETE Endpoint

- Route: `/api/backoffice/user/userId`
- Method: DELETE
- Description: Deletes a user by their ID.
- Parameters:
  - `id`: The ID of the user.
- Returns:
  - Success: Returns the deleted user object.
  - Error: Returns an error message if an error occurs during the deletion process.

## index.js

**Description:**
The `index.js` file contains the implementation of the user API handler. This handler is responsible for handling API requests related to users. It provides endpoints for retrieving and creating users.

**Dependencies:**

- `hashPassword` function from the database module
- `UserModel` from the user database models
- `validate` middleware for request validation
- `mw` middleware for request handling
- `displayNameValidator`, `emailValidator`, and `passwordValidator` for validating the request body

**Usage:**
The `index` provides the following endpoints:

### GET Endpoint

- Route: `/api/backoffice/user`
- Method: GET
- Description: Retrieves all users.
- Returns:
  - Success: Returns an array of user objects.
  - Error: Returns an error message if there are no users.

### POST Endpoint

- Route: `/api/backoffice/user`
- Method: POST
- Description: Creates a new user.
- Request Body:
  - `displayName`: The display name of the user.
  - `email`: The email address of the user.
  - `password`: The password of the user.
- Returns:
  - Success: Returns `true` if the user is created successfully.
  - Error: Returns an error message if the user already exists or if there is an error during the creation process.

### Mail : forgot password

### index.js

## Description:

The `index.js` file contains the implementation of the user API handler for the forgot password functionality. This handler is responsible for handling API requests related to resetting user passwords. It provides an endpoint for sending a password reset email to a user.

## Dependencies:

- `config` from the API configuration file
- `UserModel` from the user database models
- `validate` middleware for request validation
- `mw` middleware for request handling
- `emailValidator` for validating the email field

## Usage:

The `handler` provides the following endpoint:

## POST Endpoint

- Route: `/forgot-password`
- Method: POST
- Description: Sends a password reset email to the user with the specified email address.
- Request Body:
  - `email`: The email address of the user.
- Returns:
  - Success: Returns `{ result: true }` if the email is sent successfully.
  - Error: Returns an error message if the user is not found or if there is an error during the email sending process.

### Reset password

### [id].js

## Description:

The `[id].js` file contains the implementation of the user API handler for updating user passwords. This handler is responsible for handling API requests related to updating the password of a user with a specific ID. It provides an endpoint for updating the user's password.

**Dependencies:**

- `hashPassword` from the password hashing utility
- `UserModel` from the user database models
- `validate` middleware for request validation
- `mw` middleware for request handling
- `idValidator` for validating the ID parameter
- `passwordValidator` for validating the password field

## Usage:

The `handler` provides the following endpoint:

### PATCH Endpoint

- Route: `reset-password/userMail`
- Method: PATCH
- Description: Updates the password of the user with the specified ID.
- Parameters:
  - `id`: The ID of the user.
- Request Body:
  - `password`: The new password for the user.
- Returns:
  - Success: Returns `{ result: true }` if the password is updated successfully.
  - Error: Returns an error message if the user is not found or if there is an error during the password update process.

### Sign-in

### sign-in.js

## Description:

The `sign-in.js` file contains the implementation of the user API handler. This handler is responsible for handling API requests related to users. It provides endpoints for retrieving a list of users and authenticating a user with email and password.

## Dependencies:

- `config` from the API configuration file
- `UserModel` from the user database models
- `slowDown` middleware for rate limiting requests
- `validate` middleware for request validation
- `mw` middleware for request handling
- `emailValidator`, `stringValidator`, `limitValidator`, `pageValidator` from the validators
- `jsonwebtoken` for generating JSON Web Tokens (JWT)

## Usage:

The `handler` provides the following endpoints:

## GET Endpoint

- Route: `/api/backoffice/user`
- Method: GET
- Description: Retrieves a paginated list of users.
- Query Parameters:
  - `page`: The page number of the results (optional, default: 1).
  - `limit`: The number of results per page (optional, default: 10).
- Returns:
  - Success: Returns the paginated list of users.
  - Error: Returns an error message if there is an error during the retrieval process.

## POST Endpoint

- Route: `/api/sign-in/sign-in`
- Method: POST
- Description: Authenticates a user with email and password and returns a JWT token.
- Request Body:
  - `email`: The user's email.
  - `password`: The user's password.
- Returns:
  - Success: Returns the JWT token for the authenticated user.
  - Error: Returns an error message if the credentials are invalid or if there is an error during the authentication process.

### sign-up.js

## Description:

The `sign-up.js` file contains the implementation of the sign-up API handler. This handler is responsible for handling API requests related to user sign-up. It provides an endpoint for creating a new user with a display name, email, and password.

## Dependencies:

- `hashPassword` from the user database module
- `UserModel` from the user database models
- `validate` middleware for request validation
- `mw` middleware for request handling
- `displayNameValidator`, `emailValidator`, `passwordValidator` from the validators

## Usage:

The `handler` provides the following endpoint:

## POST Endpoint

- Route: `/api/sign-up/sign-up`
- Method: POST
- Description: Creates a new user with a display name, email, and password.
- Request Body:
  - `displayName`: The display name of the user.
  - `email`: The email of the user.
  - `password`: The password of the user.
- Returns:
  - Success: Returns `true` if the user is successfully created.
  - Error: Returns an error message if the email is already taken or if there is an error during the user creation process.

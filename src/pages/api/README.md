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

- `GET /api/backoffice/order/orderId` - Retrieves a specific order by its ID.

Example:
GET /api/backoffice/order/1

- `PATCH /api/backoffice/order/orderId` - Updates an order with the specified ID.

Example:
PATCH /api/backoffice/order/1
Body: {
"userId": 2,
"status": "pending",
"date": "2023-06-30"
}

- `DELETE /api/backoffice/order/orderId` - Deletes an order with the specified ID.

Example:
DELETE /api/backoffice/order/1

- `POST /api/backoffice/order` - Creates a new order.

Example:
POST /api/backoffice/order
Body: {
"userId": 2,
"status": "pending",
"date": "2023-06-30"
}

- `GET /api/backoffice/order` - Retrieves all orders.

### order-products.js

## Usage

- `GET`: Retrieves the list of products associated with a specific order ID. It validates the order ID parameter and returns the list of order products if found.
- `POST`: Adds a new product to an order. It validates the order ID, product ID, quantity, and price parameters. If the order and product exist, a new record is inserted into the `OrdersProductsModel` table.
- `PATCH`: Updates an existing order product. It validates the order ID, product ID, quantity, and price parameters. If the order and product exist, the quantity of the order product is updated in the `OrdersProductsModel` table.
- `DELETE`: Removes a product from an order. It validates the order ID and product ID parameters. If the order product exists, it is deleted from the `OrdersProductsModel` table.

### User

##[id].js

## Usage:

- GET `/api/backoffice/user/userId` Retrieves a user by their ID.
-
- Returns:

  - Success: Returns the user object.
  - Error: Returns an error message if the user doesn't exist.

- PATCH `/api/backoffice/user/userId` Updates a user

{
"displayName": "Marie",
"email": "Marie@gmail.com",
"isAdmin": true
}

- Returns:

  - Success: Returns the updated user object.
  - Error: Returns an error message if an error occurs during the update process.

- DELETE `/api/backoffice/user/userId` Deletes a user by their ID.

- Returns:
  - Success: Returns the deleted user object.
  - Error: Returns an error message if an error occurs during the deletion process.

## index.js

- GET `/api/backoffice/user` Retrieves all users.

- Returns:

  - Success: Returns an array of user objects.
  - Error: Returns an error message if there are no users.

- POST `/api/backoffice/user` Creates a new user.

- Returns:

  - Success: Returns `true` if the user is created successfully.
  - Error: Returns an error message if the user already exists or if there is an error during the creation process.

  Exemple:
  {
  "displayName": "Marie",
  "email": "Marie@gmail.com",
  "password": "mariePassword",
  "isAdmin": true
  }

### Mail : forgot password

- POST `/forgot-password` Sends a password reset email to the user with the specified email address.
- Method: POST
- Description: Sends a password reset email to the user with the specified email address.
  .
- Returns:
  - Success: Returns `{ result: true }` if the email is sent successfully.
  - Error: Returns an error message if the user is not found or if there is an error during the email sending process.

### Reset password

- PATCH `reset-password/userMail`Updates the password of the user with the specified ID.
- Method: PATCH

- Returns:
  - Success: Returns `{ result: true }` if the password is updated successfully.
  - Error: Returns an error message if the user is not found or if there is an error during the password update process.

Exemple:
{
"email": "patrice@gmail.com"
}

### sign-in.js

- GET `/api/backoffice/user` Retrieves a paginated list of users.

- Returns:

  - Success: Returns the paginated list of users.
  - Error: Returns an error message if there is an error during the retrieval process.

- POST `/api/sign-in/sign-in` Authenticates a user with email and password and returns a JWT token.
- Method: POST

- Returns:
  - Success: Returns the JWT token for the authenticated user.
  - Error: Returns an error message if the credentials are invalid or if there is an error during the authentication process.

Exemple:
{
"email": "Justin@gmail.com",
"password": "Timber2345."
}

### sign-up.js

- POST `/api/sign-up/sign-up`Creates a new user with a display name, email, and password.
- Method: POST

- Returns:
  - Success: Returns `true` if the user is successfully created.
  - Error: Returns an error message if the email is already taken or if there is an error during the user creation process.

Exemple:
{
"displayName": "John Yhal",
"email": "johnyhal@gmail.com",
"password": "Allumez123456."
}

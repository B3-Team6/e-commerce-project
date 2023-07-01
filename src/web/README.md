## API DOCUMENTATION

## Orders

## addOrder.js

**Description:**
The `addOrder.js` file contains the implementation of the `addOrder` function. This function is responsible for adding a new order to the server. It receives the necessary parameters such as `userId`, `name`, `status`, and `date`. The function makes an API POST request using the provided parameters and returns the response data. If an error occurs during the request, it handles the error and returns an error message.

**Dependencies:**

- `api` object for making API requests
- `routes` object from "@/web/routes"

**Usage:**
The `addOrder` function is used to add a new order to the server. It takes the following parameters:

- `userId`: The ID of the user associated with the order.
- `name`: The name of the order.
- `status`: The status of the order.
- `date`: The date of the order.

The function makes a POST request to the order endpoint using the `api` object and the `routes.api.order.orders()` function to get the API endpoint URL. It sends the provided data in the request payload. If the request is successful, it returns the response data. If an error occurs during the request, it handles the error and returns an error message.

## deleteOrder.js

**Description:**
The `deleteOrder.js` file contains the implementation of the `deleteOrder` function. This function is responsible for deleting an order from the server. It receives the `id` of the order to be deleted. The function makes an API DELETE request using the provided `id` and returns the response data. If an error occurs during the request, it handles the error and returns an error message.

**Dependencies:**

- `api` object for making API requests
- `routes` object from "@/web/routes"

**Usage:**
The `deleteOrder` function is used to delete an order from the server. It takes the following parameter:

- `id`: The ID of the order to be deleted.

The function makes a DELETE request to the order endpoint using the `api` object and the `routes.api.order.orders(id)` function to get the API endpoint URL. If the request is successful, it returns the response data. If an error occurs during the request, it handles the error and returns an error message.

## updateOrder.js

**Description:**
The `updateOrder.js` file contains the implementation of the `updateOrder` function. This function is responsible for updating an existing order on the server. It receives the `editedId`, `editedUserId`, `editedStatus`, and `editedDate` parameters. The function makes an API PATCH request using the provided parameters and returns the response data. If an error occurs during the request, it handles the error and returns an error message.

**Dependencies:**

- `api` object for making API requests
- `routes` object from "@/web/routes"

**Usage:**
The `updateOrder` function is used to update an existing order on the server. It takes the following parameters:

- `editedId`: The ID of the order to be updated.
- `editedUserId`: The updated user ID for the order.
- `editedStatus`: The updated status for the order.
- `editedDate`: The updated date for the order.

The function makes a PATCH request to the order endpoint using the `api` object and the `routes.api.order.orders(editedId)` function to get the API endpoint URL. It sends the provided data in the request payload. If the request is successful, it returns the response data. If an error occurs during the request, it handles the error and returns an error message.

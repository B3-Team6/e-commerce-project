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

exports.seed = async function (knex) {
  await knex.raw("TRUNCATE TABLE products RESTART IDENTITY CASCADE")
  await knex("products").insert([
    {
      name: "Canapé",
      description:
        "Les canapés sont des sièges confortables pour les salons, disponibles dans différentes tailles et matériaux, souvent accompagnés de fauteuils assortis.",
      price: 20,
      quantity: 40,
      image: 1,
      material_id: 1,
      categories_id: 1,
      slug: "canape",
    },
    {
      name: "Test",
      description:
        "Les canapés sont des sièges confortables pour les salons, disponibles dans différentes tailles et matériaux, souvent accompagnés de fauteuils assortis.",
      price: 20,
      quantity: 40,
      image: 1,
      material_id: 1,
      categories_id: 1,
      slug: "canape",
    },
    {
      name: "Porte",
      description:
        "Les canapés sont des sièges confortables pour les salons, disponibles dans différentes tailles et matériaux, souvent accompagnés de fauteuils assortis.",
      price: 20,
      quantity: 40,
      image: 1,
      material_id: 2,
      categories_id: 2,
      slug: "canape",
    },
  ])
}
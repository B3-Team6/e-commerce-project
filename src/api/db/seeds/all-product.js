exports.seed = async function (knex) {
  await knex.raw("TRUNCATE TABLE products RESTART IDENTITY CASCADE")
  await knex("products").insert([
    {
      name: "Canapé",
      description:
        "Les canapés sont des sièges confortables pour les salons, disponibles dans différentes tailles et matériaux, souvent accompagnés de fauteuils assortis.",
      price: 20,
      quantity: 40,
      image: "https://bucketairneis.s3.eu-west-3.amazonaws.com/Airneis.png",
      material_id: 1,
      categories_id: 1,
      slug: "canape",
    },
    {
      name: "Test2",
      description: "Test2.",
      price: 10,
      quantity: 40,
      image: "https://bucketairneis.s3.eu-west-3.amazonaws.com/Airneis.png",
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
      image: "https://bucketairneis.s3.eu-west-3.amazonaws.com/Airneis.png",
      material_id: 2,
      categories_id: 2,
      slug: "canape",
    },
  ])
}

exports.seed = async function (knex) {
  await knex.raw("TRUNCATE TABLE categories RESTART IDENTITY CASCADE")
  await knex("categories").insert([
    {
      name: "Canapé",
      description:
        "Les canapés sont des sièges confortables pour les salons, disponibles dans différentes tailles et matériaux, souvent accompagnés de fauteuils assortis.",
      image: "https://bucketairneis.s3.eu-west-3.amazonaws.com/Airneis.png",
      slug: "canape",
    },
    {
      name: "Lit",
      description:
        "Les canapés sont des sièges confortables pour les salons, disponibles dans différentes tailles et matériaux, souvent accompagnés de fauteuils assortis.",
      image: "https://bucketairneis.s3.eu-west-3.amazonaws.com/Airneis.png",
      slug: "lit",
    },
  ])
}

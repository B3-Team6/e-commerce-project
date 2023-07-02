exports.seed = async function (knex) {
  await knex.raw("TRUNCATE TABLE categories RESTART IDENTITY CASCADE")
  await knex("categories").insert([
    {
      name: "Canapé",
      description:
        "Les canapés sont des sièges confortables pour les salons, disponibles dans différentes tailles et matériaux, souvent accompagnés de fauteuils assortis.",
      image: "https://bucketairneis.s3.eu-west-3.amazonaws.com/canape.jpg",
      slug: "canape",
    },
    {
      name: "Lit",
      description:
        "Les lits sont des meubles conçus pour offrir un endroit confortable pour dormir, disponibles dans différentes tailles et matériaux, souvent accompagnés de matelas et de literie.",
      image: "https://bucketairneis.s3.eu-west-3.amazonaws.com/lit.jpg",
      slug: "lit",
    },
    {
      name: "Table",
      description:
        "Les tables sont des surfaces planes pour placer des objets, disponibles dans différentes tailles, matériaux et formes, souvent accompagnées de sièges.",
      image: "https://bucketairneis.s3.eu-west-3.amazonaws.com/table.jpg",
      slug: "table",
    },
    {
      name: "Bureau",
      description:
        "Les bureaux sont des meubles de travail avec des fonctionnalités de rangement, disponibles dans différentes tailles et matériaux, souvent avec une chaise assortie.",
      image: "https://bucketairneis.s3.eu-west-3.amazonaws.com/bureau.jpg",
      slug: "bureau",
    },
    {
      name: "Chaise",
      description:
        "Les chaises sont des sièges individuels avec des fonctionnalités supplémentaires, disponibles dans différents matériaux et tailles. Elles sont souvent utilisées pour fournir des sièges supplémentaires ou compléter un ensemble.",
      image: "https://bucketairneis.s3.eu-west-3.amazonaws.com/chaise.jpg",
      slug: "chaise",
    },
    {
      name: "Armoire",
      description:
        "Les armoires sont des meubles de rangement verticaux pour les vêtements ou les articles ménagers, avec des étagères, des tiroirs et des portes, disponibles dans différents matériaux.",
      image: "https://bucketairneis.s3.eu-west-3.amazonaws.com/armoire.jpg",
      slug: "armoire",
    },
  ])
}

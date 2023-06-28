exports.seed = async function (knex) {
  await knex.raw("TRUNCATE TABLE materials RESTART IDENTITY CASCADE")
  await knex("materials").insert([
    {
      name: "Bois",
      slug: "bois",
    },
    {
      name: "Métal",
      slug: "metal",
    },
    {
      name: "Cuir",
      slug: "cuir",
    },
    {
      name: "Verre",
      slug: "verre",
    },
    {
      name: "Plastique",
      slug: "plastique",
    },
    {
      name: "Acier",
      slug: "acier",
    },
    {
      name: "Tissue",
      slug: "tissue",
    },
  ])
}

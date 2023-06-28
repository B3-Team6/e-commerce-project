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
      material_id: 7,
      categories_id: 1,
      slug: "canape",
    },
    {
      name: "Table à manger",
      description:
        "Les tables à manger sont des meubles essentiels pour les repas en famille ou entre amis. Elles sont disponibles dans une variété de styles et de tailles pour s'adapter à votre espace.",
      price: 150,
      quantity: 20,
      image: 2,
      material_id: 1,
      categories_id: 3,
      slug: "table-a-manger",
    },
    {
      name: "Lit double",
      description:
        "Les lits doubles offrent un espace de sommeil spacieux pour deux personnes. Ils sont disponibles dans différents designs, du traditionnel au moderne, pour répondre à vos préférences.",
      price: 300,
      quantity: 10,
      image: 3,
      material_id: 7,
      categories_id: 2,
      slug: "lit-double",
    },
    {
      name: "Bureau d'ordinateur",
      description:
        "Les bureaux d'ordinateur sont des espaces de travail pratiques pour les tâches informatiques. Ils offrent suffisamment d'espace pour votre ordinateur, vos accessoires et vos documents.",
      price: 100,
      quantity: 15,
      image: 4,
      material_id: 1,
      categories_id: 4,
      slug: "bureau-ordinateur",
    },
    {
      name: "Étagère murale",
      description:
        "Les étagères murales sont idéales pour afficher vos livres, vos objets de décoration ou vos plantes. Elles ajoutent une touche de style et optimisent l'utilisation de l'espace vertical.",
      price: 50,
      quantity: 30,
      image: 5,
      material_id: 1,
      categories_id: 6,
      slug: "etagere-murale",
    },
    {
      name: "Fauteuil",
      description:
        "Les fauteuils sont des sièges confortables pour se détendre et lire un livre. Ils sont disponibles dans différents styles et tissus pour s'adapter à votre style et à votre confort.",
      price: 80,
      quantity: 25,
      image: 6,
      material_id: 3,
      categories_id: 5,
      slug: "fauteuil",
    },
    {
      name: "Meuble TV",
      description:
        "Les meubles TV sont conçus pour supporter et organiser vos appareils électroniques et vos médias. Ils sont dotés de compartiments de rangement pratiques pour vos équipements.",
      price: 120,
      quantity: 12,
      image: 7,
      material_id: 1,
      categories_id: 3,
      slug: "meuble-tv",
    },
    {
      name: "Commodes",
      description:
        "Les commodes offrent un espace de rangement supplémentaire pour vos vêtements et vos accessoires. Elles sont disponibles dans différents modèles avec des tiroirs spacieux.",
      price: 90,
      quantity: 18,
      image: 8,
      material_id: 4,
      categories_id: 3,
      slug: "commodes",
    },
    {
      name: "Bibliothèque",
      description:
        "Les bibliothèques sont idéales pour organiser vos livres, vos magazines et vos collections. Elles sont disponibles dans différentes tailles et configurations pour s'adapter à votre espace.",
      price: 160,
      quantity: 8,
      image: 9,
      material_id: 2,
      categories_id: 6,
      slug: "bibliotheque",
    },
    {
      name: "Chaise de bureau",
      description:
        "Les chaises de bureau offrent un soutien ergonomique pour vos longues heures de travail. Elles sont réglables en hauteur et disposent de dossiers rembourrés pour un confort optimal.",
      price: 70,
      quantity: 20,
      image: 10,
      material_id: 3,
      categories_id: 5,
      slug: "chaise-bureau",
    },
  ])
}

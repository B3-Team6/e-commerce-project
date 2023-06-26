exports.seed = async function (knex) {
  await knex.raw("TRUNCATE TABLE contact RESTART IDENTITY CASCADE")
  await knex("contact").insert([
    {
      email: "marie@example.com",
      message:
        "Bonjour, j'ai récemment visité votre site de vente de meubles et j'ai quelques questions sur vos canapés. Pouvez-vous me donner plus de détails sur les options de personnalisation et les délais de livraison ? Merci !",
    },
    {
      email: "alexandre@example.com",
      message:
        "Salut, je suis intéressé par votre collection de tables basses en bois massif. Pourriez-vous me dire si elles sont fabriquées à partir de bois durable et quelles sont les dimensions disponibles ? Je cherche quelque chose qui s'accorde bien avec mon salon. Merci d'avance !",
    },
    {
      email: "laurence@example.com",
      message:
        "Bonjour, je suis en train de me meubler et je recherche une armoire spacieuse avec des étagères réglables. Est-ce que vous avez des modèles disponibles dans des finitions en chêne ou en noyer ? Je voudrais également savoir si vous proposez un service d'assemblage. Merci beaucoup !",
    },
    {
      email: "vincent@example.com",
      message:
        "Salut, j'aimerais acheter une nouvelle table à manger pour ma cuisine. Est-ce que vous avez des tables extensibles qui peuvent accueillir jusqu'à 8 personnes ? Je suis également curieux de connaître les matériaux utilisés pour les plateaux de table et les options de couleur disponibles. Merci et bonne journée !",
    },
    {
      email: "sophie@example.com",
      message:
        "Bonjour, je suis à la recherche d'un canapé d'angle confortable pour mon salon. Pouvez-vous me recommander des modèles qui offrent un bon soutien lombaire et qui sont disponibles dans des tissus résistants aux taches ? J'apprécierais également des informations sur les garanties et les politiques de retour. Merci beaucoup !",
    },
    {
      email: "thomas@example.com",
      message:
        "Salut, je suis en train de rénover ma chambre à coucher et je suis à la recherche d'une commode avec beaucoup d'espace de rangement. Pouvez-vous me donner des détails sur les dimensions, les options de couleur et les matériaux utilisés pour vos commodes ? J'apprécierais également des conseils sur l'entretien. Merci d'avance !",
    },
    {
      email: "céline@example.com",
      message:
        "Bonjour, je suis intéressée par votre collection de chaises de salle à manger. Pouvez-vous me dire si elles sont vendues par lot et si vous proposez des options de rembourrage personnalisé ? Je cherche des chaises qui offrent un bon soutien du dos et qui sont faciles à nettoyer. Merci et bonne journée !",
    },
    {
      email: "nicolas@example.com",
      message:
        "Salut, je suis à la recherche d'un bureau fonctionnel pour mon espace de travail à domicile. Est-ce que vous avez des bureaux avec des tiroirs de rangement et des passe-câbles intégr",
    },
  ])
}

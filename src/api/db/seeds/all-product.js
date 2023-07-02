exports.seed = async function (knex) {
  await knex.raw("TRUNCATE TABLE products RESTART IDENTITY CASCADE")
  await knex("products").insert([
    // CANAPES
    {
      name: "Canapé Velvet",
      description:
        "Le canapé Velvet est un choix luxueux pour votre salon. Son revêtement en velours doux offre une expérience de détente ultime. Avec son design moderne et ses lignes épurées, il ajoutera une touche d'élégance à votre espace de vie.",
      price: 599,
      quantity: 10,
      image:
        "https://bucketairneis.s3.eu-west-3.amazonaws.com/canape-velvet.jpg",
      material_id: 1,
      categories_id: 1,
      slug: "canape-velvet",
    },

    {
      name: "Canapé Relax",
      description:
        "Le canapé Relax est conçu pour vous offrir un confort supérieur. Avec ses sièges inclinables et son appui-tête réglable, vous pouvez trouver la position parfaite pour vous détendre après une longue journée. Son revêtement en cuir de haute qualité ajoute une touche de sophistication à votre intérieur.",
      price: 799,
      quantity: 5,
      image:
        "https://bucketairneis.s3.eu-west-3.amazonaws.com/canape-relax.jpg",
      material_id: 1,
      categories_id: 1,
      slug: "canape-relax",
    },
    {
      name: "Canapé Scandinave",
      description:
        "Le canapé Scandinave est inspiré du design nordique. Ses lignes épurées, son revêtement en tissu et ses pieds en bois naturel en font un choix élégant pour tout salon moderne. Il offre un confort optimal avec ses coussins moelleux et son assise spacieuse.",
      price: 499,
      quantity: 15,
      image:
        "	https://bucketairneis.s3.eu-west-3.amazonaws.com/canape-scandinave.jpg",
      material_id: 1,
      categories_id: 1,
      slug: "canape-scandinave",
    },
    {
      name: "Canapé Convertible",
      description:
        "Le canapé Convertible est un choix pratique et polyvalent pour les petits espaces. Il se transforme facilement en un confortable lit pour accueillir les invités. Son revêtement en tissu résistant et ses accoudoirs rembourrés offrent un confort optimal, que ce soit en mode canapé ou en mode lit.",
      price: 699,
      quantity: 8,
      image:
        "	https://bucketairneis.s3.eu-west-3.amazonaws.com/canape-convertible.jpg",
      material_id: 1,
      categories_id: 1,
      slug: "canape-convertible",
    },
    {
      name: "Canapé Chesterfield",
      description:
        "Le canapé Chesterfield est synonyme de style classique et de sophistication. Son design iconique avec des capitons et son revêtement en cuir de haute qualité en font un choix intemporel pour tout intérieur élégant. Les accoudoirs et le dossier hauts offrent un excellent soutien et une assise confortable.",
      price: 899,
      quantity: 3,
      image:
        "	https://bucketairneis.s3.eu-west-3.amazonaws.com/canape-chesterfield.jpg",
      material_id: 1,
      categories_id: 1,
      slug: "canape-chesterfield",
    },
    {
      name: "Canapé Modulaire",
      description:
        "Le canapé Modulaire est conçu pour s'adapter à vos besoins et à votre espace. Vous pouvez le configurer de différentes manières en ajoutant, en enlevant ou en déplaçant les modules. Son revêtement en tissu résistant aux taches et ses coussins moelleux offrent un confort supérieur. Laissez libre cours à votre créativité avec ce canapé personnalisable.",
      price: 1199,
      quantity: 6,
      image:
        "	https://bucketairneis.s3.eu-west-3.amazonaws.com/canape-modulaire.jpg",
      material_id: 1,
      categories_id: 1,
      slug: "canape-modulaire",
    },
    {
      name: "Canapé Vintage",
      description:
        "Le canapé Vintage est un choix rétro pour les amateurs de style nostalgique. Son design inspiré des années 60-70 avec des lignes courbes et des pieds en bois donne une touche de charme vintage à votre salon. Son revêtement en tissu texturé et ses coussins rembourrés offrent un confort confortable et élégant.",
      price: 599,
      quantity: 7,
      image:
        "	https://bucketairneis.s3.eu-west-3.amazonaws.com/canape-vintage.jpg",
      material_id: 1,
      categories_id: 1,
      slug: "canape-vintage",
    },
    {
      name: "Canapé Cuir Reclinable",
      description:
        "Le canapé Cuir Reclinable est conçu pour une expérience de détente maximale. Son revêtement en cuir de haute qualité ajoute une touche de luxe à votre espace de vie. Vous pouvez incliner les sièges individuellement pour trouver la position de confort idéale. Les accoudoirs rembourrés et les repose-pieds rétractables offrent un soutien supplémentaire.",
      price: 999,
      quantity: 4,
      image: "	https://bucketairneis.s3.eu-west-3.amazonaws.com/canape-cuir.jpg",
      material_id: 1,
      categories_id: 1,
      slug: "canape-cuir-reclinable",
    },

    // LITS
    {
      name: "Lit Contemporain",
      description:
        "Le lit contemporain est un choix élégant pour votre chambre à coucher. Avec son design épuré et minimaliste, il apporte une touche moderne à votre espace de repos. Fabriqué avec des matériaux de haute qualité, ce lit offre un confort optimal pour des nuits de sommeil paisibles.",
      price: 699,
      quantity: 10,
      image:
        "	https://bucketairneis.s3.eu-west-3.amazonaws.com/lit-contemporain.jpg",
      material_id: 1,
      categories_id: 2,
      slug: "lit-contemporain",
    },
    {
      name: "Lit Capitonné",
      description:
        "Le lit capitonné est un choix luxueux pour créer une ambiance élégante dans votre chambre à coucher. Son revêtement en tissu capitonné ajoute une touche de sophistication et de confort. Avec sa tête de lit rembourrée et son cadre solide, ce lit vous invite à vous détendre et à vous reposer.",
      price: 899,
      quantity: 5,
      image:
        "	https://bucketairneis.s3.eu-west-3.amazonaws.com/lit-capitonne.jpeg",
      material_id: 1,
      categories_id: 2,
      slug: "lit-capitonne",
    },
    {
      name: "Lit Superposé",
      description:
        "Le lit superposé est une solution pratique pour les chambres d'enfants ou les espaces restreints. Il offre un espace de couchage supplémentaire tout en optimisant l'utilisation de l'espace au sol. Fabriqué avec des matériaux solides et durables, ce lit garantit la sécurité et le confort de vos enfants.",
      price: 499,
      quantity: 8,
      image:
        "https://bucketairneis.s3.eu-west-3.amazonaws.com/lit-superposé.jpg",
      material_id: 1,
      categories_id: 2,
      slug: "lit-superpose",
    },
    {
      name: "Lit en Bois Massif",
      description:
        "Le lit en bois massif est un choix intemporel pour une ambiance chaleureuse et naturelle dans votre chambre. Fabriqué à partir de bois de qualité, ce lit offre durabilité et robustesse. Son design classique et sa finition naturelle mettent en valeur la beauté naturelle du bois, ajoutant une touche rustique à votre espace de repos.",
      price: 799,
      quantity: 7,
      image: "	https://bucketairneis.s3.eu-west-3.amazonaws.com/lit-bois.jpg",
      material_id: 1,
      categories_id: 2,
      slug: "lit-bois-massif",
    },
    {
      name: "Lit Rembourré Moderne",
      description:
        "Le lit rembourré moderne est un choix contemporain pour une chambre à coucher élégante et confortable. Son revêtement en tissu doux et rembourré crée une ambiance accueillante. Avec sa tête de lit légèrement inclinée et ses lignes épurées, ce lit offre un confort exceptionnel et une esthétique moderne.",
      price: 899,
      quantity: 4,
      image: "	https://bucketairneis.s3.eu-west-3.amazonaws.com/lit-moderne.jpg",
      material_id: 1,
      categories_id: 2,
      slug: "lit-rembourre-moderne",
    },
    {
      name: "Lit à Baldaquin",
      description:
        "Le lit à baldaquin est synonyme de luxe et d'élégance. Avec ses poteaux en bois ou en métal et son voilage délicat, ce lit crée une atmosphère romantique dans votre chambre. Profitez d'un sommeil paisible et confortable sous le doux baldaquin et ajoutez une touche de glamour à votre espace de repos.",
      price: 1299,
      quantity: 2,
      image:
        "https://bucketairneis.s3.eu-west-3.amazonaws.com/lit-baldaquin.png",
      material_id: 1,
      categories_id: 2,
      slug: "lit-baldaquin",
    },
    {
      name: "Lit Plateforme Moderne",
      description:
        "Le lit plateforme moderne est un choix pratique et élégant pour les chambres contemporaines. Son design bas et épuré crée une impression de légèreté et d'espace. Avec sa base solide et son revêtement en cuir synthétique facile à entretenir, ce lit offre un confort minimaliste et un style moderne.",
      price: 599,
      quantity: 9,
      image:
        "	https://bucketairneis.s3.eu-west-3.amazonaws.com/lit-plateforme.jpg",
      material_id: 1,
      categories_id: 2,
      slug: "lit-plateforme-moderne",
    },
    {
      name: "Lit Royal",
      description:
        "Le lit royal à baldaquin est l'épitomé du luxe et de la grandeur. Avec son design majestueux et imposant, ce lit crée une ambiance palatiale dans votre chambre à coucher. Les poteaux sculptés, les détails dorés et le voilage somptueux ajoutent une touche de sophistication royale. Offrez-vous un sommeil digne de la royauté avec ce lit exceptionnel.",
      price: 899,
      quantity: 3,
      image: "https://bucketairneis.s3.eu-west-3.amazonaws.com/lit royal.jpg",
      material_id: 1,
      categories_id: 2,
      slug: "lit-royal",
    },
  ])
}

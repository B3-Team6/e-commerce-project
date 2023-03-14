import Carousel from "@/components/Carousel";
import Head from "next/head";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Canape",
    img: (
      <Image
        alt="canape"
        width={400}
        height={400}
        src="/images/canape.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 2,
    name: "Lit",
    img: (
      <Image
        alt="lit"
        width={400}
        height={400}
        src="/images/lit.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 3,
    name: "Table",
    img: (
      <Image
        alt="table"
        width={400}
        height={400}
        src="/images/table.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 4,
    name: "Bureau",
    img: (
      <Image
        alt="bureau"
        width={400}
        height={400}
        src="/images/bureau.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 5,
    name: "Chaise",
    img: (
      <Image
        alt="chaise"
        width={400}
        height={400}
        src="/images/chaise.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 6,
    name: "Armoire",
    img: (
      <Image
        alt="armoire"
        width={400}
        height={400}
        src="/images/armoire.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
];

const products = [
  {
    id: 1,
    name: "Canape",
    img: (
      <Image
        alt="canape"
        width={300}
        height={300}
        src="/images/canape.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 2,
    name: "Lit",
    img: (
      <Image
        alt="lit"
        width={300}
        height={300}
        src="/images/lit.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 3,
    name: "Table",
    img: (
      <Image
        alt="table"
        width={300}
        height={300}
        src="/images/table.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 4,
    name: "Bureau",
    img: (
      <Image
        alt="bureau"
        width={300}
        height={300}
        src="/images/bureau.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 5,
    name: "Chaise",
    img: (
      <Image
        alt="chaise"
        width={300}
        height={300}
        src="/images/chaise.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 6,
    name: "Armoire",
    img: (
        <Image
        alt="armoire"
        width={300}
        height={300}
        src="/images/armoire.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 1,
    name: "Canape",
    img: (
      <Image
        alt="canape"
        width={300}
        height={300}
        src="/images/canape.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 2,
    name: "Lit",
    img: (
      <Image
        alt="lit"
        width={300}
        height={300}
        src="/images/lit.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 3,
    name: "Table",
    img: (
      <Image
        alt="table"
        width={300}
        height={300}
        src="/images/table.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 4,
    name: "Bureau",
    img: (
      <Image
        alt="bureau"
        width={300}
        height={300}
        src="/images/bureau.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 5,
    name: "Chaise",
    img: (
      <Image
        alt="chaise"
        width={300}
        height={300}
        src="/images/chaise.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
  {
    id: 6,
    name: "Armoire",
    img: (
        <Image
        alt="armoire"
        width={300}
        height={300}
        src="/images/armoire.jpg"
        className="rounded-lg hover:opacity-50"
      />
    ),
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>AIRNEIS - Accueil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel />
      <div className="p-2 text-sm text-center  font-bold md:text-lg lg:text-2xl font-serif bg-slate-200">
        <p>Découvrez nos catégories de meubles ainsi que nos meilleures ventes</p>
      </div>

      <div className="grid  items-center  flex-col md:grid-cols-2 md:gris-rows-3 lg:grid-cols-3 lg:gris-rows-2 gap-3 p-2 ">
        {categories.map((categorie) => (
          <>
            <div className="flex justify-center">
              <div className="flex group items-center justify-center  w-5/6 ">
                <div className=" hidden group-hover:flex text-2xl font-black text-black absolute z-10">
                  {categorie.name}
                </div>
                {categorie.img}
              </div>
            </div>
          </>
        ))}
      </div>

          <div className="flex justify-center p-2 font-black text-2xl bg-slate-200 font-serif">
          <p>Les Highlanders du moment</p>
          </div>

      <div className="grid grid-cols-4 gris-rows-3 gap-3 p-2 items-center ">
        {products.map((product) => (
          <>
            <div className="flex justify-center">
              <div className="flex group items-center justify-center  w-3/5 ">
                <div className=" hidden group-hover:flex text-xl font-black text-black absolute z-10">
                  {product.name}
                </div>
                {product.img}
              </div>
            </div>
          </>
        ))}
      </div>
 
    </>
  );
};
export default Home;

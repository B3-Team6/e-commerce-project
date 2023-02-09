import Head from "next/head";
import Image from "next/image";

const descriptions = [
  {
    id: 1,
    name: "Canape 1",
    price: "XXX €",
    statut: "EN STOCK",
    description:
      "cbyazyacubacabcuabcuabcuabcaucbucbaucbaucbaucbucaczcjziacjzaicjzai",
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
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-end p-4">
        {descriptions.map((description) => (
          <>
            <div className="flex flex-col">
              <div className="flex justify-between ">
                <div className=" flex  flex-col ">{description.price}</div>
                <div className="">
                  {description.name}
                  <div className="text-lime-400 pb-2">{description.statut}</div>
                </div>
              </div>

              {description.description}
              <div className="flex justify-center ">
                <button className="bg-orange-100 px-2 w-fit border-2 border-black rounded-lg font-bold m-8 ">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Home;

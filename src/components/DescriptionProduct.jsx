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
  
  const DescriptionProduct = () => {
    return (
      <>
      
  
        <div className="flex justify-end p-4 ">
          {descriptions.map((description) => (
            <>
              <div className="flex flex-col ">
                <div className="flex justify-between ">
                  <div className=" flex  flex-col ">{description.price}</div>
                  <div className="">
                    {description.name}
                    <div className="text-lime-400 pb-2">{description.statut}</div>
                  </div>
                </div>
  <div className=" pb-80">
                {description.description}
                </div>
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
  export default DescriptionProduct;
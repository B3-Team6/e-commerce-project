import Image from "next/image"
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
]

const DescriptionProduct = () => {
  return (
    <>
      <div className="flex p-4 ">
        {descriptions.map((description) => (
          <>
            <div className="flex font-sans">
              <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-semibold text-slate-900">
                    {description.name}
                  </h1>
                  <div className="text-lg font-semibold text-slate-500">
                    {description.price}
                  </div>
                  <div className="mt-2 w-full flex-none text-sm font-medium text-slate-700">
                    In stock
                  </div>
                </div>

                <div className="mb-6 mt-4 flex items-baseline border-b border-slate-200 pb-6"></div>
                <p className="flex text-sm text-slate-700">
                  {description.description}
                </p>

                <div className="mb-6 flex space-x-4 text-sm font-medium">
                  <div className="flex flex-auto justify-end space-x-4">
                    <button className="h-10 rounded-md border border-slate-200 bg-orange-100 px-6 font-semibold text-slate-900">
                      Add to cart
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
export default DescriptionProduct

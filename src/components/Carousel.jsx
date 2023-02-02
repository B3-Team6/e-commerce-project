import Image from "next/image"




const Carousel = () => {
  return (
    <>
      <div className="flex  justify-center p-8">
             <Image alt="canape"  width={400}
          height={400} src="/images/canape.jpg"/>
        
             <Image alt="canape"  width={400}
          height={400} src="/images/lit.jpg"/>
 
             <Image alt="canape"  width={400}
          height={400} src="/images/table.jpg"/>
      </div>
    </>
  )

}
export default Carousel
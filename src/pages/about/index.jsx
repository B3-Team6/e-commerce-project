import Head from "next/head"

const About = () => {
  return (
    <>
      <Head>
        <title>About Airneis</title>
        <meta name="description" content="Legal notice page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen items-center justify-center">
        <div className="max-w-2xl p-6">
          <h3 className="mb-6 text-4xl font-bold">
            Welcome to the Airneis website!
          </h3>
          <p className="text-lg">
            At Airneis, we are passionate about furniture and committed to
            providing our customers with an exceptional experience in the world
            of furnishings. Our goal is to help you create a space that reflects
            your personal style and meets all your furniture needs.
          </p>
          <p className="mt-4 text-lg">
            We offer a wide range of furniture in various categories, catering
            to all types of styles and materials. Whether you're looking for
            furniture for your living room, bedroom, kitchen, office, or any
            other space, we have you covered.
          </p>
          <p className="mt-4 text-lg">
            Quality is paramount at Airneis. We carefully select our suppliers
            and ensure that all our furniture is crafted with durable and
            high-quality materials. Our team keeps up with the latest trends and
            innovations in the furniture industry to offer you products that are
            both stylish and functional.
          </p>
          <p className="mt-4 text-lg">
            We understand that every customer is unique, which is why we also
            offer customization options for certain furniture pieces to meet
            your specific requirements in terms of size, color, or finishes.
          </p>
          <p className="mt-4 text-lg">
            Customer satisfaction is our top priority. We strive to provide
            excellent customer service from the moment you place your order
            until the delivery, ensuring a smooth and pleasant shopping
            experience.
          </p>
          <p className="mt-4 text-lg">
            Explore our website and discover our extensive collection of
            furniture. Whether you're aiming to create an elegant, comfortable,
            or functional space, we are here to assist you in your interior
            design project. Thank you for choosing Airneis for all your
            furniture needs.
          </p>
        </div>
      </div>
    </>
  )
}

About.isPublicPage = true
export default About

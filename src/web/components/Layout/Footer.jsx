import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import routes from "@/web/routes.js"
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="hidden lg:relative lg:bottom-0 lg:flex lg:h-20 lg:w-full lg:items-center lg:justify-between lg:border-t-4 lg:border-gray-400 lg:p-6 lg:font-bold">
      <div className="flex flex-row gap-6">
<<<<<<< HEAD:src/components/Layout/Footer.jsx
        <Link href="tos" className="hover:underline">
          Terms of Use
        </Link>
        <Link href="legalNotice" className="hover:underline">
=======
        <Link href={routes.tos()} className="hover:underline">
          Terms of Use
        </Link>
        <Link href={routes.legalNotice()} className="hover:underline">
>>>>>>> Category:src/web/components/Layout/Footer.jsx
          Legal Notice
        </Link>
        <Link href={routes.contact()} className="hover:underline">
          Contact
        </Link>
        <Link href="backoffice" className="hover:underline">
          Back Office
        </Link>
      </div>
      <div className="flex flex-row-reverse gap-6">
        <Link href="https://www.facebook.com/" className="hover:text-gray-500">
          <FontAwesomeIcon icon={faFacebookSquare} className="h-8 w-8" />
        </Link>
        <Link href="https://www.instagram.com/" className="hover:text-gray-500">
          <FontAwesomeIcon icon={faInstagramSquare} className="h-8 w-8" />
        </Link>
        <Link href="https://www.linkedin.com/" className="hover:text-gray-500">
          <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer

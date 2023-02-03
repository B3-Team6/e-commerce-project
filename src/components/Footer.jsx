import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="hidden lg:h-20 lg:absolute lg:bottom-0 lg:w-full lg:border-t-4 lg:border-gray-400 lg:flex lg:p-6 lg:justify-between lg:items-center lg:font-bold">
      <div className="flex flex-row gap-6">
        <Link
          href="https://en.wikipedia.org/wiki/Terms_of_service"
          className="hover:underline"
        >
          Terms of Use
        </Link>
        <Link
          href="https://en.wikipedia.org/wiki/Notice"
          className="hover:underline"
        >
          Legal Notice
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
      <div className="flex flex-row-reverse gap-6">
        <Link href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebookSquare} className="w-8 h-8" />
        </Link>
        <Link href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagramSquare} className="w-8 h-8" />
        </Link>
        <Link href="https://www.linkedin.com/">
          <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer

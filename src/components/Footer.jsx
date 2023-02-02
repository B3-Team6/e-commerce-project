import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="hidden lg:h-20 lg:relative lg:bottom-0 lg:w-full lg:border-t-4 lg:border-dark-gray lg:flex lg:p-6 lg:justify-between lg:items-center lg:font-bold">
      <div className="flex flex-row gap-6">
        <a href="#" className="hover:underline">
          Terms of Use
        </a>
        <a href="#" className="hover:underline">
          Legal Mentions
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </div>
      <div className="flex flex-row-reverse gap-6">
        <a href="#">
          <FontAwesomeIcon icon={faFacebookSquare} className="w-8 h-8" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagramSquare} className="w-8 h-8" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
        </a>
      </div>
    </footer>
  )
}

export default Footer

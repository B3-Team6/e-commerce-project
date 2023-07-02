import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import routes from "@/web/routes.js"
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="hidden lg:relative lg:bottom-0 lg:flex lg:h-20 lg:w-full lg:items-center lg:justify-between lg:border-t-4 lg:border-gray-400 lg:p-6 lg:font-bold">
      <div className="flex flex-row gap-6">
        <Link href={routes.tos()} className="hover:underline">
          {t("termsOfUse")}
        </Link>
        <Link href={routes.legalNotice()} className="hover:underline">
          {t("legalNotice")}
        </Link>
        <Link href={routes.contact()} className="hover:underline">
          {t("contactUs")}
        </Link>
      </div>
      <div className="flex flex-row-reverse gap-6">
        <Link href="https://www.facebook.com/" className="hover:text-gray-500">
          <FontAwesomeIcon icon={faFacebookSquare} className="h-8 w-8" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link href="https://www.instagram.com/" className="hover:text-gray-500">
          <FontAwesomeIcon icon={faInstagramSquare} className="h-8 w-8" />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link href="https://www.linkedin.com/" className="hover:text-gray-500">
          <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </div>
    </footer>
  )
}

export default Footer

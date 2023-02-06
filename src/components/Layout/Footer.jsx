import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="border-t-2 border-t-black p-2 flex justify-between">
        <div className="flex gap-1">
          <a className=" hover:text-orange-100 hover:underline " href="#">
            CGU
          </a>
          <p>·</p>
          <a className=" hover:text-orange-100 hover:underline" href="#">
            Mentions légales
          </a>
          <p>·</p> 
          <a className=" hover:text-orange-100 hover:underline" href="#">
            Contact
          </a>
        </div>
        <div className="flex gap-4">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-8 h-8 hover:text-orange-100"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="w-8 h-8 hover:text-orange-100"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="w-8 h-8 hover:text-orange-100"
          />
        </div>
      </div>
    </>
  );
};
export default Footer;
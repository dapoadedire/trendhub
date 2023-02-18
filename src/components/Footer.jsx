/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-8 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div
            className="mb-8 w-full lg:mb-0 lg:w-1/3
                    pr-8
                    "
          >
            <h2 className="mb-4 text-xl font-bold">About Us</h2>
            <p className="leading-loose text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
          <div className="mb-8 w-full lg:mb-0 lg:w-1/3">
            <h2 className="mb-4 text-xl font-bold">Contact Us</h2>
            <ul className="list-none">
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                123 Main St, Anytown USA
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                (123) 456-7890
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                info@website.com
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3">
            <h2 className="mb-4 text-xl font-bold">Connect With Us</h2>
            <div className="flex">
              <a href="#" className="mr-4 text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="mr-4 text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="mr-4 text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

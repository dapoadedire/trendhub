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
      <div className="container mx-auto
      
      ">
        <div className="
        grid grid-cols-1 gap-8
        sm:grid-cols-2
        md:grid-cols-3

        ">
          <div
            className="
                    "
          >
            <h2 className="mb-4 text-xl font-bold">About Us</h2>
            <p className="
            w-10/12
            leading-relaxed
            text-gray-400
            ">
              Shop the Latest Electronics, Jewelry, and Clothing Trends.
              From the latest smartphones and home electronics to stylish men&apos;s and women&apos;s clothing, and stunning jewelry pieces, we&apos;ve got everything you need to stay on-trend and make a statement, all in one convenient online destination.
            </p>
          </div>
          <div className="">
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
          <div className="">
            <h2 className="mb-4 text-xl font-bold">Connect With Us</h2>
            <div className="flex">
              <a href="#" className="mr-4 text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} 
                className="h-6 w-6
                hover:text-blue-500
                "
                />
              </a>
              <a href="#" className="mr-4 text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faTwitter} 
                  className="h-6 w-6
                  hover:text-blue-400
                  "
                />
              </a>
              <a href="#" className="mr-4 text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram}
                  className="h-6 w-6
                  hover:text-pink-500
                  "
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faYoutube} 
                  className="h-6 w-6
                  hover:text-red-500
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700">
        <div className="container mx-auto py-4">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} - All Rights Reserved by Dapo Adedire &#128526;
          </p>
        </div>
      </div>


    </footer>
  );
};

export default Footer;

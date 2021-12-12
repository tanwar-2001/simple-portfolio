import React from "react";
import { FaGithub,FaInstagram,FaTwitter,FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <a
          href="https://github.com/tanwar-2001"
          className="m-1 p-1 sm:p-2 sm:m-2 text-xl text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
        >
          <FaGithub />
          <span className="sr-only">Github</span>
        </a>
        <a
          href="https://www.instagram.com/imtanwar01/"
          className="m-1 p-1 sm:p-2 sm:m-2 text-xl text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
        >
          <FaInstagram />
          <span className="sr-only">Instagram</span>
        </a>
        <a
          href="https://twitter.com/MayankT11783295"
          className="m-1 p-1 sm:p-2 sm:m-2 text-xl text-blue-400 hover:bg-blue-400 rounded-full hover:text-white transition-colors duration-300"
        >
          <FaTwitter />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          href="mailto:mayanktanwar8402@gmail.com"
          className="m-1 p-1 sm:p-2 sm:m-2 text-xl text-green-900 hover:bg-green-900 rounded-full hover:text-white transition-colors duration-300"
        >
          <FaEnvelope />
          <span className="sr-only">Gmail</span>
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-black mt-4">Made with <span className="mr-2" role="link" aria-label="heart">💙</span>by <a className="text-blue-500 hover:underline" href="mailto:mayanktanwar8402@gmail.com">Mayank Tanwar</a></p>
      </div>
    </div>
  );
};

export default Footer;

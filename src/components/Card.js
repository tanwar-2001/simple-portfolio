import React from "react";
import profile from "../images/profile.jpeg";
import { FaEnvelope, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Card = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="h-32 w-32 object-cover drop-shadow-sm shadow-xl mx-auto rounded-full"
            src={profile}
            alt="profilePicture"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900 font-semibold">
            Mayank Tanwar
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            ReactJS & ReactNative Developer
          </p>
        </div>
        <div className="flex items-center justify-center">
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
      </div>
    </div>
  );
};

export default Card;

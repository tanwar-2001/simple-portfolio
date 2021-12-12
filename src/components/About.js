import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";
const About = () => {
  return (
    <div className="w-max-5xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Hey 👋🏼
      </p>
      <p className="text-base text-gray-600 sm:text-xl text-center leading-relaxed mt-4">
        I'm a passionate frontend developer. I love creating websites and mobile
        applications for people
      </p>
      <ScrollIntoView selector="#tech">
          <div className="mx-auto p-20">
              <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500"/>
          </div>
      </ScrollIntoView>
    </div>
  );
};

export default About;

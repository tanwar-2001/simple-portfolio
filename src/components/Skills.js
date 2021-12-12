import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMaterialui,
  SiFirebase,
  SiRedux,
  SiAwsamplify,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black md:text-4xl text-center font-bold">
        Tech I use
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col items-center max-w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <FaReact color="#2196f3" size={28} />
          <p className="font-semibold mt-4">ReactJS</p>
        </div>
        <div className="flex flex-col items-center w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiRedux color="purple" size={28} />
          <p className="font-semibold mt-4">Redux</p>
        </div>
        <div className="flex flex-col items-center w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <IoLogoNodejs color="green" size={28} />
          <p className="font-semibold mt-4">NodeJS</p>
        </div>
        <div className="flex flex-col items-center w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiExpress color="gray" size={28} />
          <p className="font-semibold mt-4">ExpressJS</p>
        </div>
        <div className="flex flex-col items-center w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiMongodb color="green" size={28} />
          <p className="font-semibold mt-4">MongoDB</p>
        </div>
        <div className="flex flex-col items-center w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiJavascript color="yellow" size={28} />
          <p className="font-semibold mt-4">Javascript</p>
        </div>
        <div className="flex flex-col items-center w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiTailwindcss color="teal" size={28} />
          <p className="font-semibold mt-4">TailwindCSS</p>
        </div>
        <div className="flex flex-col items-center w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiMaterialui color="blue" size={28} />
          <p className="font-semibold mt-4">MaterailUI</p>
        </div>
        <div className="flex flex-col items-center w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiFirebase className="text-yellow-400" size={28} />
          <p className="font-semibold mt-4">Firebase</p>
        </div>

        <div className="flex flex-col items-center w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiAwsamplify color="orange" size={28} />
          <p className="font-semibold mt-4">Amplify</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

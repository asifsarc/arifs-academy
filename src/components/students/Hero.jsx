import { assets } from "../../assets/assets";
import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className=" text-2xl md:text-5xl  relative font-bold text-gray-800 max-w-3xl mx-auto ">
        Empower your future with the courses designed to{" "}
        <span className="text-blue-600">
          fit your choice{" "}
          <img
            src={assets.sketch}
            alt="sketch"
            className="md:block hidden absolute -bottom-7 right-0"
          ></img>
        </span>
       
      </h1>
      <p className=" course-details-heading-large md:mt-4 md:block hidden text-gray-500 max-w-2xl mx-auto">
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>
      <p className=" course-details-heading-small md:hidden text-gray-500 max-w-sm mx-auto">
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>
    <Searchbar></Searchbar>
    </div>
  );
};

export default Hero;

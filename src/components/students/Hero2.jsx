import { useRef } from "react";
import RippleGrid from "../../Animations/RippleGrid/RippleGrid";
import SplashCursor from "../../Animations/SplashCursor";
import VariableProximity from "../../Animations/VariableProximity/VariableProximity";
import { assets } from "../../assets/assets";
import Searchbar from "./Searchbar";

const Hero2 = () => {
  const containerRef = useRef(null);
  return (
    <div className="relative w-full flex justify-center  items-center">
      <div className="absolute w-full h-full  ">
        <RippleGrid />
      </div>
      <div className="flex  flex-col z-10 items-center justify-center w-full md:pt-36 md:pb-16 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
        <h1 className=" text-2xl md:text-5xl md:hidden  relative font-bold text-gray-800 max-w-3xl mx-auto ">
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
        <div className="text-2xl select-none md:text-5xl font-bold hidden md:block  text-gray-800 max-w-3xl mx-auto" ref={containerRef} style={{ position: "relative" }}>
          <VariableProximity
            label={"Shape the Future of Infrastructure with Surveying Skills"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <p className=" select-none course-details-heading-large md:mt-4 md:block hidden text-gray-900 max-w-2xl mx-auto">
        We offer in-depth surveying courses, expert instruction, and a practical learning environment to help you gain real-world skills and grow in your professional surveying career.
        </p>
        <p className=" course-details-heading-small md:hidden text-gray-500 max-w-sm mx-auto">
        We offer in-depth surveying courses, expert instruction, and a practical learning environment to help you gain real-world skills and grow in your professional surveying career.
        </p>
        <Searchbar></Searchbar>
      </div>
    </div>
  );
};

export default Hero2;

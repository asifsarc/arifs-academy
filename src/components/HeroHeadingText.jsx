
import { assets } from '../assets/assets';

const HeroHeadingText = () => {
    return (
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
    );
};

export default HeroHeadingText;
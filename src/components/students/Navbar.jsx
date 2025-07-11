import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");
  const {navigate, isEducator} = useContext(AppContext)
  const {openSignIn} = useClerk()
  const {user} = useUser()

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-2 bg ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt="logo-white"
        className="w-28 lg:w-42 cursor-pointer"
      />
      {/* Desktop Sections */}
      <div className="hidden md:flex  items-center gap-5">
        <div className="flex items-center gap-5">
          { user && <> <button onClick={() => { navigate('/educator')}} className="cursor-pointer hover:text-blue-600"> {isEducator ? 'Educator Dashboard' : 'Becom Educator'} </button> |{" "}
          <Link className="hover:text-blue-600" to="/my-enorollments">My Enrollments</Link> </> } 
        </div>
       { user ?  <UserButton></UserButton> : 
       <button onClick={() => openSignIn()} className="bg-[#2563eb] text-white py-3 px-7 flex items-center justify-center rounded-full">
          Create Account
        </button>}
      </div>
      {/* Mobile Sectons */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex text-sm items-center gap-1 sm:gap-2 max-sm:text-xs">
        { user && <> <button onClick={() => { navigate('/educator')}} className="cursor-pointer hover:text-blue-600"> {isEducator ? 'Educator Dashboard' : 'Becom Educator'} </button> |{" "}
          <Link className="hover:text-blue-600" to="/my-enorollments">My Enrollments</Link> </> } 
        </div>
        {
          user ? <UserButton></UserButton> : <button onClick={() => openSignIn()}><img src={assets.user_icon} alt="" /></button>
        }
      </div>
    </div>
  );
};

export default Navbar;

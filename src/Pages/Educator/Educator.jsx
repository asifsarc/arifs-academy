import { Outlet } from "react-router-dom";
import EducatorNavbar from "../../components/educator/EducatorNavbar";
import Sidebar from "../../components/educator/Sidebar";
import EducatorFooter from "../../components/educator/EducatorFooter";


const Educator = () => {
    return (
        <div>
            
            
            <div className="flex">   
            <Sidebar></Sidebar>             
           <div className="flex-1">
            {
                 <Outlet></Outlet>
            }
           </div>
            </div>
            <EducatorFooter></EducatorFooter>
        </div>
    );
};

export default Educator;
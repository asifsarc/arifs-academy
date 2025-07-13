import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./Pages/Student/Home";
import CoursesLists from "./Pages/Student/CoursesLists";
import CourseDetails from "./Pages/Student/CourseDetails";
import MyEnrollments from "./Pages/Student/MyEnrollments";
import Player from "./Pages/Student/Player";
import Loading from "./components/students/Loading";
import Educator from "./Pages/Educator/Educator";
import Dashboard from "./Pages/Educator/Dashboard";
import MyCourses from "./Pages/Educator/MyCourses";
import StudentsEnroll from "./Pages/Educator/StudentsEnroll";
import AddCourse from "./Pages/Educator/AddCourse";
import Navbar from "./components/students/Navbar";
import EducatorNavbar from "./components/educator/EducatorNavbar";


const App = () => {
  const isEducatorRous = useMatch('/educator/*')
  return (
    <div className="text-default min-h-screen bg-white">
      {
        isEducatorRous ? <EducatorNavbar/> : <Navbar/>
      }
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/course-list" element={<CoursesLists/>}/>
        <Route path="/course-list/:input" element={<CoursesLists/>}/>
        <Route path="/course/:id" element={<CourseDetails/>}/>
        <Route path="/my-enrollments" element={<MyEnrollments/> }/>
        <Route path="/player/:courseId" element={<Player/> }/>
        <Route path="/loading/:path" element={<Loading/> }/>
        <Route path="/educator" element={<Educator/>}>
          <Route path="educator" element={<Dashboard/>}/>
          <Route path="add-course" element={<AddCourse></AddCourse>}/>
          <Route path="my-corses" element={<MyCourses></MyCourses>}/>
          <Route path="student-enrolled" element={<StudentsEnroll></StudentsEnroll>}/>
        </Route>

      </Routes>
    </div>
  );
};

export default App;
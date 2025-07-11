import Hero from "../../components/students/Hero";
import Companies from '../../components/students/Companies'
import CourseSection from "../../components/students/CourseSection";
import TestimonialsSection from "../../components/students/TestimonialsSection";

const Home = () => {
    return (
        <div className="flex flex-col items-center space-y-7 text-center">
            <Hero></Hero>
            <Companies/>
            <CourseSection/>
            <TestimonialsSection/>
        </div>
    );
};

export default Home;
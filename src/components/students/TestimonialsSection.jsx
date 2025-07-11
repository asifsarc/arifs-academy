
import { assets, dummyTestimonial } from "../../assets/assets";
import { IoIosArrowRoundForward } from "react-icons/io";

const TestimonialsSection = () => {
    
    return (
        <div>
            <h2>Testimonials</h2>
            <p>Hear from our learners as they share their journeys of transformation, success, and how our < br/> platform has made a difference in their lives.</p>
            <div className="md:flex gap-4 space-y-5 py-5 md:space-y-0 px-8 max-w-6xl">
                {
                    dummyTestimonial.map((testimonial, index) => (
                        <div className="text-sm  text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] overflow-hidden shadow-black/5" key={index}>
                            <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
                                <img className="h-12 w-12 rounded-full" src={testimonial.image} alt="" />
                                <div>
                                    <h1 className="text-lg font-medium text-gray-800">{testimonial.name}</h1>
                                    <p className="text-gray-800/80">{testimonial.role}</p>
                                </div>                               
                            </div>
                            <div className="p-5 pb-7">
                                <div className="flex gap-0.5">
                                    {
                                        [...Array(5)].map((_, i) => (
                                            <img className="h-5" src={ i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} key={i} alt="" />
                                        ))
                                    }
                                </div>
                                <p className="text-gray-500 mt-5">{testimonial.feedback}</p>
                                </div>
                                <a href="#" className="text-blue-500 underline px-5 flex gap-1 items-center relative ">Read more <IoIosArrowRoundForward className="text-[22px]" /></a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TestimonialsSection;
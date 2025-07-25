import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";
import Footer from "../../components/students/Footer";
import Rating from "../../components/students/Rating";


const Player = () => {
    const {  calculateChapterTime, enrolledCourses } = useContext(AppContext);
    const {courseId} = useParams()
    const [courseData, setCourseData] = useState(null)
    const [openSection, setOpenSection] = useState({});
    const [playerData, setPlayerData] = useState(null);

    const getCourseData = () => {
        enrolledCourses.map((course) => {
            if(course._id === courseId){
                setCourseData(course)
            }
        })
    }

    const toggleSection = (index) => {
        setOpenSection((prev) => (
            {...prev, [index] : !prev[index] }
        ))
      }
    

    useEffect(() => {
        getCourseData()
      }, [enrolledCourses]);

     


  return (
    <>
      <div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">
        {/* left column */}
        <div className="text-gray-800">
          <h2 className="text-xl font-semibold">Courese Stucture</h2>
          <div className="pt-5">
            {courseData && courseData.courseContent.map((chapter, index) => (
              <div
                key={index}
                className="border border-gray-300 bg-white mb-2 rounded"
              >
                <div
                  className="flex items-center justify-between px-4 p-3 cursor-pointer select-none"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center gap-2">
                    {/* icon */}
                    <img
                      className={`transform transition-transform ${
                        openSection[index] ? "rotate-180" : ""
                      }`}
                      src={assets.down_arrow_icon}
                      alt="arrow icon"
                    />
                    <p className="font-medium md:text-base text-sm">
                      {chapter.chapterTitle}
                    </p>
                  </div>
                  <p className="text-sm md:text-base">
                    {chapter.chapterContent.length} lectures. -{" "}
                    {calculateChapterTime(chapter)}
                  </p>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500  ${
                    openSection[index] ? "max-h-96" : "max-h-0"
                  } ease-in-out`}
                >
                  <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                    {chapter.chapterContent.map((lecture, index) => (
                      <li className="flex items-center gap-2 py-1" key={index}>
                        <img
                          className="w-4 h-4 mt-1"
                          src={false ? assets.blue_tick_icon : assets.play_icon}
                          alt="playIcon"
                        />
                        <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-base font-medium">
                          <p>{lecture.lectureTitle}</p>
                          <div className="flex gap-2">
                            {lecture.lectureUrl && (
                              <p
                                onClick={() =>
                                  setPlayerData({
                                    ...lecture, chapter: index + 1, lecture: index + 1
                                  })
                                }
                                className="text-blue-500 cursor-pointer"
                              >
                                Watch
                              </p>
                            )}
                            <p className="">
                              {humanizeDuration(
                                lecture.lectureDuration * 60 * 1000,
                                { units: ["h", "m"] }
                              )}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 py-3 mt-10">
            <h1 className="text-xl font-bold">Rate This Course:</h1>
            
                
            <Rating initialRating={0}></Rating>
                
            
          </div>
        </div>
        {/* Right Column */}
        <div className="md:mt-10">
            {
                playerData ? (
                    <div>
                         <YouTube 
                         videoId={playerData.lectureUrl.split('/').pop()} 
                         opts={{playerVars: {autoplay: 1,  controls: 1, rel: 0, modestbranding: 1, showinfo: 0,}}}
                         iframeClassName="w-full h-full  aspect-video"/>
                         <div className="flex justify-between items-center mt-1">
                            <p>{playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}</p>
                            <button className="text-blue-600">{false ? 'Completed' : "Mark Complete"}</button>
                         </div>
                    </div>
                )
                 : 
                 <img src={courseData ? courseData.courseThumbnail : ""} alt="" />
            }
           
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Player;

import {createContext, useEffect, useState} from 'react'
import { dummyCourses } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import humanizeDuration from 'humanize-duration'

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const [allCourses , setAllCoursed] = useState([])
    const [isEducator , setisEducator] = useState(true)
    const [enrolledCourses , setEnrolledCoureses] = useState([])

    // Fetch all Courses

    const FetchAllCourses = async () => {
        setAllCoursed(dummyCourses)
    }

    // Function to calculate average rating of course
    const calculateRating = (course) => {
        
        if(course.courseRatings.length === 0){
            return 0;
        }
        let totalRating = 0;

        course.courseRatings.forEach((rating => {
            
            totalRating += rating.rating
        }));
        return totalRating / course.courseRatings.length
    }

    // Function to Calculate Chapter Time

    const calculateChapterTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
        return humanizeDuration(time *60 * 1000, {units: ["h" , "m"]})
    }

    // Function to Calculate Course Durations

    const calculateCourseDuration = (course) => {
        let time = 0;
        course.courseContent.map((chapter) => chapter.chapterContent.map((lecture) => time += lecture.lectureDuration) )

        return humanizeDuration(time *60 * 1000, {units: ["h" , "m"]})
    }

    // Function to Calculate Number of Lectue in this Course

    const calculateNoOfLectures = (course) => {
        let totalLectures = 0 ;
        course.courseContent.forEach(chapter => {
            if(Array.isArray(chapter.chapterContent)){
                totalLectures += chapter.chapterContent.length
            }
        });
        return totalLectures
    }

    // Fetch user Enrolled Coursed
        const fetchUserEnrolledCourses = async () => {
            setEnrolledCoureses(dummyCourses)
        }


    useEffect(() => {
        FetchAllCourses(),
        fetchUserEnrolledCourses()
    },[])
   
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()


    const value = {
        currency,
        allCourses,
        navigate,
        calculateRating,
        isEducator , 
        setisEducator,
        calculateChapterTime,
        calculateCourseDuration,
        calculateNoOfLectures,
        enrolledCourses,
        fetchUserEnrolledCourses


    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}


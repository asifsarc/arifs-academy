import {createContext, useEffect, useState} from 'react'
import { dummyCourses } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const [allCourses , setAllCoursed] = useState([])
    const [isEducator , setisEducator] = useState(true)

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


    useEffect(() => {
        FetchAllCourses()
    },[])
   
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()


    const value = {
        currency,
        allCourses,
        navigate,
        calculateRating,
        isEducator , 
        setisEducator
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}


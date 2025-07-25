import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/students/Loading";


const MyCourses = () => {
    const {currency, allCourses} = useContext(AppContext)
    const [courses, setCoureses] = useState(null)

    const  fetchEducatorCoureses = async () => {
        setCoureses(allCourses)
    }

    useEffect(() => {
        fetchEducatorCoureses()
    }, [])

    return courses ?  (
        <div className="h-screen flex flex-col items-start  justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
            <div className="w-full">
                <h2 className="pb-4 text-lg font-medium"> My Coureses</h2>
                <div className="flex flex-col items-center max-w-6xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">All Courese</th>
                                <th className="px-4 py-3 font-semibold truncate">Earnings</th>
                                <th className="px-4 py-3 font-semibold truncate">Students</th>
                                <th className="px-4 py-3 font-semibold truncate">Published On</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                        {
                            courses.map(course => (
                                <tr key={course._id} className="border-b border-gray-500/20">
                                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                        <img src={course.courseThumbnail} alt="Courese Image" className="w-16" />
                                        <span className="truncate hidden md:block">{course.courseTitle}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        {currency} {Math.floor(course.enrolledStudents.length * (course.coursePrice - course.discount * course.coursePrice / 100))}
                                    </td>
                                    <td className="px-4 py-3">
                                        {course.enrolledStudents.length}
                                    </td>
                                    <td>
                                        {new Date(course.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    ): <Loading/>
};

export default MyCourses;
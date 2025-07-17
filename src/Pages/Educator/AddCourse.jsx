import uniqid from "uniqid";
import Quill from "quill";
import { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";

const AddCourse = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [showPopup, setShowPopUp] = useState(false);

  const [currrentChpaterId, setCurrentChpaterId] = useState(null);
  const [lectureDetails, setLectureDetails] = useState({
    lectureDetails: "",
    lectureDuration: "",
    lectureUrl: "",
    isPreviewFree: false,
  });

  const handleChpater = (action, chapterId) => {
    if(action === 'add') {
        const title = prompt('Enter Chapter Name:')
        if(title){
            const newChapter = {
                chapterId: uniqid(),
                chapterTitle: title,
                chapterContent: [],
                collapsed: false,
                chapterOrder:chapters.length > 0 ? chapters.slice(-1)[0].chapterOrder + 1 : 1,
            };
            setChapters([...chapters, newChapter])
        }
    } else if (action === 'remove') {
        setChapters(chapters.filter((chapter) => chapter.chapterid !== chapterId))
    } else if (action === 'toggle') {
        setChapters(
            chapters.map((chapter) => chapter.chapterId === chapterId ? {...chapter, collapsed: !chapter.collapsed} : chapter)
        )
    }
  }


  const handleLecture = (action , chapterId, lectureIndex) => {
   
    if(action === 'add'){
        setCurrentChpaterId(chapterId)
        setShowPopUp(true)
    }else if (action === 'remove'){

     setChapters(
        chapters.map((chapter) => {
            if(chapter.chapterId === chapterId){
                chapter.chapterContent.splice(lectureIndex, 1)
            }
            return chapter;
        })
     );

    }
  };

  const addLecture = () => {
    setChapters(
        chapters.map((chapter) => {
            if(chapter.chapterId === currrentChpaterId){
                const newLecture = {
                  ...lectureDetails,
                  lectureOrder: chapter.chapterContent.length > 0 ? chapter.chapterContent.slice(-1)[0].lectureOrder + 1 : 1,
                  lectureId: uniqid()
                };
                chapter.chapterContent.push(newLecture)        
              }
              return chapter;
        }))
        setShowPopUp(false);
        setLectureDetails({
            lectureTitle: '',
            lectureDuration: '',
            lectureUrl: '',
            isPreviewFree: false,
        });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    // initiate Quill Only Once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <div className="h-screen  overflow-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-0 pb-0">
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <p>Courese Title</p>
          <input
            onChange={(e) => setCourseTitle(e.target.value)}
            value={courseTitle}
            type="text"
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <p>Course Description</p>
          <div ref={editorRef}></div>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col gap-1">
            <p>Course Price</p>
            <input
              type="number"
              required
              value={coursePrice}
              onChange={e => setCoursePrice(e.target.value)}
              placeholder="0"
              className="outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500"
            />
          </div>
          <div className="flex md:flex-row flex-col items-center gap-3">
            <p>Course Thumbnail</p>
            <label htmlFor="thumbnailImage" className="flex items-center gap-3">
              <img
                src={assets.file_upload_icon}
                alt="File Upload Icon"
                className="p-3 bg-blue-500 rounded"
              />
              <input
                type="file"
                id="thumbnailImage"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
                hidden
              />
              <img
                className="max-h-15"
                src={image ? URL.createObjectURL(image) : null}
                alt="Thumbnail"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p>Discount %</p>
          <input
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
            type="number"
            placeholder="0"
            min={0}
            max={100}
            className="outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500"
            required
          />
        </div>
          {/* Adding Chapters and Lectures */}
      <div>
        {
            chapters.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className="bg-white border rounded-lg mb-4">
              <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center">
                    <img onClick={() => handleChpater('toggle', chapter.chapterId)} src={assets.dropdown_icon} width={14} alt="Drop Down" className={`mr-2 cursor-pointer transition-all ${chapter.collapsed && "-rotate-90"}`} />
                    <span className="font-semibold">{chapterIndex + 1 } {chapter.chapterTitle}</span>
                </div>
                <span className="text-gray-500">{chapter.chapterContent.length} Lectures</span>
                <img onClick={() => handleChpater('remove')} src={assets.cross_icon} className="cursor-pointer"  alt="Cross" />
              </div>
              {
                !chapter.collapsed && (
                    <div className="p-4">
                       {chapter.chapterContent.map((lecture, lectureIndex)=> (
                        <div key={lectureIndex} className="flex justify-between items-center mb-2">
                             <span>{lectureIndex + 1 } {lecture.lectureTitle} - {lecture.lectureDuration} mins - <a href={lecture.lectureUrl} target="_blank" className="text-blue-500">Link</a> - {lecture.isPreviewFree ? 'Free Preview' : 'Paid'}
                             </span>
                             <img onClick={() => handleLecture('remove', chapter.chapterId, lectureIndex)} src={assets.cross_icon} className="cursor-pointer" alt="Cross" />
                        </div>
                       ))}
                       <div
                       onClick={() => handleLecture('add', chapter.chapterId)}
                        className="inline-flex bg-gray-100 p-2 rounded cursor-pointer mt-2"> + Add Lecture</div>
                    </div>
                )}
            </div>
            ))}
            <div className="flex justify-center items-center bg-blue-100 p-2 rounded-lg cursor-pointer" onClick={() => handleChpater('add')}>
                + Add Chapter
            </div>
            {
                showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800/80 ">
                      <div className="bg-white text-gray-700 p-4 rounded relative w-full max-w-80">
                         <h2 className="text-lg font-semibold mb-4"
                         
                         >Add Lecture</h2>
                         <div className="mb-2">
                           <p>Lecture title</p>
                           <input
                           className="mt-1 block w-full border rounded py-1 px-2"
                           value={lectureDetails.lectureTitle}
                           onChange={(e) => setLectureDetails({...lectureDetails, lectureTitle: e.target.value})} 
                           type="text"
                            />
                         </div>
                         <div className="mb-2">
                           <p>Duration(minutes)</p>
                           <input
                           className="mt-1 block w-full border rounded py-1 px-2"
                           value={lectureDetails.lectureDuration}
                           onChange={(e) => setLectureDetails({...lectureDetails, lectureDuration: e.target.value})} 
                           type="number"
                            />
                         </div>
                         <div className="mb-2">
                           <p>Lecture URL</p>
                           <input
                           className="mt-1 block w-full border rounded py-1 px-2"
                           value={lectureDetails.lectureUrl}
                           onChange={(e) => setLectureDetails({...lectureDetails, lectureUrl: e.target.value})} 
                           type="text"
                            />
                         </div>
                         <div className="flex gap-2 my-4">
                         <p>Is Preview Free?</p>
                         <input
                           className="mt-1 scal-125"
                           value={lectureDetails.isPreviewFree}
                           onChange={(e) => setLectureDetails({...lectureDetails, isPreviewFree: e.target.value})} 
                           type="checkbox"
                            />
                         </div>
                         <button onClick={addLecture} className="w-full bg-blue-600 text-white px-4 py-2 rounded" type="button">Add</button>

                          <img className="absolute top-4 right-4 w-4 cursor-pointer" onClick={() => setShowPopUp(false)} src={assets.cross_icon} alt="cross" />

                      </div>
                    </div>
                )
            }
      </div>
      <button type="submit" className="bg-black text-white w-max py-2.5 px-8 rounded my-4">ADD</button>
      </form>
    
    </div>
  );
};

export default AddCourse;

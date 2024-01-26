"use client"
import { PauseCircle, PlayCircle } from 'lucide-react'
import React, { useEffect } from 'react'
import { useState } from 'react'

function ChapterNav({course,userCourse,setActiveChapter}) {

   const [activeIndex, setActiveIndex] = useState(0) 

   useEffect(()=>{
        setActiveChapter(course?.chapter[0])
   },[])

  return (
    <div>
      <div className='border-b p-5'>
        <h2 className='font-medium text-[20px]'>{course?.name}</h2>
        <h2 className='text-gray-500 text-[14px]'>by jee2</h2>
      </div>
      <div>
        {
          course?.chapter?.map((chapter,index)=>(
            <div key={index} 
            onClick={()=>{setActiveIndex(index) 
              setActiveChapter(chapter)}}
            className={`flex gap-2 text-gray-500 text-[16px] px-5 p-4 cursor-pointer hover:bg-gray-100 ${activeIndex===index?'bg-green-100 text-green-700':null} `}>
             {activeIndex===index?<PauseCircle/>:<PlayCircle/>}
              <h2>{chapter.name}</h2>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default ChapterNav

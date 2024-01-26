"use client"
import React, { useEffect,useState } from 'react'
import ChapterNav from './_components/ChapterNav'
import FullVideoPlayer from './_components/FullVideoPlayer'
import { UserButton, useUser } from '@clerk/nextjs'
import { getCourseById } from '../../../../../app/_services/index'
import { CompletedChapeter } from '../../../../_context/CompletedChapter'

function Viewcourse({params}) {

  const {user}=useUser()
  const [course, setCourse] = useState([])
  const [userCourse, setUserCourse] = useState([])
  const [activeChapter, setActiveChapter] = useState()
  const [completedChapter, setCompletedChapter] = useState([])

  useEffect(()=>{
    user?getCourse():null
  },[user])
 

  const getCourse = async()=>{
    await getCourseById(params?.courseid ,user.primaryEmailAddress.emailAddress).then(
      res=>{
        console.log("efefefef",res)
        setCourse(res.courseList)
        setUserCourse(res.userEnrollCourses)
        setCompletedChapter(res?.userEnrollCourses[0]?.completedChapeter)
        console.log("efefegeg",course,userCourse,completedChapter)

      }
    )
  }

  return course?.name&&(
    <div className='flex'>
      <div className='hidden fixed bg-white md:block w-72 border shadow-sm h-screen z-50'>
        <ChapterNav course={course} userCourse={userCourse} setActiveChapter={(chapter)=>{setActiveChapter(chapter)}}/>
      </div>
      <div className='ml-80'>
        <div className='float-right p-5'>
        <UserButton/>
        </div>
        <FullVideoPlayer  activeChapter={activeChapter}/>
      </div>
    </div>
  )
}

export default Viewcourse
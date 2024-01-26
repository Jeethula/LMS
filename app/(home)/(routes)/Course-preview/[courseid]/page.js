"use client"
import { getCourseById } from '../../../../_services/index'
import React, { useEffect,useState } from 'react'
import VideoPlayer from './_components/VideoPlayer'
import CourseDetails from './_components/CourseDetails'
import OptionSection from './_components/OptionSection'
import EnrollmentSection from './_components/EnrollmentSection'
import { useUser } from '@clerk/nextjs'

function CoursePreview({params}) {

  const [courseDetails, setCourseDetails] = useState([])
  const [userCourse, setUserCourse] = useState([])
  const {user}=useUser()
  useEffect(()=>{
    console.log(params.courseid)
    params.courseid?getCourse(params.courseid):null
  },[user])

  const getCourse=()=>{
    getCourseById(params.courseid,user?.primaryEmailAddress?.emailAddress).then(res=>{
      console.log(res)
      setCourseDetails(res.courseList)
      setUserCourse(res?.userEnrollCourses[0])
    })
  }
  return courseDetails?.name&&(
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='col-span-2'>
         {courseDetails?.chapter[0] ? <VideoPlayer 
          videoUrl={courseDetails?.chapter[0]?.video.url} /> : null}
          <CourseDetails courseDetail={courseDetails} />
        </div>
        <div className='mt-5 md:mt-0'>
          <OptionSection/>
          <EnrollmentSection courseDetail={courseDetails} userCourse={userCourse} />
        </div>

      </div>

    </div>
  )
}

export default CoursePreview
import { useUser } from '@clerk/nextjs'
import { EnrollCourse, publishCourse } from '../../../../../_services/index'
import React from 'react'
import { useRouter } from 'next/navigation'

function EnrollmentSection({courseDetail,userCourse}) {
    
    const {user}=useUser()
    const router=useRouter()

    const enrollCourse = async ()=>{
        if(user){
        await EnrollCourse(courseDetail.id,user.primaryEmailAddress.emailAddress).then(
            async (res)=>{
                console.log("Enrollment=>",res)
                if(res){
                    await publishCourse(res.createUserEnrollCourse.id)
                    .then(res=>{
                        console.log(res)
                        if(res){
                            router.push('/Viewcourse/'+courseDetail.id)
                        }
                    })
                }
            }
        )
        }
        else{
            router.push('/sign-in')
        }

    }
  return (
    <div>
        { userCourse?.courseId? <div className='mt-5 border rounded-lg p-2 text-center'>
            <h2 className='text-gray-500'>Continue to learn and build project , Access Source code and track your progress for free</h2>
            <button className='p-2 w-full bg-purple-500 text-white text-[14px] rounded-lg mt-2 hover:bg-purple-700' onClick={()=>{ router.push('/Viewcourse/'+courseDetail.id)}}> Continue</button>
        </div> : null

        }
       { courseDetail.free && !userCourse?.courseId ? <div className='mt-5 border rounded-lg p-2 text-center'>
            <h2 className='text-gray-500'>Learn and build project , Access Source code and track your progress for free</h2>
            <button className='p-2 w-full bg-purple-500 text-white text-[14px] rounded-lg mt-2 hover:bg-purple-700' onClick={()=>{enrollCourse()}}>Enroll Now</button>
        </div>: !userCourse?.courseId?
         <div className='mt-5 border rounded-lg p-2 text-center'>
         <h2 className='text-gray-500'>Buy this course and access source code and track your progress</h2>
         <button className='p-2 w-full bg-purple-500 text-white text-[14px] rounded-lg mt-2 hover:bg-purple-700'>Buy Now</button>
     </div> : null
       }
        <div className='mt-5 border rounded-lg p-2 text-center'>
            <h2 className='text-gray-500'>Buy this for a month and get all courses and access source code and track your progress</h2>
            <button className='p-2 w-full bg-purple-500 text-white text-[14px] rounded-lg mt-2 hover:bg-purple-700'>Buy Membership</button>
        </div>

    </div>
  )
}

export default EnrollmentSection
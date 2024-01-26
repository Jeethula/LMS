import { Book } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CourseList({courses}) {
  return (
    <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {
            courses.map((course,index)=>(
                <Link href={'/Course-preview/'+course.id}>
                    <div key={index} className='border rounded-lg p-2 cursor-pointer hover:border-purple-300'>
                        <Image src={course.banner.url}
                                alt = {course.name}
                                width={1000}
                                height={500}
                                className='rounded-lg'
                        />
                        <div className='mt-2'>
                        <h1 className='text-[18px] md:text-[16px] font-medium'>{course.name}</h1>
                        {/* <h1 className='text-grey-400 text-[13px]'>{course.totalchapter}</h1> */}
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            <Book className='h-6 w-6 text-purple-600 rounded-full bg-purple-100 p-1'/>
                            <h2 className='text-[12px] text-gray-400'>{course.totalChapters} Chapters</h2>
                        </div>
                        <h2 className='mt-2 text-[14px]'>{course.free?'Free':"paid"}</h2>

                    </div>
                </Link> 
               
                
            ))
        }

    </div>
  )
}

export default CourseList
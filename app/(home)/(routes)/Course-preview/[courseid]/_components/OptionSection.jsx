import Image from 'next/image'
import React from 'react'

function OptionSection() {
    const options=[
        {
            id:1,
            name:'Github',
            icon:'/github.png'
        },
        {
            id:2,
            name:'Demo',
            icon:'/demo.png'
        },
        {
            id:3,
            name:'Youtube',
            icon:'/youtube.png'
        },
    ]
  return (
    <div className='flex items-center gap-3'>
        {options.map((item,index)=>(
            <div key={index} className='p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer'>
                <Image src={item.icon}
                 width={30}
                 height={30}
                 alt='icons'
                />
                <h2 className='text-[14px] text-gray-500'>{item.name}</h2>
            </div>
        ))}
    </div>
  )
}

export default OptionSection
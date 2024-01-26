"use client"
import React from 'react'
import Searchbar from './Searchbar'
import { UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

function Header() {
    const {user}=useUser()
    const router=useRouter
  return (
    <div className='ml-64 p-5 border-b flex items-center justify-between '>
        <Searchbar/>
       {!user?<button onClick={()=>router.push('/sign-in')}>Login</button>:
        <UserButton/>}
        

    
    </div>
  )
}

export default Header
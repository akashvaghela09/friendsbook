import React from 'react'
import { Link } from "react-router-dom"
import { MdEmojiPeople, MdOutlinePersonSearch } from 'react-icons/md'
import { IoIosPeople } from 'react-icons/io'
import { BsGlobe2 } from 'react-icons/bs'

const SideBar = () => {

    return (
        <div className='bg-blue-400 h-full w-60 flex flex-col'>
            <Link className='p-3 m-2 rounded bg-blue-500 hover:bg-blue-600 text-slate-50' to="/friend-list">
                <div className='flex items-center justify-between'>
                    My Friend List
                    <IoIosPeople  className='text-3xl'/>
                </div>
            </Link>
            <Link className='p-3 m-2 rounded bg-blue-500 hover:bg-blue-600 text-slate-50' to="/friend-request">
                <div className='flex items-center justify-between'>
                    Friend Request
                    <MdEmojiPeople  className='text-3xl'/>
                </div>
            </Link>
            <Link className='p-3 m-2 rounded bg-blue-500 hover:bg-blue-600 text-slate-50' to="/suggestions">
                <div className='flex items-center justify-between'>
                    Suggestions
                    <MdOutlinePersonSearch  className='text-3xl'/>
                </div>
            </Link>
            <Link className='p-3 m-2 rounded bg-blue-500 hover:bg-blue-600 text-slate-50' to="/find-friends">
                <div className='flex items-center justify-between'>
                    Find Friends
                    <BsGlobe2  className='text-3xl'/>
                </div>
            </Link>
        </div>
    )
}

export { SideBar }
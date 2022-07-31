import React from 'react'
import { CgSpinner } from 'react-icons/cg'

const Spinner = () => {
    return (
        <div className='absolute top-0 left-0 bg-black/[0.3] w-screen h-screen flex justify-center items-center'>
            <CgSpinner className='animate-spin text-7xl text-white' />
        </div>
    )
}

export { Spinner }

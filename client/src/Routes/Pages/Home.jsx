import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/friend-list')
    }, []);

    return (
        <div className='border-2 w-full justify-evenly items-center'>
           Home Page
        </div>
    )
}

export { Home }
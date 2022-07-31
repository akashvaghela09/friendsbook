import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from "axios";
import { loadData, saveData } from '../Utils/localstorage';

const Homepage = () => {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleRoute = (para) => {
        navigate(`/${para}`)
    }

    const checkIfLoggedIn = () => {
        let email = loadData("email");
        let auth = loadData("auth");

        if (
            email === null || email === undefined || email === "" ||
            auth === null || auth === undefined || auth === ""
        ) {
            handleRoute("login")
        } else {
            setLoading(false);
        }
    }

    useEffect(() => {
        checkIfLoggedIn()
    }, [])

    return (
        <div className='w-full h-full flex justify-center items-center'>
            {
                loading ? <div className='text-3xl text-slate-900'>Loading...</div> :
                    <div className='flex flex-col items-center w-full h-full'>
                        
                    Home Page
    
                    </div>
            }
        </div>
    )
}

export { Homepage }
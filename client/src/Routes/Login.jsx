import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { loadData, saveData } from "../Utils/localstorage"
import axios from "axios";

const Login = () => {
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);

    const handleRoute = (para) => {
        navigate(`/${para}`)
    }

    const handleSubmit = () => {
        axios.post(`${process.env.REACT_APP_DATABASE_URL}/users/login`, { email, password })
            .then((res) => {
                saveData("email", email)
                saveData("auth", true)

                handleRoute("")
            }).catch((err) => {
                alert("User Not Found")
            })
    }

    const checkIfLoggedIn = () => {
        let email = loadData("email");
        let auth = loadData("auth");

        if ((email === null || email === undefined || email === "") &&
            (auth === null || auth === undefined || auth === false)) {
            setLoading(false);
        } else {
            handleRoute("")
        }
    }

    useEffect(() => {
        checkIfLoggedIn()
    }, [])

    return (
        <div className='w-full h-full flex justify-center items-center'>
            {
                loading === true ? <div>Loading...</div> :
                    <div className='w-4/5 h- md:w-2/5 lg:w-4/12 bg-slate-200 flex justify-center items-center flex-col p-8 rounded drop-shadow'>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='p-4 m-2 w-11/12' placeholder='Email' />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='p-4 m-2 w-11/12' placeholder='Password' />
                        <button onClick={() => handleSubmit()} className='p-4 m-2 w-11/12 bg-blue-500 text-slate-200 text-xl rounded'>Login</button>
                        <p onClick={() => handleRoute("registration")} className='text-slate-500 hover:text-slate-900 cursor-pointer mt-4'>Create Account</p>
                    </div>
            }
        </div>
    )
}

export { Login }
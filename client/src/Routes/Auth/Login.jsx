import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAuth, setLoading, setUser } from "../../Redux/actions"
import axios from 'axios'
import { saveData } from "../../Utils/localStorage";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth } = useSelector(state => state.app);
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        dispatch(setLoading(true))

        let payload = {
            "username": userName,
            "password": password
        }

        axios.post(process.env.REACT_APP_BACKEND_URL+"/users/login", payload)
        .then((res) => {
            if(res.data.response === "success"){
                let user ={
                    "fullname": res.data.fullname,
                    "username": res.data.username
                }
                saveData("isAuth", true)
                saveData("username", res.data.username)
                saveData("fullname", res.data.fullname)
                dispatch(setUser(user))
                dispatch(setIsAuth(true))
            }
            dispatch(setLoading(false))
        })
        .catch((err) => {
            console.log(err);
            dispatch(setLoading(false))
        })
    }

    useEffect(() => {
        if(isAuth) {
            navigate('/')
        }
    }, [isAuth]);

    return (
        <div className='h-full flex justify-center items-center'>
            <div className='bg-slate-100 drop-shadow-md px-10 py-5 w-1/3 h-fit rounded-md flex flex-col justify-center'>
                <label className='flex flex-col items-start my-3'>
                    <p className='text-lg my-1'>Username</p>
                    <input className='w-full bg-slate-300 p-2 text-lg rounded-md' type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </label>
                <label className='flex flex-col items-start my-3'>
                    <p className='text-lg my-1'>Password</p>
                    <input className='w-full bg-slate-300 p-2 text-lg rounded-md' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button onClick={() => handleSubmit()} className='bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-md mt-8 text-lg'>Login</button>
                <Link className='mt-8 text-slate-600 hover:text-blue-600' to="/register">Create Account</Link>
            </div>
        </div>
    )
}

export { Login }

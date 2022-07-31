import React from 'react'
import { loadData } from "../Utils/localStorage";
import axios from "axios"
import { useDispatch } from 'react-redux'
import { setFriendRequestList } from '../Redux/actions';

const RequestStrip = (props) => {
    const dispatch = useDispatch()
    const { fullname, username, mutualFriends } = props;
    const myUsername = loadData('username');

    const handleAccept = () => {
        let payload = { "username": myUsername, "newFriend": username }

        axios.post(process.env.REACT_APP_BACKEND_URL + "/friendRequest/accept", payload)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            axios.post(process.env.REACT_APP_BACKEND_URL + "/friendRequest", payload)
            .then((res) => {
                let arr = res.data;
                dispatch(setFriendRequestList([...arr]))
            })
            .catch((err) => {
                console.log(err)
            })
        })
    }

    const handleReject = () => {
        let payload = { "username": myUsername, "newFriend": username }

        axios.post(process.env.REACT_APP_BACKEND_URL + "/friendRequest/reject", payload)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            axios.post(process.env.REACT_APP_BACKEND_URL + "/friendRequest", payload)
            .then((res) => {
                let arr = res.data;
                dispatch(setFriendRequestList([...arr]))
            })
            .catch((err) => {
                console.log(err)
            })
        })
    }

    return (
        <div className='bg-slate-100 flex justify-between p-2 rounded-md'>
            <div className='flex items-center'>
                <p className='bg-blue-700 w-16 h-16 rounded-full text-4xl flex justify-center items-center'>JP</p>
                <label className='flex flex-col items-start mx-4'>
                    <p className='text-2xl'>{fullname}</p>
                    <p className='text-slate-500 text-sm'>{username}</p>
                </label>
            </div>
            {
                mutualFriends > 0 &&
                <div className='flex items-end justify-start w-48 px-2'>
                    <p className='flex items-center'>
                        Mutual Friends :
                    </p>
                    <p className='mx-2 font-bold'>
                        {mutualFriends}
                    </p>
                </div>
            }
            <div className='flex justify-end items-center'>
                <button onClick={() => handleAccept()} className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-2 w-32 rounded-md'>Accept</button>
                <button onClick={() => handleReject()} className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 mx-2 w-32 rounded-md'>Reject</button>
            </div>
        </div>
    )
}

export { RequestStrip }
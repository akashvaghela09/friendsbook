import React, { useEffect, useState } from 'react'
import { MutualFriendStrip } from '../../Components/MutualFriendStrip'
import axios from "axios"
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

const MutualFriendList = () => {
    const navigate = useNavigate()
    const { username } = useParams()
    const [list, setlist] = useState([])
    const { user, isAuth } = useSelector(state => state.app)

    const getFriendList = () => {
        let payload = { "username": user.username, "friendsUsername":  username}

        axios.post(process.env.REACT_APP_BACKEND_URL + "/friendList/mutualFriend", payload)
            .then((res) => {
                let arr = res.data.list;
                setlist([...arr])
            })
    }

    useEffect(() => {
        if (isAuth === true) {
            getFriendList()
        }
    }, []);
    return (
        <div className='h-full flex flex-col overflow-auto p-8'>
            <div className=' flex items-center py-4 bg-slate-300'>
                <button onClick={() => navigate("/friend-list")} className='ml-6 p-2 px-6 bg-blue-400 rounded-md'>BACK</button>
                <p className='text-2xl flex items-center mx-4'>Mutual Friends with {username}</p>
            </div>
            {
                list.length > 0 &&
                list.map((item, index) => {
                    return <MutualFriendStrip
                        key={index}
                        fullname={item.fullname}
                        username={item.username}
                        mutualFriends={item.mutualFriends}
                    />
                })
            }
        </div>
    )
}

export { MutualFriendList }

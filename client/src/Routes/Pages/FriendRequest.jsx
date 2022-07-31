import React, { useState, useEffect } from 'react'
import { RequestStrip } from '../../Components/RequestStrip'
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { setFriendRequestList } from '../../Redux/actions'

const FriendRequest = () => {
    const dispatch = useDispatch()
    const { user, isAuth, friendRequestList } = useSelector(state => state.app)
    
    const getFriendList = () => {
        let payload = { "username": user.username }
        axios.post(process.env.REACT_APP_BACKEND_URL + "/friendRequest", payload)
            .then((res) => {
                let arr = res.data;
                dispatch(setFriendRequestList([...arr]))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (isAuth === true && user.username !== "") {
            getFriendList()
        }
    }, []);

    return (
        <div className='h-full flex flex-col overflow-auto gap-4 p-8'>
            {
                friendRequestList.length > 0 &&
                friendRequestList.map((item, index) => {
                    return <RequestStrip
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

export { FriendRequest }

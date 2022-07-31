import React, { useEffect, useState } from 'react'
import { ListStrip } from '../../Components/ListStrip'
import axios from "axios"
import { useSelector } from 'react-redux'

const FriendList = () => {
    const [list, setlist] = useState([])
    const { user, isAuth } = useSelector(state => state.app)

    const getFriendList = () => {
        let payload = { "username": user.username }

        axios.post(process.env.REACT_APP_BACKEND_URL + "/friendList", payload)
            .then((res) => {
                let arr = res.data;
                setlist([...arr])
            })
    }

    useEffect(() => {
        if (isAuth === true) {
            getFriendList()
        }
    }, []);
    return (
        <div className='h-full flex flex-col overflow-auto gap-4 p-8'>
            {
                list.length > 0 &&
                list.map((item, index) => {
                    return <ListStrip
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

export { FriendList }

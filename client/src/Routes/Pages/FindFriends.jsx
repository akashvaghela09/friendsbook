import React, { useState, useEffect } from 'react'
import { SuggestionStrip } from '../../Components/SuggestionStrip'
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { setAddFriendList } from '../../Redux/actions'

const FindFriends = () => {
    const [list, setlist] = useState([])
    const dispatch = useDispatch()
    const { user, isAuth, addFriendList } = useSelector(state => state.app)
    const getFriendList = () => {
        let payload = { "username": user.username }

        axios.post(process.env.REACT_APP_BACKEND_URL + "/suggestions/allusers", payload)
            .then((res) => {
                let arr = res.data;
                dispatch(setAddFriendList([...arr]))
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
                addFriendList.length > 0 &&
                addFriendList.map((item, index) => {
                    return <SuggestionStrip
                        key={index}
                        fullname={item.fullname}
                        username={item.username}
                        mutualFriends={item.mutualFriends}
                        type={'addFriend'}
                    />
                })
            }
        </div>
    )
}

export { FindFriends }

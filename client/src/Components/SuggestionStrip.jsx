import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSuggestionList, setAddFriendList } from '../Redux/actions';
import { loadData } from "../Utils/localStorage";
import axios from "axios"
import { useLocation } from "react-router-dom";

const SuggestionStrip = (props) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const path = location.pathname;
    const { fullname, username, mutualFriends, type } = props;
    const myUsername = loadData('username');
    const { suggestionList } = useSelector(state => state.app);
    const handleSend = () => {
        let payload = { "requester": myUsername, "receiver": username }

        axios.post(process.env.REACT_APP_BACKEND_URL + "/friendRequest/send", payload)
            .then((res) => {
                let arr = suggestionList.filter((item) => { return item.username !== username })
                dispatch(setSuggestionList([...arr]))
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {

                let payload = { "username": myUsername }

                if (type === 'suggestion') {
                    axios.post(process.env.REACT_APP_BACKEND_URL + "/suggestions", payload)
                        .then((res) => {
                            let arr = res.data;
                            dispatch(setSuggestionList([...arr]))
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                } else if (type === 'addFriend') {
                    axios.post(process.env.REACT_APP_BACKEND_URL + "/suggestions/allusers", payload)
                    .then((res) => {
                        let arr = res.data;
                        dispatch(setAddFriendList([...arr]))
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }


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
                <div className='flex items-center justify-start w-48 px-2'>
                    <p className='flex items-center'>
                        Mutual Friends :
                    </p>
                    <p className='mx-2 font-bold'>
                        {mutualFriends}
                    </p>
                </div>
            }
            <div className='flex justify-end items-center'>
                <button onClick={() => handleSend()} className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-2 rounded-md'>Send Friend Request</button>
            </div>
        </div>
    )
}

export { SuggestionStrip }
import React, { useEffect } from 'react'
import { SuggestionStrip } from '../../Components/SuggestionStrip'
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { setSuggestionList, setSuggestionTimeStamp } from "../../Redux/actions"

const Suggestions = () => {
    const dispatch = useDispatch()
    const { isAuth, user, suggestionList, suggestionTimeStamp } = useSelector(state => state.app)
    const getFriendList = () => {
        let payload = { "username": user.username }

        axios.post(process.env.REACT_APP_BACKEND_URL + "/suggestions", payload)
            .then((res) => {
                let arr = res.data;
                dispatch(setSuggestionList([...arr]))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const setStamp = () => {
        let time = Date.now()
        if(suggestionTimeStamp === 0 || suggestionTimeStamp === ""){
            dispatch(setSuggestionTimeStamp(time))
        } else if (time - suggestionTimeStamp > 60000) {
            dispatch(setSuggestionTimeStamp(time))
            getFriendList()
        }
    }

    useEffect(() => {
        if (isAuth === true && user.username !== "" && suggestionTimeStamp === 0) {
            getFriendList()
        }
        setStamp()
    }, []);
    return (
        <div className='h-full flex flex-col overflow-auto gap-4 p-8'>
            {
                suggestionList.length > 0 &&
                suggestionList.map((item, index) => {
                    return <SuggestionStrip
                        key={index}
                        fullname={item.fullname}
                        username={item.username}
                        mutualFriends={item.mutualFriends}
                        type={'suggestion'}
                    />
                })
            }
        </div>
    )
}

export { Suggestions }

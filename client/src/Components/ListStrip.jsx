import React from 'react'
import { Link } from "react-router-dom";
import { useSelector  } from 'react-redux';

const ListStrip = (props) => {
    const { fullname, username, mutualFriends } = props;
    const { user, isAuth } = useSelector(state => state.app)
    return (
        <Link to={`/friend-list/${username}`}>
            <div className='bg-slate-100 flex p-2 rounded-md cursor-pointer'>
                <div className='flex items-center grow'>
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
                            Mutual Friends
                        </p>
                        {/* <p className='mx-2 font-bold'>
                            {mutualFriends}
                        </p> */}
                    </div>
                }
            </div>
        </Link>
    )
}

export { ListStrip }
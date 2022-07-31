import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsAuth, setUser, setLoading } from '../Redux/actions';
import { clearData } from '../Utils/localStorage';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth, user } = useSelector(state => state.app);

    const handleLogout = () => {
        clearData()
        dispatch(setLoading(true));
        setTimeout(() => {
            dispatch(setIsAuth(false))
            dispatch(setUser({}))
            dispatch(setLoading(false))
            navigate('/login')
        }, 1000);
    }
    return (
        <div className='bg-slate-900 flex justify-between items-center'>
            <p className='text-slate-200 text-4xl mx-4 h-16 flex justify-center items-center'>
                Friends Book
            </p>
            {
                isAuth === true &&
                <div className='flex justify-start'>
                <label className='mr-4'>
                    <p className='text-xl text-slate-100'>{user.fullname}</p>
                    <p className='text-sm text-slate-500'>{user.username}</p>
                </label>
                <button onClick={() => handleLogout()} className='bg-slate-800 hover:bg-slate-700 p-2 m-2 text-xl rounded text-slate-100'>Logout</button>
            </div>
            }
        </div>
    )
}

export { Header }
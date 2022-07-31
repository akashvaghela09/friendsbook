import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = (props) => {
    const { Component } = props;
    const navigate = useNavigate()
    const { isAuth } = useSelector(state => state.app)

    const checkAuth = () => {
        if(!isAuth){
            navigate('/login')
        }
    }
    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <div>
            <Component />
        </div>
    )
}

export { PrivateRoute }
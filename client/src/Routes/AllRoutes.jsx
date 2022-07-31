import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from "./Pages/Home"
import { FriendList } from "./Pages/FriendList"
import { FriendRequest } from "./Pages/FriendRequest"
import { Suggestions } from "./Pages/Suggestions"
import { Login } from "./Auth/Login"
import { Register } from './Auth/Register'
import { NotFound } from "./NotFound"
import { PrivateRoute } from './PrivateRoute'
import { FindFriends } from './Pages/FindFriends'
import { MutualFriendList } from './Pages/MutualFriendList'

const AllRoutes = () => {
    return (
        <div className='bg-slate-400 w-full overflow-auto'>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/friend-list" element={<PrivateRoute Component={FriendList}/>} />
                <Route path="/friend-list/:username" element={<PrivateRoute Component={MutualFriendList}/>} />
                <Route path="/friend-request" element={<PrivateRoute Component={FriendRequest}/>} />
                <Route path="/suggestions" element={<PrivateRoute Component={Suggestions}/>} />
                <Route path="/find-friends" element={<PrivateRoute Component={FindFriends}/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export { AllRoutes }

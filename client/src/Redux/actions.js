import { 
    SET_LOADING,
    SET_ERROR, 
    SET_IS_AUTH,
    SET_USER,
    SET_FRIEND_LIST,
    SET_FRIEND_REQUEST_LIST,
    SET_SUGGESTION_LIST,
    SET_ADD_FRIEND_LIST,
    SET_SUGGESTION_TIME_STAMP
} from './actionTypes';

const setLoading = (payload) => {
    return {
        type: SET_LOADING,
        payload
    }
}

const setError = (payload) => {
    return {
        type: SET_ERROR,
        payload
    }
}

const setIsAuth = (payload) => {
    return {
        type: SET_IS_AUTH,
        payload
    }
}

const setUser = (payload) => {
    return {
        type: SET_USER,
        payload
    }
}

const setFriendRequestList = (payload) => {
    return {
        type: SET_FRIEND_REQUEST_LIST,
        payload
    }
}

const setFriendList = (payload) => {
    return {
        type: SET_FRIEND_LIST,
        payload
    }
}

const setSuggestionList = (payload) => {
    return {
        type: SET_SUGGESTION_LIST,
        payload
    }
}

const setAddFriendList = (payload) => {
    return {
        type: SET_ADD_FRIEND_LIST,
        payload
    }
}

const setSuggestionTimeStamp = (payload) => {
    return {
        type: SET_SUGGESTION_TIME_STAMP,
        payload
    }
}

export { 
    setLoading,
    setError,
    setIsAuth,
    setUser,
    setFriendList,
    setFriendRequestList,
    setSuggestionList,
    setAddFriendList,
    setSuggestionTimeStamp
}
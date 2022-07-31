import {
    SET_LOADING,
    SET_ERROR,
    SET_IS_AUTH,
    SET_USER,
    SET_FRIEND_REQUEST_LIST,
    SET_FRIEND_LIST,
    SET_SUGGESTION_LIST,
    SET_ADD_FRIEND_LIST,
    SET_SUGGESTION_TIME_STAMP
} from './actionTypes';

const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    user: {},
    friendList: [],
    friendRequestList: [],
    suggestionList: [],
    addFriendList: [],
    suggestionTimeStamp: 0
}

const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: payload
            }
        case SET_ERROR:
            return {
                ...state,
                isError: payload
            }
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: payload
            }
        case SET_USER:
            return {
                ...state,
                user: payload
            }
        case SET_FRIEND_REQUEST_LIST:
            return {
                ...state,
                friendRequestList: payload
            }
        case SET_FRIEND_LIST:
            return {
                ...state,
                friendList: payload
            }
        case SET_SUGGESTION_LIST:
            return {
                ...state,
                suggestionList: payload
            }
        case SET_ADD_FRIEND_LIST:
            return {
                ...state,
                addFriendList: payload
            }
            case SET_SUGGESTION_TIME_STAMP:
            return {
                ...state,
                suggestionTimeStamp: payload
            }
        default:
            return state
    }
}

export { reducer }
const initialState = {
    currentUser: null ,
    error: null,
    loader: false,
    checkIn: null,
    checkInError: null,
    nextLink : null
}

const rootReducer = (state = initialState , action ) => {
    switch (action.type) {
        case "LOGIN_USER": {
            return {
                ...state,
                loader: true
            }
        }
        case "LOGIN_SUCCESS": {
            return {
                ...state,
                currentUser: action.payload,
                loader: false,
                nextLink: '/dashboard'
            }
        }
        case "LOGIN_FAILURE": {
            return {
                ...state,
                error:action.payload,
                loader:false
            }
        }
        case "LOG_OUT": {
            return {
                ...state,
                currentUser: action.payload,
                loader: false,
                nextLink: action.payload
            }
        }
        case "REQUEST_CHECK_IN": {
            return {
                ...state,
                loader: true
            }
        }
        case "RECIEVE_CHECK_IN": {
            return {
                ...state,
                checkIn:action.payload,
                loader:false
            }
        }
        case "ERROR_CHECK_IN": {
            return {
                ...state,
                checkInError: action.payload,
                loader:false
            }
        }
        case "NO_CHECK_IN": {
            return {
                ...state,
                checkIn: null,
                loader:false
            }
        }
        case "NO_AUTHENTICATE": {
            return {
                ...state,
                nextLink:action.payload
            }
        }
        default:
            return state
    }
}
export default rootReducer;
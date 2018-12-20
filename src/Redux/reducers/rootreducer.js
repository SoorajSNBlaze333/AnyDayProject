const initialState = {
    currentUser: null,
    error: null,
    loader: false,
    checkIn: null,
    checkInError: null
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
                error:null,
                loader: false
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
                loader: false
            }
        }
        case "REQUEST_CHECK_IN_STATUS": {
            return {
                ...state,
                loader: true
            }
        }
        case "RECIEVE_CHECK_IN_STATUS": {
            return {
                ...state,
                checkIn: action.payload,
                checkInError:null,
                loader:false
            }
        }
        case "ERROR_CHECK_IN_STATUS": {
            return {
                ...state,
                checkInError: action.payload,
                loader:false
            }
        }
        case "NO_CHECK_IN_STATUS": {
            return {
                ...state,
                checkIn: action.payload,
                loader:false
            }
        }
        default:
            return state
    }
}
export default rootReducer;
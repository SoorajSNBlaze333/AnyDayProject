export function LoggedIn(user){
    return {
        type: 'LOGIN_USER',
        user
    }
}
export function logOutUser() {
    return {
        type: 'LOG_OUT',
        payload: null
    }
}
export function getCheckIn(data) {
    return {
        type: 'GET_CHECK_IN',
        data
    }
}
export function loginUser() {
    return {
        type:"LOGIN_USER"
    }
}
export function loginSuccess(data) {
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}
export function loginFailure(error) {
    return {
        type: "LOGIN_FAILURE",
        payload: error
    }
}

export function requestCheckIn() {
    return {
        type : "REQUEST_CHECK_IN"
    }
}
export function recieveCheckIn(data) {
    return {
        type: "RECIEVE_CHECK_IN",
        payload : data
    }
}
export function errorCheckIn(error) {
    return {
        type : "ERROR_CHECK_IN",
        payload :error
    }
}
export function noCheckIn() {
    return {
        type : "NO_CHECK_IN",
        payload : null
    }
}
export function noAuthenticate() {
    return {
        type: "NO_AUTHENTICATE",
        payload: null
    }
}

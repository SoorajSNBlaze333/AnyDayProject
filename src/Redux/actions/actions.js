
export function logOutUser() {
    return {
        type: 'LOG_OUT',
        payload: null
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

export function requestCheckInStatus() {
    return {
        type : "REQUEST_CHECK_IN_STATUS"
    }
}
export function successCheckInStatus(data) {
    return {
        type: "SUCCESS_CHECK_IN_STATUS",
        payload : data
    }
}
export function errorCheckInStatus(error) {
    return {
        type: "ERROR_CHECK_IN_STATUS",
        payload :error
    }
}
export function noCheckInStatus() {
    return {
        type: "NO_CHECK_IN_STATUS",
        payload : null
    }
}

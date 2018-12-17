

export function LoggedIn(user){
    return {
        type: 'LOGIN_USER',
        user
    }
}
export function LoggedOut() {
    return {
        type: 'LOGOUT_USER',
        payload: null
    }
}

export function getCheckIn(data) {
    return {
        type: 'CHECK_IN',
        data
    }
}
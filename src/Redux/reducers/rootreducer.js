import { createStore } from 'redux';

const initialState = {
    currentUser: null,
    checkIn : []
}

const rootreducer = (state = initialState , action ) => {
    switch ( action.type ) {
        case 'LOGIN_USER':
            return {...state,
            currentUser : action.user
            }
        case 'LOGOUT_USER':
            return {...state,
            currentUser : action.payload
            }
        case 'CHECK_IN':
            return {...state,
            checkIn : action.data
            }
        default:
            return state
    }
}

const store = createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {
    store,
    rootreducer
}
import { createStore } from 'redux';

const initialState = {
    user:null
}

const rootreducer = (state = initialState,action) => {
    switch ( action.type ) {
        case 'SET_USER': 
            return {...state,
            user : action.payload 
            }
        case 'REMOVE_USER':
            return {...state,
            user : action.payload    
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
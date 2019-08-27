import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'
import reportReducer from '../reducers/reports'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () =>{
    const store = createStore(
        
        combineReducers({
            auth: authReducer,
            reports:reportReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
       
    )

    return store
}


import { createStore, applyMiddleware, compose } from 'redux'
import reducerUser from '../reducers/reducerUser';
import thunk from "redux-thunk"

// let array=[midl1, midl2, midl3]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducerUser, composeEnhancers(applyMiddleware(...array)));
const store = createStore(reducerUser, composeEnhancers(applyMiddleware(thunk)));

export default store
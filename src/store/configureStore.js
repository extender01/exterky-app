import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import vysetreniReducer from "../reducers/vysetreniReducer";
import filtryReducer from "../reducers/filtryReducer";
import thunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import poznamkyOddReducer from "../reducers/poznamkyOddReducer";



//aplikace middleware pro firebase
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default(), thunk] :
  [thunk];

//store creation

const store = createStore(
    combineReducers({
        auth: authReducer,
        vysetreni: vysetreniReducer,
        filtry: filtryReducer,
       // poznamkyOdd: poznamkyOddReducer
    }), composeEnhancers(applyMiddleware(thunk))
);

export default store;



  //  applyMiddleware(...middleware)
//=========================================


// const {applyMiddleware, combineReducers, createStore} = require('redux');
// const thunk = require('redux-thunk');
// const reducer = require('./reducers/index');

// // Be sure to ONLY add this middleware in development!
// const middleware = process.env.NODE_ENV !== 'production' ?
//   [require('redux-immutable-state-invariant').default(), thunk] :
//   [thunk];

// // Note passing middleware as the last argument to createStore requires redux@>=3.1.0
// const store = createStore(
//   reducer,
//   applyMiddleware(...middleware)
// );
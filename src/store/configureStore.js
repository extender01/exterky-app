import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import vysetreniReducer from "../reducers/vysetreniReducer";
import filtryReducer from "../reducers/filtryReducer";
import thunk from "redux-thunk";


//aplikace middleware pro firebase
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//store creation

const store = createStore(
    combineReducers({
        vysetreni: vysetreniReducer,
        filtry: filtryReducer
    }), composeEnhancers(applyMiddleware(thunk))
);

export default store;
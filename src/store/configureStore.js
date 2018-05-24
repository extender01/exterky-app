import { createStore, combineReducers } from "redux";
import vysetreniReducer from "../reducers/vysetreniReducer";
import filtryReducer from "../reducers/filtryReducer";


//store creation

const store = createStore(
    combineReducers({
        vysetreni: vysetreniReducer,
        filtry: filtryReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
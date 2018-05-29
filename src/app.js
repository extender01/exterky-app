//kdyz je export named tak pri importu se musi jmenovat stejne jako v exportnim souboru
//kdyz je export default tak se to pri jmenovani importu muze jmenovat jinak nez v externim souboru a je to bez slozenych zavorek

/* import {square, add} from "./utils.js";
import {isAdult, canDrink} from "./person.js";
import defaultniFceSenior from "./person.js"; */

/* import validator from "validator";
console.log(validator.isEmail("ahoooooj@asf.com")); */


import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import store from "./store/configureStore";
import { pridatVysetreni, odstranitVysetreni } from "./actions/vysetreniActions";
import { filtrovatText } from "./actions/filtryActions";
import filtrovaneVysetreni from "./selectors/vysetreniSelector";
import "normalize.css/normalize.css"
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";



//provede callback pri kazde zmene v redux store
store.subscribe(() => {
    console.log(store.getState());
});



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));


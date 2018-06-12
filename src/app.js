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
import AppRouter, {history} from "./routers/AppRouter";
import store from "./store/configureStore";
import { startVycucatVysetreni } from "./actions/vysetreniActions";
import { filtrovatText } from "./actions/filtryActions";
import filtrovaneVysetreni from "./selectors/vysetreniSelector";
import { firebase } from "./firebase/firebase";
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


//fce aby se aplikace renderovala jen jednou
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("app"));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading</p>, document.getElementById("app"));



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("log in", user.email)
        store.dispatch(startVycucatVysetreni()).then(() => {
            renderApp();
            
            //history.location.pathname je soucasna url kde ted jsme - pokud jsme na domaci login page, tak presmeruj na dashboard page
            if (history.location.pathname === "/login") {
                history.push("/");
            }
        });

    } else {
        console.log("log out");
        renderApp();
        history.push("/login");
    }
  });



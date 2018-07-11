


import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, {history} from "./routers/AppRouter";
import store from "./store/configureStore";
import { startVycucatVysetreni } from "./actions/vysetreniActions";
import { prihlasit, odhlasit } from "./actions/authActions";
import { filtrovatText } from "./actions/filtryActions";
import { firebase } from "./firebase/firebase";
import "normalize.css/normalize.css"
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";



//provede callback pri kazde zmene v redux store
store.subscribe(() => {
    console.log("probehla zmena ve store", store.getState());
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
        console.log("vyrenderovano");
        ReactDOM.render(jsx, document.getElementById("app"));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading</p>, document.getElementById("app"));


//spusti se kdyz ve firebase probehne prihlaseni nebo odhlaseni
firebase.auth().onAuthStateChanged((user) => {
    if (user) { //pokud prihlaseni
        console.log("log in", user);
        store.dispatch(prihlasit(user.email)); //pokud je prihlaseny ve firebase tak zapis prihlaseneho uzivatele do store
        store.dispatch(startVycucatVysetreni()).then(() => {
            renderApp();
            
            //history.location.pathname je soucasna url kde ted jsme - pokud jsme na domaci login page, tak presmeruj na dashboard page
            if (history.location.pathname === "/login") {
                history.push("/");
            }
        });

    } else {
        console.log("log out");
        //store.dispatch(odhlasit());
        store.dispatch(startVycucatVysetreni()).then(() => {

            renderApp();
        })
        //history.push("/login");
    }
  });



  
// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         console.log("log in", user);
//         store.dispatch(prihlasit(user.email));
//         store.dispatch(startVycucatVysetreni()).then(() => {
//             renderApp();
            
//             //history.location.pathname je soucasna url kde ted jsme - pokud jsme na domaci login page, tak presmeruj na dashboard page
//             if (history.location.pathname === "/login") {
//                 history.push("/");
//             }
//         });

//     } else {
//         console.log("log out");
//         store.dispatch(odhlasit());
//         renderApp();
//         history.push("/login");
//     }
//   });



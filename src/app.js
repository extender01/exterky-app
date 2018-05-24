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



//provede callback pri kazde zmene v redux store
store.subscribe(() => {
    console.log(store.getState());
});

const vysetreniJedna = store.dispatch(pridatVysetreni({
    nazev: "ACTH",
    synonyma: ["hormon takovy", "hormon makovy"],
    kam: "Krnov",
    odber: ["serum", "EDTA plasma", "LiHEP plasma"],
    preanal: "odebrat stocit chladit",
    poznamka: "blablabla",
    poznamkaOdd: "poznamka od oddeleni",
    upravenoKdy: 500
}));

const vysetreniDva = store.dispatch(pridatVysetreni({
    nazev: "Zombrex",
    synonyma: ["nejaka blbost na ledviny", "marker ledvin C"],
    kam: "Novy Jicin",
    odber: ["serum", "EDTA plasma", "LiHEP plasma"],
    preanal: "odebrat stocit chladit",
    poznamka: "blablabla",
    poznamkaOdd: "poznamka od oddeleni",
    upravenoKdy: 200
}));


const vysetreniTri = store.dispatch(pridatVysetreni({
    nazev: "Cystatin C",
    synonyma: ["nejaka blbost na ledviny", "marker ledvin C"],
    kam: "Novy Jicin",
    odber: ["serum", "EDTA plasma", "LiHEP plasma"],
    preanal: "odebrat stocit chladit",
    poznamka: "blablabla",
    poznamkaOdd: "poznamka od oddeleni",
    upravenoKdy: 800
}));

const vysetreniCtyri = store.dispatch(pridatVysetreni({
    nazev: "Cystatin A",
    synonyma: ["nejaka blbost na ledviny", "marker ledvin C"],
    kam: "Novy Jicin",
    odber: ["serum", "EDTA plasma", "LiHEP plasma"],
    preanal: "odebrat stocit chladit",
    poznamka: "blablabla",
    poznamkaOdd: "poznamka od oddeleni",
    upravenoKdy: 300
}));

// store.dispatch(odstranitVysetreni(vysetreniJedna.vysetreni.id));
// store.dispatch(filtrovatText("c"));


//ulozeni state celeho redux store do promenne a pak aplikovani funkce filtrovani a zobrazeni v konzoli
const state = store.getState();
console.log(filtrovaneVysetreni(state.vysetreni, state.filtry));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));


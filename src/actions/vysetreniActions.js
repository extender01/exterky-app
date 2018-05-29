import uuid from "uuid";
import db from "../firebase/firebase";

//PRIDAT_VYSETRENI

export const pridatVysetreni = (vysetreni) => ({
    type: "PRIDAT_VYSETRENI",
    vysetreni: vysetreni
    }   
    
);


export const startPridatVysetreni = (vysetreniData) => {

    return (dispatch) => {

        const {
            nazev = "",
            synonyma = [],
            nazevAk = "",
            skAk = [],
            kam = "",
            kdy = "",
            odber = [],
            preanal = "",
            preanalLab = "",
            poznamka = "",
            poznamkaOdd = "",
            provadiSe = "",
            odezvaDo = "",
            metodika = "",
            jednotka = "",
            odbornost = ""
        } = vysetreniData;

        const vysetreni = {nazev, synonyma, nazevAk, skAk, kam, kdy, odber, preanal, preanalLab, poznamka, poznamkaOdd, provadiSe, odezvaDo, metodika, jednotka, odbornost}
        db.ref("vysetreni").push(vysetreni).then((ref) => {
            dispatch(pridatVysetreni({
                id: ref.key,
                ...vysetreni
            }));
        });
    };
};









//ODSTRANIT_VYSETRENI
                                //arg id je string
export const odstranitVysetreni = (id) => ({
    type: "ODSTRANIT_VYSETRENI",
    id
});


//EDITOVAT_VYSETRENI
                                //arg id je string a updates je objekt
export const editovatVysetreni = (id, updates) => ({
    type: "EDITOVAT_VYSETRENI",
    id,
    updates
});
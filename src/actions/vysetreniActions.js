import uuid from "uuid";

//PRIDAT_VYSETRENI

export const pridatVysetreni = ({
    nazev = "",
    synonyma = [],
    kam = "",
    odber = [],
    preanal = "",
    poznamka = "",
    poznamkaOdd = "",
    upravenoKdy = undefined
} = {}) => ({
    type: "PRIDAT_VYSETRENI",
    vysetreni: {
        id: uuid(),
        nazev,
        synonyma,
        kam,
        odber,
        preanal,
        poznamka,
        poznamkaOdd,
        upravenoKdy
        
    }
});

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
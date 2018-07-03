import uuid from "uuid";
import db from "../firebase/firebase";

//PRIDAT_VYSETRENI

export const pridatVysetreni = (vysetreni) => ({
    type: "PRIDAT_VYSETRENI",
    vysetreni: vysetreni
    }   
    
);

//misto vraceni objektu vraci funkci, ktera nejdriv provede zapis do firebase pomoci push a v promise od push se provede dispatch do redux store - dispatch se vola s argumentem puvodni fce pridatVysetreni - ta vrati action objekt
//promise ma v argumentu informace o id polozky zapsane do firebase v objektu ref, takze potrebne parametry o expense pro addExpense predame v desctructured podobe ref.key a zbytek pres spread obkejtu expense
export const startPridatVysetreni = (vysetreniData) => {

    return (dispatch) => {

                //desctructuring objektu expenseData  =  jako kdyby se vytvorily samostatne promenne  a do nich se dosadi hodnoty, ktere prijdou od toho kdo volal startPridatVysetreni (kdyz neprijde nic, tak se tam dosadi defaultni hodnty)

        const {
            nazev = "",
            synonyma = "",
            nazevAk = "",
            skAk = "",
            kam = "",
            kdy = "",
            odber = "",
            odberSpec = "",
            preanal = "",
            poznamka = "",
            poznamkaOdd = {},
            labKdoOdesila = "",
            labPreanal = "",
            labPoznamka = "",
            provadiSe = "",
            odezvaDo = "",
            metodika = "",
            jednotka = "",
            odbornost = ""
        } = vysetreniData;

        console.log(poznamkaOdd);
        const vysetreni = {nazev, synonyma, nazevAk, skAk, kam, kdy, odber, preanal, poznamka, labKdoOdesila, labPreanal, labPoznamka, provadiSe, odezvaDo, metodika, jednotka, odbornost, poznamkaOdd} //poznamkaOdd
        return db.ref("vysetreni").push(vysetreni).then((ref) => {
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

export const startOdstranitVysetreni = (id) => {
    return (dispatch) => {

        db.ref(`vysetreni/${id}`).remove().then(() => {
            dispatch(odstranitVysetreni(id));
        });
    };
   
};


//EDITOVAT_VYSETRENI
                                //arg id je string a updates je objekt
export const editovatVysetreni = (id, updates) => ({
    type: "EDITOVAT_VYSETRENI",
    id,
    updates
});


export const startEditovatVysetreni = (id, updates) => {
    console.log("udaty:", {...updates});
    return (dispatch) => {
        return db.ref(`vysetreni/${id}`).update(updates).then(() => {
            dispatch(editovatVysetreni(id, updates));
        });

    };
};




//VYCUCAT_VYSETRENI Z DATABAZE

                                //array s objekty o jednotlivych vysetreni
export const vycucatVysetreni = (vysetreni) => ({
    type: "VYCUCAT_VYSETRENI",
    vysetreni
});




export const startVycucatVysetreni = () => {
    return (dispatch) => {
        const vysetreni = [];
       //chceme vytahnout vsechny hodnoty veci z objektu ve firebase vysetreni, vse se ulozi do objektu snapshot
        return db.ref("vysetreni").once("value").then((snapshot) => {

            //v objektu snapshot projdeme vsechny polozky a jeho property s hodnotama tech vysetreni jedno po druhem ulozime do array pres klasicky push
            snapshot.forEach((childSnapshot) => {
                vysetreni.push({
                    //parsujeme hodnoty z childSnapshot objektu do formatu array prijatelneho pro nas program
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            //zavolame funkci dispatch ve ktere nam fce vycucat vysetreni nachysta action objekt ve kterem bude array vsech vysetreni co byly ve firebase ve spravnem formatu
            dispatch(vycucatVysetreni(vysetreni));
        });
    };
};






//PRIDAT_POZNAMKU




export const pridatPoznamkuOdd = (id, poznamkaOddeleni) => ({
    type: "PRIDAT_POZNAMKUODD",
    id,
    poznamkaOdd: {poznamkaOdd: poznamkaOddeleni}
});

export const startPridatPoznamkuOdd = (id, poznamkaOddeleni) => {
    console.log("uz to startuje, ", id, poznamkaOddeleni)
    return (dispatch) => {
        //return db.ref(`vysetreni/${id}/poznamkaOdd`).update(poznamkaOddeleni);
        console.log("ted bude proveden zapis do firebase");
        return db.ref(`vysetreni/${id}/poznamkaOdd`).update(poznamkaOddeleni).then(() => {
            console.log("uz by to melo byt");
            dispatch(pridatPoznamkuOdd(id, poznamkaOddeleni));
        });


    };
    
};








// //misto vraceni objektu vraci funkci, ktera nejdriv provede zapis do firebase pomoci push a v promise od push se provede dispatch do redux store - dispatch se vola s argumentem puvodni fce pridatVysetreni - ta vrati action objekt
// //promise ma v argumentu informace o id polozky zapsane do firebase v objektu ref, takze potrebne parametry o expense pro addExpense predame v desctructured podobe ref.key a zbytek pres spread obkejtu expense
// export const startPridatVysetreni = (vysetreniData) => {

//     return (dispatch) => {

//                 //desctructuring objektu expenseData  =  jako kdyby se vytvorily samostatne promenne  a do nich se dosadi hodnoty, ktere prijdou od toho kdo volal startPridatVysetreni (kdyz neprijde nic, tak se tam dosadi defaultni hodnty)

//         const {
//             nazev = "",
//             synonyma = "",
//             nazevAk = "",
//             skAk = "",
//             kam = "",
//             kdy = "",
//             odber = [],
//             preanal = "",
//             poznamka = "",
//             poznamkaOdd = {},
//             labKdoOdesila = "",
//             labPreanal = "",
//             labPoznamka = "",
//             provadiSe = "",
//             odezvaDo = "",
//             metodika = "",
//             jednotka = "",
//             odbornost = ""
//         } = vysetreniData;

//         console.log(poznamkaOdd);
//         const vysetreni = {nazev, synonyma, nazevAk, skAk, kam, kdy, odber, preanal, poznamka, labKdoOdesila, labPreanal, labPoznamka, provadiSe, odezvaDo, metodika, jednotka, odbornost, poznamkaOdd} //poznamkaOdd
//         return db.ref("vysetreni").push(vysetreni).then((ref) => {
//             dispatch(pridatVysetreni({
//                 id: ref.key,
                
//                 ...vysetreni
                
//             }));
//         });
//     };
// };



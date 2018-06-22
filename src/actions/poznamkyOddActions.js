import db from "../firebase/firebase";




// export const pridatPoznamkuOdd = (id, poznamkaOddeleni) => ({
//     type: "PRIDAT_POZNAMKUODD",
//     id,
//     ...poznamkaOddeleni
// });

// export const startPridatPoznamkuOdd = (id, poznamkaOddeleni) => {
//     console.log("uz to startuje, ", id, poznamkaOddeleni)
//     return (dispatch) => {
//         //return db.ref(`vysetreni/${id}/poznamkaOdd`).update(poznamkaOddeleni);
//         console.log("ted bude proveden zapis do firebase");
//         return db.ref(`vysetreni/${id}/poznamkaOdd`).update(poznamkaOddeleni).then(() => {
//             console.log("uz by to melo byt", id, poznamkaOddeleni);
//             dispatch(pridatPoznamkuOdd(id, poznamkaOddeleni));
//         });


//     };
    
// };




//VYCUCAT_VYSETRENI Z DATABAZE

//array s objekty o jednotlivych vysetreni
// export const vycucatVysetreni = (vysetreni) => ({
//     type: "VYCUCAT_VYSETRENI",
//     vysetreni
// });




// export const startVycucatPoznamkyOdd = () => {
//     return (dispatch) => {
//         const poznamkyOdd = [];
//         //chceme vytahnout vsechny hodnoty veci z objektu ve firebase vysetreni, vse se ulozi do objektu snapshot
//         return db.ref("vysetreni").once("value").then((snapshot) => {

//             //v objektu snapshot projdeme vsechny polozky a jeho property s hodnotama tech vysetreni jedno po druhem ulozime do array pres klasicky push
//             snapshot.forEach((childSnapshot) => {
//                 vysetreni.push({
//                     //parsujeme hodnoty z childSnapshot objektu do formatu array prijatelneho pro nas program
//                     id: childSnapshot.key,
//                     jeTam: childSnapshot.val().poznamkaOdd
//                 });
//             });
//             console.log(poznamkyOdd);
//             //zavolame funkci dispatch ve ktere nam fce vycucat vysetreni nachysta action objekt ve kterem bude array vsech vysetreni co byly ve firebase ve spravnem formatu
//             dispatch(vycucatVysetreni(vysetreni));
//         });
//     };
// };
//filtrovani veci ze state od redux storeu, vysetreni je array, filtry je objekt
const filtrovaneVysetreni = (vysetreni, filtry) => {
    return vysetreni.filter((item) => {
        //const textMatch = item.nazev.toLowerCase().includes(filtry.text.toLowerCase());
        //return textMatch
        //zapis bez promenne:
        return item.nazev.toLowerCase().includes(filtry.text.toLowerCase());
    }).sort((a, b) => {
        if (filtry.razeni === "a") {
            return a.nazev > b.nazev ? 1 : -1;
        } else if (filtry.razeni === "z") {
            return a.nazev < b.nazev ? 1 : -1;
        } else if (filtry.razeni === "nejnovejsi") {
            return a.upravenoKdy < b.upravenoKdy ? 1 : -1;
        } else if (filtry.razeni === "nejstarsi") {
            return a.upravenoKdy > b.upravenoKdy ? 1 : -1;
        }
    });
};

export default filtrovaneVysetreni;
//filtrovani veci ze state od redux storeu, vysetreni je array, filtry je objekt
const filtrovaneVysetreni = (vysetreni, filtry) => {
    return vysetreni.filter((item) => {
       
       let dleNazvu = item.nazev.toLowerCase().includes(filtry.text.toLowerCase());
       let dleSynonyma = item.synonyma.toLowerCase().includes(filtry.text.toLowerCase());
       let dleNazvuBezDia = accentFold(item.nazev.toLowerCase()).includes(filtry.text.toLowerCase());
       //let dleNazvuBezDia = item.nazev.toLowerCase().includes(accentFold(filtry.text.toLowerCase()));
       console.log(accentFold(item.nazev.toLowerCase()));
       console.log(dleNazvuBezDia);
      
       return dleNazvu || dleSynonyma || dleNazvuBezDia;
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



export const accentFold = (str) => {   //převede string s diakritikou na string bez
    if (!str) {return ""};
    const accentMap = {
        'á':'a',
        'é':'e',
        'í':'i',
        'ó':'o',
        'ú':'u',
        "ě": "e",
        "š": "s",
        "č": "c",
        "ř": "r",
        "ž": "z",
        "ý": "y"
      };
    let bezDia = "";
    for (let i = 0; i < str.length; i++) {
        bezDia += accentMap[str.charAt(i)] || str.charAt(i);
    };
    return bezDia
};
  


export default filtrovaneVysetreni;
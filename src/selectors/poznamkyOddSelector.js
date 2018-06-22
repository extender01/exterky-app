//filtrovani veci ze state od redux storeu, poznamkaOdd je objekt
const predchoziPoznamky = (id, poznamkaOdd) => {
    return vysetreni.filter((item) => {
       
        
       let dleNazvu = item.nazev.toLowerCase().includes(filtry.text.toLowerCase());
       let dleSynonyma = item.synonyma.toLowerCase().includes(filtry.text.toLowerCase());
      
    })};

export default predchoziPoznamky;
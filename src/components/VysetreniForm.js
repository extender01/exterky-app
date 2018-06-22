import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";


export default class VysetreniForm extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
       //pokud v props prichazi vysetreniProEditaci (posila komponenta EditovatVysetreni), tak vypln state a tedy i formular jejimi udaji, kdyz ne tak to nechej prazdne
        nazev: props.vysetreniProEditaci ? props.vysetreniProEditaci.nazev : "",
        synonyma: props.vysetreniProEditaci ? props.vysetreniProEditaci.synonyma : [],
        nazevAk: props.vysetreniProEditaci ? props.vysetreniProEditaci.nazevAk : "",
        skAk: props.vysetreniProEditaci ? props.vysetreniProEditaci.skAk : "",
        kam: props.vysetreniProEditaci ? props.vysetreniProEditaci.kam : "",
        kdy: props.vysetreniProEditaci ? props.vysetreniProEditaci.kdy : "",
        odber: props.vysetreniProEditaci ? props.vysetreniProEditaci.odber : "",
        preanal: props.vysetreniProEditaci ? props.vysetreniProEditaci.preanal : "",
        poznamka: props.vysetreniProEditaci ? props.vysetreniProEditaci.poznamka : "",
        poznamkaOdd: props.vysetreniProEditaci ? props.vysetreniProEditaci.poznamkaOdd : "",
        provadiSe: props.vysetreniProEditaci ? props.vysetreniProEditaci.provadiSe : "",
        odezvaDo: props.vysetreniProEditaci ? props.vysetreniProEditaci.odezvaDo : "",
        metodika: props.vysetreniProEditaci ? props.vysetreniProEditaci.metodika : "",
        jednotka: props.vysetreniProEditaci ? props.vysetreniProEditaci.jednotka : "",
        odbornost: props.vysetreniProEditaci ? props.vysetreniProEditaci.odbornost : "",
        labKdoOdesila: props.vysetreniProEditaci ? props.vysetreniProEditaci.labKdoOdesila : "",
        labPreanal: props.vysetreniProEditaci ? props.vysetreniProEditaci.labPreanal : "",
        labPoznamka: props.vysetreniProEditaci ? props.vysetreniProEditaci.labPoznamka : "",
        error: "",
       // upravenoKdy: props.vysetreniProEditaci ? props.vysetreniProEditaci.upravenoKdy : moment(),
        };
    };


   
    
    priZmene = (e) => {
        const coToJe = e.target.name;
        const kolikToJe = e.target.value;
        console.log(coToJe);
        switch (coToJe) {
            case "nazev":
                this.setState(() => ({nazev: kolikToJe}));
                console.log("byl to nazev");
                break;
            case "kam":
                this.setState(() => ({kam: kolikToJe}));
                console.log("byl to kam");
                break;
            case "synonyma":
                this.setState(() => ({synonyma: kolikToJe}));
                break;
            case "nazevAk":
                this.setState(() => ({nazevAk: kolikToJe}));
                break;    
            case "skAk":
                this.setState(() => ({skAk: kolikToJe}));
                break;
            case "kdy":
                this.setState(() => ({kdy: kolikToJe}));
                break; 
            case "odber":
                this.setState(() => ({odber: kolikToJe}));
                break;   
            case "preanal":
                this.setState(() => ({preanal: kolikToJe}));
                break;   
            case "poznamka":
                this.setState(() => ({poznamka: kolikToJe}));
                break; 
            case "poznamka":
                this.setState(() => ({poznamka: kolikToJe}));
                break;       
            case "poznamkaOdd":
                this.setState(() => ({poznamkaOdd: kolikToJe}));
                break;  
            case "provadiSe":
                this.setState(() => ({provadiSe: kolikToJe}));
                break;  
            case "odezvaDo":
                this.setState(() => ({odezvaDo: kolikToJe}));
                break;  
            case "metodika":
                this.setState(() => ({metodika: kolikToJe}));
                break;  
            case "jednotka":
                this.setState(() => ({jednotka: kolikToJe}));
                break;  
            case "odbornost":
                this.setState(() => ({odbornost: kolikToJe}));
                break;  
           
            case "labKdoOdesila":
                this.setState(() => ({labKdoOdesila: kolikToJe}));
                break;
            case "labPreanal":
                this.setState(() => ({labPreanal: kolikToJe}));
                break;  
            case "labPoznamka":
                this.setState(() => ({labPoznamka: kolikToJe}));
                break;  
            
        }

    }
   
   




    provedSubmit = (e) => {
        e.preventDefault();
        
        //const {nazev, synonyma} = this.state;

        if(!this.state.nazev || !this.state.kam) {
                                //stejne jako return {error: ""}
            this.setState(() => ({error: "neco tam chybi"}));
        } else {
            this.setState(() => ({error: ""}));
            //provede funkci provedSubmitDoStore, ktera je definovana v PridatVysetreniPage a sem je predana jako props, ta pak zavola dispatch na vytvoreni action objektu(pres funkci v actions a pak do reduceru)
            this.props.provedSubmitDoStore({
                nazev: this.state.nazev,
                synonyma: this.state.synonyma,
                kam: this.state.kam,
                kdy: this.state.kdy,
                odber: this.state.odber,
                preanal: this.state.preanal,
                poznamka: this.state.poznamka,
                poznamkaOdd: {[this.props.uzivatel.substring(0, this.props.uzivatel.indexOf("@"))]: this.state.poznamkaOdd},
                labKdoOdesila: this.state.labKdoOdesila,
                labPreanal: this.state.labPreanal,
                labPoznamka: this.state.labPoznamka,
                provadiSe: this.state.provadiSe,
                odezvaDo: this.state.odezvaDo,
                metodika: this.state.metodika,
                jednotka: this.state.jednotka,
                odbornost: this.state.odbornost,
                nazevAk: this.state.nazevAk
                
               // upravenoKdy: this.state.upravenoKdy
            });
        }
        console.log(this.state.error);
    };

    render() {
        return (
            <div>
            {this.state.error && <p>error: nazev nebo amount chybi, dopln vole</p>}
                <form onSubmit={this.provedSubmit}>
                    <input
                        type="text"
                        name="nazev"
                        placeholder="Nazev vysetreni"
                        autoFocus
                        value={this.state.nazev}
                        onChange={this.priZmene}
                    />
                    <input
                        type="text"
                        name="synonyma"
                        placeholder="Synonyma"
                        value={this.state.synonyma}
                        onChange={this.priZmene}
                    />
                    <input
                        type="text"
                        name="nazevAk"
                        placeholder="Nazev v Akordu"
                        value={this.state.nazevAk}
                        onChange={this.priZmene}
                    />
                    <input
                        type="text"
                        name="skAk"
                        placeholder="Skupiny v Akordu"
                        value={this.state.skAk}
                        onChange={this.priZmene}
                     />
                    <input
                        type="text"
                        name="kam"
                        placeholder="Kam to jede"
                        value={this.state.kam}
                        onChange={this.priZmene}
                    />
                    <input
                        type="text"
                        name="kdy"
                        placeholder="Kdy jezdi rozvoz"
                        value={this.state.kdy}
                        onChange={this.priZmene}
                     />
                    {/*tady odber*/}
                    <input
                        type="text"
                        name="preanal"
                        placeholder="Preanalyticka faze"
                        value={this.state.preanal}
                        onChange={this.priZmene}
                     />
                     <input
                        type="text"
                        name="poznamka"
                        placeholder="Poznamka obecna"
                        value={this.state.poznamka}
                        onChange={this.priZmene}
                    />
                    <input
                        type="text"
                        name="poznamkaOdd"
                        placeholder="Poznamka od oddeleni"
                        value={this.state.poznamkaOdd}
                        onChange={this.priZmene}
                     />
                     <input
                        type="text"
                        name="labKdoOdesila"
                        placeholder="Kdo odesila z lab"
                        value={this.state.labKdoOdesila}
                        onChange={this.priZmene}
                      />
                      <input
                        type="text"
                        name="labPreanal"
                        placeholder="Preanal pro lab"
                        value={this.state.labPreanal}
                        onChange={this.priZmene}
                     />
                     <input
                        type="text"
                        name="provadiSe"
                        placeholder="Kdy se provadi"
                        value={this.state.provadiSe}
                        onChange={this.priZmene}
                    />
                    <input
                        type="text"
                        name="odezvaDo"
                        placeholder="Odezva"
                        value={this.state.odezvaDo}
                        onChange={this.priZmene}
                    />
                    <input
                        type="text"
                        name="metodika"
                        placeholder="Metodika"
                        value={this.state.metodika}
                        onChange={this.priZmene}
                     />
                     <input
                        type="text"
                        name="jednotka"
                        placeholder="Jednotka"
                        value={this.state.jednotka}
                        onChange={this.priZmene}
                     />
                     <input
                     type="text"
                     name="odbornost"
                     placeholder="Odbornost"
                     value={this.state.odbornost}
                     onChange={this.priZmene}
                 />


                    <button>PRIDEJ DO DB</button>

                </form>
            </div>
        )
    }


}
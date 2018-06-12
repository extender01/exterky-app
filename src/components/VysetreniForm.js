import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";


export default class VysetreniForm extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
       //pokud v props prichazi vysetreniProEditaci (posila komponenta EditovatVysetreni), tak vypln state a tedy i formular jejimi udaji, kdyz ne tak to nechej prazdne
        nazev: props.vysetreniProEditaci ? props.vysetreniProEditaci.nazev : "",
        kam: props.vysetreniProEditaci ? props.vysetreniProEditaci.kam : "",
        poznamka: "",
        poznamkaOdd: "",
        odber: [],
        preanal: "",
        error: "",
       // upravenoKdy: props.vysetreniProEditaci ? props.vysetreniProEditaci.upravenoKdy : moment(),
        
        
    };

    };
    
   

    priZmeneNazev = (e) => {
        const nazev = e.target.value;
        this.setState(() => ({nazev: nazev}));
    };

    priZmeneKam = (e) => {
        const kam = e.target.value;
        this.setState(() => ({kam: kam}))
    };





    provedSubmit = (e) => {
        e.preventDefault();

        if(!this.state.nazev || !this.state.kam) {
                                //stejne jako return {error: ""}
            this.setState(() => ({error: "neco tam chybi"}));
        } else {
            this.setState(() => ({error: ""}));
            //provede funkci provedSubmitDoStore, ktera je definovana v PridatVysetreniPage a sem je predana jako props, ta pak zavola dispatch na vytvoreni action objektu(pres funkci v actions a pak do reduceru)
            this.props.provedSubmitDoStore({
                nazev: this.state.nazev,
                kam: this.state.kam,
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
                        placeholder="Nazev vysetreni"
                        autoFocus
                        value={this.state.nazev}
                        onChange={this.priZmeneNazev}
                    />
                    <input
                        type="text"
                        placeholder="Kam to jede"
                        value={this.state.kam}
                        onChange={this.priZmeneKam}
                    />
                    <button>PRIDEJ DO DB</button>

                </form>
            </div>
        )
    }


}
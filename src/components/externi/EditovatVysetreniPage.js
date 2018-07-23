import React from "react";
import  { connect } from "react-redux";
import VysetreniForm from "./VysetreniForm";
import { startEditovatVysetreni, startOdstranitVysetreni } from "../../actions/vysetreniActions";


export class EditovatVysetreniPage extends React.Component {
    priEditaci = (objektUdajuZFormulare) => {
        this.props.startEditovatVysetreni(this.props.vybraneVysetreni.id, objektUdajuZFormulare);
        this.props.history.push("/");
    };


    priOdstraneni = () => {
        this.props.startOdstranitVysetreni(this.props.vybraneVysetreni.id);
        this.props.history.push("/");
    };


    render() {
        return (
            <div>
            <p>Edituj lab vysetreni s id:  {this.props.vybraneVysetreni.id} a nazvem: {this.props.vybraneVysetreni.nazev} </p>
        
                <VysetreniForm 
                    vysetreniProEditaci={this.props.vybraneVysetreni}
                    provedSubmitDoStore={this.priEditaci}
                    uzivatel={this.props.uzivatel}
                />
                <button onClick={this.priOdstraneni}
                >ODstranit</button>
            </div>
        );
    };


};




const mapStateToProps = (state,props) => {
    // do props pridame jeden objekt z array vysetreni, ktery odpovida id z props.match.params.id(tedy to vysetreni na ktere jsme kliknuli)
    //takze jsme to konkretni vysetreni vytahli z redux store jako vybraneVysetreni a do VysetreniForm ho posleme v props pod jmenem vysetreniProEditaci
    return {
        vybraneVysetreni: state.vysetreni.find((polozka) => polozka.id === props.match.params.id),
        uzivatel: state.auth.uid
        };
};


const mapDispatchToProps = (dispatch) => ({
    startEditovatVysetreni: (idGen, vysetreniGen) => dispatch(startEditovatVysetreni(idGen, vysetreniGen)),
    startOdstranitVysetreni: (objektsIdPropertyGen) => dispatch(startOdstranitVysetreni(objektsIdPropertyGen))
});


//mapStateToProps NASBIRA POTREBNE INFROMACE Z REDUX STORE (STATE OBJEKT) A VLOZI JE DO PROPS OBJEKTU POUZITELNEHO V KOMPONENTE
//DRUHY ARGUMENT PROPS JE UZ EXISTUJICI OBJEKT PROPS, KE KTEREMU JEN NECO PRIDAME (TADY UZ JE V PROPS INFORMACE O ID Z PROPS.MATCH.PARAMS.ID A MY K TOMU OBJEKTU PROPS PRIDAME DALSI INFORMACE Z REDUX STORE)
export default connect(mapStateToProps, mapDispatchToProps)(EditovatVysetreniPage);
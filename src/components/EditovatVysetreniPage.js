import React from "react";
import  { connect } from "react-redux";
import VysetreniForm from "./VysetreniForm";
import { editovatVysetreni, odstranitVysetreni } from "../actions/vysetreniActions";


export class EditovatVysetreniPage extends React.Component {
    priEditaci = (objektUdajuZFormulare) => {
        this.props.editovatVysetreni(this.props.vybraneVysetreni.id, objektUdajuZFormulare);
        this.props.history.push("/");
    };


    priOdstraneni = () => {
        this.props.odstranitVysetreni(this.props.vybraneVysetreni.id);
        this.props.history.push("/");
    };


    render() {
        return (
            <div>
            Edituj lab vysetreni s id:  {this.props.vybraneVysetreni.id}
        
                <VysetreniForm 
                    vysetreniProEditaci={this.props.vybraneVysetreni}
                    provedSubmitDoStore={this.priEditaci}
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
        vybraneVysetreni: state.vysetreni.find((polozka) => polozka.id === props.match.params.id)
        };
    };


const mapDispatchToProps = (dispatch) => ({
    editovatVysetreni: (idGen, vysetreniGen) => dispatch(editovatVysetreni(idGen, vysetreniGen)),
    odstranitVysetreni: (objektsIdPropertyGen) => dispatch(odstranitVysetreni(objektsIdPropertyGen))
});


//mapStateToProps NASBIRA POTREBNE INFROMACE Z REDUX STORE (STATE OBJEKT) A VLOZI JE DO PROPS OBJEKTU POUZITELNEHO V KOMPONENTE
//DRUHY ARGUMENT PROPS JE UZ EXISTUJICI OBJEKT PROPS, KE KTEREMU JEN NECO PRIDAME (TADY UZ JE V PROPS INFORMACE O ID Z PROPS.MATCH.PARAMS.ID A MY K TOMU OBJEKTU PROPS PRIDAME DALSI INFORMACE Z REDUX STORE)
export default connect(mapStateToProps, mapDispatchToProps)(EditovatVysetreniPage);
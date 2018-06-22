import React from "react";
import VysetreniForm from "./VysetreniForm";
import { connect } from "react-redux";
import { startPridatVysetreni } from "../actions/vysetreniActions";


export class PridatVysetreniPage extends React.Component {

    //ve VysetreniForm se pres props zavola fce provedSubmitDoStore, ta je tady definovana prave jako props pro VysetreniForm...
    //..a rika, ze se pri jejim volani ma provest fce pridatVysetreniPakPresmerovat, v te jsou volany dalsi dve fce: ...
    //.. provedDispatchPridatVysetreni, ta je definovana v mapDispatchToProps a definuje jaky dispatch se ma provest (jaky action objekt ma jit do reduceru)

    pridatVysetreniPakPresmerovat = (objektUdajuZFormulare) => {
        this.props.provedDispatchPridatVysetreni(objektUdajuZFormulare);
        this.props.history.push("/");
    }


    render() {
        return (
        <div>
        <h1>Pridej vysetreni</h1>
        <VysetreniForm 


            provedSubmitDoStore={this.pridatVysetreniPakPresmerovat}
            uzivatel={this.props.uzivatel}
        />
        </div>
        );
    };
};
   
const mapDispatchToProps = (dispatch) => {
    return {
        provedDispatchPridatVysetreni: (objektUdajuZFormulare) => dispatch(startPridatVysetreni(objektUdajuZFormulare))
    };
};

const mapStateToProps = (state) => {
    return {
        uzivatel: state.auth.uid
    };
};
   




export default connect(mapStateToProps, mapDispatchToProps)(PridatVysetreniPage);
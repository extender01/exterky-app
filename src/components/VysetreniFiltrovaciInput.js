import React from "react";
import { connect } from "react-redux";
import { filtrovatText, serazeni } from "../actions/filtryActions";

export class VysetreniFiltrovaciInput extends React.Component {

    priZmeneRazeni = (e) =>{
        if (e.target.value === "a") {
             this.props.serazeni("a");
        } else if (e.target.value === "z"){
             this.props.serazeni("z");
        } else if (e.target.value === "nejnovejsi") {
             this.props.serazeni("nejnovejsi");
        } else if (e.target.value === "nejstarsi") {
             this.props.serazeni("nejstarsi");
        }
     };

     priFiltrovani = (e) => {
        this.props.filtrovatText(e.target.value);
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.filtry.text} onChange={this.priFiltrovani} />
        
                
                <select 
                    value={this.props.filtry.razeni}
                    onChange={this.priZmeneRazeni}    
                >
                    <option value="a">Od A</option>
                    <option value="z">Od Z</option>
                    <option value="nejnovejsi">Nejnovejsi</option>
                    <option value="nejstarsi">Nejstarsi</option>
                </select>
            </div>
        );
    };

}





const mapStateToProps = (state) => ({
    filtry: state.filtry
});
        
    


const mapDispatchToProps = (dispatch) => ({
    serazeni: (razeniStringGen) => dispatch(serazeni(razeniStringGen)),
    filtrovatText: (filtrovaciStringGen) => dispatch(filtrovatText(filtrovaciStringGen))
});

export default connect(mapStateToProps, mapDispatchToProps)(VysetreniFiltrovaciInput);
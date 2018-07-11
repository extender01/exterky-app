import React from "react";
import  { connect } from "react-redux";
import { startPridatPoznamkuOdd } from "../../../actions/vysetreniActions";



export class PoznamkaOdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPozOddFormVisible: false,   //viditelnost formulare k poznamce
            isPozOddVisible: true,        //viditelnost samotne poznamky
            poznOdd: this.existujePoznOdd() ? this.props.vv.poznamkaOdd[this.props.whoLogged] : ""
            
          };
    }

    


     //kontrola jestli neco existuje v poznamce od oddeleni, kdyz jo tak dole v JSX se to ternary operatorem evaluuje jestli je to od soucasne prihlaseneho uzivatele
    existujePoznOdd = () => {
        const tempObj = this.props.vv;
        
         if  (tempObj.hasOwnProperty("poznamkaOdd")) {
            //console.log("true")
            return true
        } else {
        //console.log("false")
        return false
        };
    };

    toggleFormular = (e) => {
        e.preventDefault();
        this.setState(() => ({
          isPozOddFormVisible: !this.state.isPozOddFormVisible,
          isPozOddVisible: !this.state.isPozOddVisible
        }));
    };
  
    priZmene = (e) => {
      const poznOdd = e.target.value;
      this.setState(() => ({
        poznOdd
      }));
      
    };
  
    provedSubmit = (e) => {
      e.preventDefault();
      console.log("proveden submit");
      this.props.provedDispatchPridatPoznamkuOdd(this.props.vv.id, {...this.props.prevPoznOdd, [this.props.whoLogged]: this.state.poznOdd});
      this.toggleFormular(e);
      //this.props.history.push("/");
      
            
    };
  


    render() {

         const {isPozOddFormVisible, isPozOddVisible} = this.state; //zas abysme nemuseli psat this.state.isPozOddVisible


        return (
            <div className={this.props.classNames}>
                <h4>POZNÁMKA ODDĚLENÍ {this.props.whoLogged.toUpperCase()} <span id="pridatPozOdd" onClick={this.toggleFormular}>+</span></h4>
                
                
                <div className={isPozOddFormVisible ? "ale-je" : "neni-videt"}>
                    <form onSubmit={this.provedSubmit} className="g1">
                        <textarea className="g1" rows="4" onChange={this.priZmene} value={this.existujePoznOdd() ? this.state.poznOdd : undefined} />
                        <button className="tlacitko">{this.props.prevPoznOdd[this.props.whoLogged] ? "Upravit" : "Pridat"}</button>
                    </form>   
                </div>
                <div  className={isPozOddVisible ? "ale-je" : "neni-videt"}>
                    {this.existujePoznOdd() ? <p> {this.state.poznOdd}</p> : <p>neni tam</p>}
                </div>

            </div>
        )
    }

}


//pro zprehledneni mapStateToProps, funkce vezme vysetreni z redux state (coz je array s objekty o vysetrenich) a vrati objekt jednoho konkretniho vysetreni, ktere je prave otevrene v komponente Detail...
const najdiVysetreniVeReduxPodleId = (state, props) => {
    return state.vysetreni.find((polozka) => polozka.id === props.vysID)
  };


const mapStateToProps = (state,props) => {

    return {
        vv: najdiVysetreniVeReduxPodleId(state, props), //vv= vybrane vysetreni, prohleda array vysetreni, kde jsou vsechny objekty a vrati ten objekt, ktery odpovida podle id
        prevPoznOdd:  najdiVysetreniVeReduxPodleId(state, props).poznamkaOdd //najde objekt v array podle id a jen jeho poznamkuOdd, stejne jako vysetreni[x].poznamkaOdd


    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        provedDispatchPridatPoznamkuOdd: (id, poznamkaObjekt) => dispatch(startPridatPoznamkuOdd(id, poznamkaObjekt))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PoznamkaOdd);




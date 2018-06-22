import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";



//ZKOUSKA JESTLI SE TO RERENDERUJE KDYZ TO BUDE V DCERINE KOMPONENTE (MUSI SE VYRESIT MATCH.PARAMS)


export const TestPage = (props) => (
    <div className="content-container">
        <div className="page-header">
        
        <div className="box grow1 yel">
        <h4>POZNÁMKA ODDĚLENÍ {this.login.toUpperCase()} <span id="pridatPozOdd" onClick={this.toggleFormular}>+</span></h4>
        <div className={isPozOddVisible ? "neni-videt ale-je" : "neni-videt"}>
          <form onSubmit={this.provedSubmit}>
            <input type="text" onChange={this.priZmene} />
            <button>Pridat</button>
          </form>
        </div>
                                          
       {this.existujePoznOdd() ? <p> {vv.poznamkaOdd[this.login]}</p> : <p>neni tam</p>}
         </div>

        </div>
        
        
        
        
    </div>
);


const mapStateToProps = (state,props) => {
    // do props pridame jeden objekt z array vysetreni, ktery odpovida id z props.match.params.id(tedy to vysetreni na ktere jsme kliknuli)
    //takze jsme to konkretni vysetreni vytahli z redux store jako vybraneVysetreni a do VysetreniForm ho posleme v props pod jmenem vysetreniProEditaci
    return {
        vv: state.vysetreni.find((polozka) => polozka.id === props.match.params.id), //vv= vybrane vysetreni
        uzivatel: state.auth.uid,
        poznPresProps: state.vysetreni.poznamkaOdd
        };
};

const mapDispatchToProps = (dispatch) => {
  return {
    provedDispatchPridatPoznamkuOdd: (id, poznamkaObjekt) => dispatch(startPridatPoznamkuOdd(id, poznamkaObjekt))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
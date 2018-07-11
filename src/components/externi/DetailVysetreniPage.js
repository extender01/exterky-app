import React from "react";
import  { connect } from "react-redux";
import { startPridatPoznamkuOdd } from "../../actions/vysetreniActions";
import { Nazev } from "./details/Nazev";
import PoznOdd from "./details/PoznamkaOdd";
import { Synonyma } from "./details/Synonyma";
import { NazevAk } from "./details/NazevAk";
import { SkupinyAk } from "./details/SkupinyAk";
import { Kam } from "./details/Kam";
import { Kdy } from "./details/Kdy";
import { Odber } from "./details/Odber";
import { Preanal } from "./details/Preanal";
import { Poznamka } from "./details/Poznamka";
import { KdoPosila } from "./details/KdoPosila";
import { PoznamkaLab } from "./details/PoznamkaLab";
import { ProvadiSe } from "./details/ProvadiSe";
import { Odezva } from "./details/Odezva";
import { Metodika } from "./details/Metodika";
import { Jednotka } from "./details/Jednotka";
import { Odbornost } from "./details/Odbornost";










export class DetailVysetreniPage extends React.Component {


  constructor(props) {
    super(props);
   
  };

  
  whoLogged = () => {
    if (this.props.uzivatel) {
        return this.props.uzivatel.substring(0, this.props.uzivatel.indexOf("@"));
    } else {
        return undefined;
    }
};


  render() {
    console.log("login je: ", this.whoLogged());
    const {vv} = this.props;  //desctructuring, abychom nemuseli vsude psat this.props.vv ...
   
    return (
      <div className="hlavni">

      <div className="flex-container">
        <Nazev nazev={vv.nazev} classNames="box barvaNazev g1"/>
        <Synonyma synonyma={vv.synonyma} classNames="box barvaSynonyma g2"/>
      </div>

      <div className="flex-container">
        <NazevAk nazevAk={vv.nazevAk} classNames="box barvaNazevAk g1" />
        <SkupinyAk skupinyAk={vv.skAk} classNames="box barvaSkupinyAk g1" />
      </div>

      <div className="flex-container">
        <Kam kam={vv.kam} classNames="box barvaKam g1" /> 
        <Kdy kam={vv.kam} classNames="box barvaKdy g2" />
      </div>

      <div className="flex-container">
        <Odber odber={vv.odber} odberSpec={vv.odberSpec} classNames="box barvaOdber g1" />
      </div>

      <div className="flex-container">
        <Preanal preanal={vv.preanal} classNames="box barvaPreanal g1" />
      </div>

      <div className="flex-container">
        <Poznamka poznamka={vv.poznamka} classNames="box barvaPoznamka g1" />
        {this.whoLogged() && <PoznOdd vysID={this.props.match.params.id} whoLogged={this.whoLogged()} classNames="box barvaPoznamkaOdd g1" />}
        
      </div>
      
      {this.whoLogged()==="lab" && 
        <div className="flex-container">
          <KdoPosila kdoPosila={vv.labKdoOdesila} classNames="box barvaKdoPosila g1" />
          <PoznamkaLab labPoznamka={vv.labPoznamka} classNames="box barvaPoznamkaLab g1" />
        </div> 
      }
      
      
      <div className="flex-container">
        <ProvadiSe provadiSe={vv.provadiSe} classNames="box barvaProvadiSe g1" />
        <Odezva odezva={vv.odezvaDo} classNames="box barvaOdezva g1" />
        <Metodika metodika={vv.metodika} classNames="box barvaMetodika g1" />
        <Jednotka jednotka={vv.jednotka} classNames="box barvaJednotka g1" />
        <Odbornost odbornost={vv.odbornost} classNames="box barvaOdbornost g1" />
      </div>
      
    
    </div>
    
    )
  };

   
};

//pro zprehledneni mapStateToProps, funkce vezme vysetreni z redux state (coz je array s objekty o vysetrenich) a vrati objekt jednoho konkretniho vysetreni, ktere je prave otevrene v komponente Detail...
const najdiVysetreniVeReduxPodleId = (state, props) => {
  return state.vysetreni.find((polozka) => polozka.id === props.match.params.id)
};

const mapStateToProps = (state,props) => {

    // do props pridame jeden objekt z array vysetreni, ktery odpovida id z props.match.params.id(tedy to vysetreni na ktere jsme kliknuli)
    return {
        vv: najdiVysetreniVeReduxPodleId(state, props), //vv= vybrane vysetreni, prohleda array vysetreni, kde jsou vsechny objekty a vrati ten objekt, ktery odpovida podle id
        uzivatel: state.auth.uid,
        };
};



export default connect(mapStateToProps)(DetailVysetreniPage);
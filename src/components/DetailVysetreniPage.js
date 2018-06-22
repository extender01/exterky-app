import React from "react";
import  { connect } from "react-redux";
import { startPridatPoznamkuOdd } from "../actions/vysetreniActions";
import TestPage from "./TestPage";







                        //destructured props
export class DetailVysetreniPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isPozOddFormVisible: false,   //viditelnost formulare k poznamce
      isPozOddVisible: true,        //viditelnost samotne poznamky
      poznOdd: this.existujePoznOdd() ? this.props.vv.poznamkaOdd[this.login] : ""
      
    };
  };

  login = this.props.uzivatel.substring(0, this.props.uzivatel.indexOf("@")); // cast stringu uzivatele pred @sno.cz


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
    this.props.provedDispatchPridatPoznamkuOdd(this.props.vv.id, {...this.props.prevPoznOdd, [this.login]: this.state.poznOdd});
    this.toggleFormular(e);
    //this.props.history.push("/");
    
          
  };

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

   kdyJezdi = () => {
    console.log("ma to byt krnov");
    switch (this.props.vv.kam) {
       case "Krnov":
       console.log("je to krnov");
        return (<p>casy od krnova</p>)
     };
   };



   
  
   typyOdberu = {
     sg: "Srazliva krev s gelem",
     se: "Srazliva krev bez gelu",
     pli: "Nesrazliva s Li heparinem",
     nespec: "oddelovaci",
     specialni: "...ahoj"

     //dopsat Object.keys a z jeho array vytahnout specialni, kde to bude primo napsane
   };


   
   coZaOdber = () => {
  
   
    

    
    let odberPole = this.props.vv.odber.split(", ");
    console.log(odberPole);
   
   

      return (
        odberPole.map((item, index) => {
              return <div key={index} className="blok"><div className={`obrazek ${item}`}></div><p>{this.typyOdberu[item]}</p></div>;
        }))


      
    };

  

  render() {

    const {vv, uzivatel} = this.props;  //desctructuring, abychom nemuseli vsude psat this.props.vv ...
    const {isPozOddFormVisible, isPozOddVisible} = this.state; //zas abysme nemuseli psat this.state.isPozOddVisible
    
    
   

    return (
      <div className="hlavni">
      <div className="flex-container">
          <div className="box grow1 blue">
            <h4>NÁZEV</h4>
            <p>{vv.nazev}</p>
          </div>
          <div className="box  grow2 blue">
            <h4>SYNONYMA</h4>
            <p>{vv.synonyma}</p>
          </div>
      </div>
      <div className="flex-container">
          <div className="box grow1 blue">
            <h4>NÁZEV V AKORDU</h4>
            <p>{vv.nazevAk}</p>
          </div>
          <div className="box  grow2 blue">
            <h4>SKUPINY V AKORDU</h4>
            <p>{vv.skAk}</p>
          </div>
      </div>
      <div className="flex-container">
        <div className="box grow1 vio">
          <h4>KAM TO JEDE</h4>
          <p>{vv.kam}</p>
        </div>
        <div className="box grow2 vio">
          <h4>KDY JEZDÍ</h4>
          {this.kdyJezdi()}
        </div>
      </div>
      <div className="flex-container">
        <div className="box grow1 yel">
          <h4>ODBĚR</h4>
          <div className="lajna">

           {/*} <div className="blok">
              <div className="obrazek serum"></div>
              <p>Srazliva krev s gelem</p>
            </div>
            <div className="blok">
              <div className="obrazek serum2"></div>
              <p>Srazliva krev bez gelu</p>
            </div>
            <div className="blok">
              <div className="obrazek plasma"></div>
              <p>Li heparin nesrazliva</p>
             </div> */}
            {this.coZaOdber(this.props.vv.odber)}
            
          </div>
          
        </div>
        <div className="box grow2 yel">
          <h4>PREANALYTICKÁ FÁZE</h4>
          <p>{vv.preanal}</p>
        </div>
      </div>
      <div className="flex-container">
        <div className="box grow1 yel">
          <h4>POZNÁMKA OBECNÁ</h4>
          <p>{vv.poznamka}</p>
        </div>
        <div className="box grow1 yel">
          <h4>POZNÁMKA ODDĚLENÍ {this.login.toUpperCase()} <span id="pridatPozOdd" onClick={this.toggleFormular}>+</span></h4>
          <div className={isPozOddFormVisible ? "neni-videt ale-je" : "neni-videt"}>
            <form onSubmit={this.provedSubmit}>
              <textarea rows="4" onChange={this.priZmene} value={this.existujePoznOdd() ? this.state.poznOdd : undefined} />
              <button>Pridat</button>
            </form>
          </div>
          
          <div  className={isPozOddVisible ? undefined : "neviditelny"}>
            {this.existujePoznOdd() ? <p> {this.state.poznOdd}</p> : <p>neni tam</p>}
          </div>
        </div>
        
      </div>
      <div className="flex-container">
        <div className="box grow1 yel">
          <h4>KDO PŘIPRAVUJE</h4>
          <p>BIO</p>
        </div>
        <div className="box grow3 yel">
          <h4>POZNÁMKA LABORATOŘE</h4>
          <p>{vv.labInfo}</p>
        </div>
      
      </div>
      
      <div className="flex-container">
        <div className="box grow1 posledni green">
          <h4>PROVÁDÍ SE</h4>
          <p>{vv.provadiSe}</p>
        </div>
        <div className="box grow1 posledni green">
          <h4>ODEZVA</h4>
          <p>{vv.odezvaDo}</p>
        </div>
        <div className="box grow1 posledni green">
          <h4>METODIKA</h4>
          <p>{vv.metodika}</p>
        </div>
        <div className="box grow1 posledni green">
          <h4>JEDNOTKA</h4>
          <p>{vv.jednotka}</p>
        </div>
        <div className="box grow1 posledni green">
          <h4>ODBORNOST</h4>
          <p>{vv.odbornost}</p>
        </div>
        
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
        prevPoznOdd:  najdiVysetreniVeReduxPodleId(state, props).poznamkaOdd //najde objekt v array podle id a jen jeho poznamkuOdd, stejne jako vysetreni[x].poznamkaOdd
        
        };
};

const mapDispatchToProps = (dispatch) => {
  return {
    provedDispatchPridatPoznamkuOdd: (id, poznamkaObjekt) => dispatch(startPridatPoznamkuOdd(id, poznamkaObjekt))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailVysetreniPage);
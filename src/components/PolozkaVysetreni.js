import React from "react";
import { connect } from "react-redux";
import { odstranitVysetreni } from "../actions/vysetreniActions";
import { Link } from "react-router-dom";

const PolozkaVysetreni = (props) => (
    <div className="flex-container seznam-lajna">
        <div className="box grow1 grey">
            <Link  className="polozka"  to={"/detail/" + props.id}>   
                <p className={(props.textovyFiltr && props.nazev.toLowerCase().includes(props.textovyFiltr.toLowerCase())) ? "cssTest" : undefined}>{props.nazev}</p> {/*jestli je neco napsane v hledani a jestli to odpovida nejake polozce tak se prida css trida*/}
            </Link> 
        </div>
       
        <div className="box grow1 grey">
        <p className={(props.textovyFiltr && props.synonyma.toLowerCase().includes(props.textovyFiltr.toLowerCase())) ? "cssTest" : undefined}>{props.synonyma}</p>
        </div>
        
        <div className="box grow1 grey">
            <Link className="grey" to={"/edit/" + props.id}><p>{props.kam}</p></Link>
        </div>

       
    </div>
        
);

export default PolozkaVysetreni;


// <p>===========================</p>
//         <Link to={"/edit/" + props.id} ><h3>{props.nazev}</h3> </Link>

//         <p>{props.kam} / {props.odber}</p>



//<Link to={"/edit/" + props.id}><p>{props.nazev}</p></Link>

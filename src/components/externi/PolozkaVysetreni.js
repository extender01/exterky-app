import React from "react";
import { connect } from "react-redux";
import { odstranitVysetreni } from "../../actions/vysetreniActions";
import { Link } from "react-router-dom";

const PolozkaVysetreni = (props) => (
    <div className="seznam-vysetreni__line">
        <div className="seznam-vysetreni__square g2">
            <Link  className="polozka"  to={"/detail/" + props.id}>   
                <p className={(props.textovyFiltr && props.nazev.toLowerCase().includes(props.textovyFiltr.toLowerCase())) ? "cssTest" : undefined}>{props.nazev}</p> {/*jestli je neco napsane v hledani a jestli to odpovida nejake polozce tak se prida css trida*/}
            </Link> 
        </div>
       
        <div className="seznam-vysetreni__square g3">
        <p className={(props.textovyFiltr && props.synonyma.toLowerCase().includes(props.textovyFiltr.toLowerCase())) ? "cssTest" : undefined}>{props.synonyma}</p>
        </div>
        
        <div className="seznam-vysetreni__square g1">
            <Link className="grey" to={"/edit/" + props.id}><p>{props.kam}</p></Link>
        </div>

       
    </div>
        
);

export default PolozkaVysetreni;


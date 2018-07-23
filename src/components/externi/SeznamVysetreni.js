import React from "react";
import { connect } from "react-redux";
import PolozkaVysetreni from "./PolozkaVysetreni";
import filtrovaneVysetreni from "../../selectors/vysetreniSelector";

import ReactTable from "react-table";
import 'react-table/react-table.css';



let dataProTabulku = []

export const SeznamVysetreni = (props) => (
    <div className="content-container">
        <div className="seznam-vysetreni">
        
            <h1 className="seznam-vysetreni__title">Seznam metod odesílaných do externích laboratoři</h1>
            
            <div className="seznam-vysetreni__line">
            <div className="seznam-vysetreni__square gf2">
                 <p>NÁZEV</p>
            </div>

            <div className="seznam-vysetreni__square gf3">
                 <p>SYNONYMA</p>
            </div>

            <div className="seznam-vysetreni__square gf1">
                 <p>KAM TO JEDE</p>
            </div>


            </div>   
                {
                    props.vysetreni.length === 0 ? (
                        <p>Seznam je prazdny</p>
                    ) : 
                    
                    (
                    
                    
                        
                        props.vysetreni.map((item) => {
                            
                            dataProTabulku.push(item);
                            //console.log(dataProTabulku);
                            return <PolozkaVysetreni key={item.id} {...item} textovyFiltr={props.textovyFiltr} />
                        })     
                    )
                }

        </div>
        
        
        
        
    </div>
);





const mapStateToProps = (state) => {
    return {
        //ze state vytahneme aktualni array vysetreni a aktualni filtry a prozenem je fci filtrovane vysetreni, ktera vrati array objektu s info o vysetrenich. tenhle array objektu ulozime do property vysetreni a ta bude pristupna v props objektu v komponente
        vysetreni: filtrovaneVysetreni(state.vysetreni, state.filtry),
        textovyFiltr: state.filtry.text
    };
};

export default connect(mapStateToProps)(SeznamVysetreni);



import React from "react";
import { connect } from "react-redux";
import PolozkaVysetreni from "./PolozkaVysetreni";
import filtrovaneVysetreni from "../selectors/vysetreniSelector";

export const SeznamVysetreni = (props) => (
    <div>
    <h1>Velky seznam vysetreni</h1>
    {
        props.vysetreni.length === 0 ? (
            <p>Seznam je prazdny</p>
        ) : (
            props.vysetreni.map((item) => {
                return <PolozkaVysetreni key={item.id} {...item} />
            })     
        )
    }
    
    </div>
);

const mapStateToProps = (state) => {
    return {
        //ze state vytahneme aktualni array vysetreni a aktualni filtry a prozenem je fci filtrovane vysetreni, ktera vrati array objektu s info o vysetrenich. tenhle array objektu ulozime do property vysetreni a ta bude pristupna v props objektu v komponente
        vysetreni: filtrovaneVysetreni(state.vysetreni, state.filtry)
    };
};

export default connect(mapStateToProps)(SeznamVysetreni);


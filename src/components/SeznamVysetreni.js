import React from "react";
import { connect } from "react-redux";
import PolozkaVysetreni from "./PolozkaVysetreni";
import filtrovaneVysetreni from "../selectors/vysetreniSelector";

import ReactTable from "react-table";
import 'react-table/react-table.css';


// const data = [{
//     name: 'Tanner Linsley',
//     age: 26,
//     friend: {
//       name: 'Jason Maurer',
//       age: 23,
// }}]


// const columns = [{
//     Header: 'Nazev',
//     accessor: 'nazev' 
//     },{
//         Header: 'Kam to jede',
//         accessor: 'kam' 
//     }, {
//         Header: 'Synonyma',
//         accessor: 'synonyma'
//     }



// ]

// const columnsDetail =  [{
//     Header: 'Nazev',
//     accessor: 'nazev' 
//     },{
//         Header: 'Kam to jede',
//         accessor: 'kam' 
//     }, {
//         Header: 'Synonyma',
//         accessor: 'synonyma'
//     }

// ]

let dataProTabulku = []

export const SeznamVysetreni = (props) => (
    <div className="content-container">
        <div className="page-header">
        
            <h1 className="page-header__title">Velky seznam vysetreni</h1>
            
            <div className="flex-container seznam-lajna">
            <div className="box grow1 darkgrey">
                 <p>NAZEV</p>
            </div>

            <div className="box grow1 darkgrey">
                 <p>SYNONYMA</p>
            </div>

            <div className="box grow1 darkgrey">
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



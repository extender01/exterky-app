import React from "react";
import { connect } from "react-redux";
import PolozkaVysetreni from "./PolozkaVysetreni";
import filtrovaneVysetreni from "../selectors/vysetreniSelector";

import ReactTable from "react-table";
import 'react-table/react-table.css';


const data = [{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
}}]


const columns = [{
    Header: 'Nazev',
    accessor: 'nazev' 
    },{
        Header: 'Kam to jede',
        accessor: 'kam' 
    }, {
        Header: 'Synonyma',
        accessor: 'synonyma'
    }

]

const columnsDetail =  [{
    Header: 'Nazev',
    accessor: 'nazev' 
    },{
        Header: 'Kam to jede',
        accessor: 'kam' 
    }, {
        Header: 'Synonyma',
        accessor: 'synonyma'
    }

]

let dataProTabulku = []

export const SeznamVysetreni = (props) => (
    <div >
        <h1>Velky seznam vysetreni</h1>

        
        {
            props.vysetreni.length === 0 ? (
                <p>Seznam je prazdny</p>
            ) : (
                props.vysetreni.map((item) => {
                    
                    dataProTabulku.push(item);
                    console.log(dataProTabulku);
                    return <PolozkaVysetreni key={item.id} {...item} />
                })     
            )
        }

 
        
        
        
    </div>
);



// export const SeznamVysetreni = (props) => (
//     <div>
//         <h1>Velky seznam vysetreni</h1>
//         {
//             props.vysetreni.length === 0 ? (
//                 <p>Seznam je prazdny</p>
//             ) : (
//                 props.vysetreni.map((item) => {
                    
//                     dataProTabulku.push(item);
//                     console.log(dataProTabulku);
//                     return <PolozkaVysetreni key={item.id} {...item} />
//                 })     
//             )
//         }

 
        
//         <div>
//         <ReactTable
//         data={dataProTabulku}
//         columns={columns}
//         SubComponent={row => {
//             return (
//               <div>
//                 <ReactTable
//                 data={dataProTabulku}
//                 columns={columnsDetail}
//                 />
//               </div>
              
//             );
//           }}
//       />
//         </div>
        
//     </div>
// );




// export const SeznamVysetreni = (props) => (
//     <div>
//         <h1>Velky seznam vysetreni</h1>
//         {
//             props.vysetreni.length === 0 ? (
//                 <p>Seznam je prazdny</p>
//             ) : (
//                 props.vysetreni.map((item) => {
//                     return <PolozkaVysetreni key={item.id} {...item} />
//                 })     
//             )
//         }

 
        
//        
        
//     </div>
// );

const mapStateToProps = (state) => {
    return {
        //ze state vytahneme aktualni array vysetreni a aktualni filtry a prozenem je fci filtrovane vysetreni, ktera vrati array objektu s info o vysetrenich. tenhle array objektu ulozime do property vysetreni a ta bude pristupna v props objektu v komponente
        vysetreni: filtrovaneVysetreni(state.vysetreni, state.filtry)
    };
};

export default connect(mapStateToProps)(SeznamVysetreni);


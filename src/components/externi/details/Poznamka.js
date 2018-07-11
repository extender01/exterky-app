import React from "react";


export const Poznamka = (props) => (
    <div className={props.classNames}>
         <h4>POZNÁMKA OBECNÁ</h4>
         <p>{props.poznamka}</p>
    </div>
)
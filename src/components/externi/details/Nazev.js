import React from "react";


export const Nazev = (props) => (
    <div className={props.classNames}>
        <h4>NÁZEV</h4>
        <p>{props.nazev}</p>
    </div>
)
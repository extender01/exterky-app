import React from "react";


export const PoznamkaLab = (props) => (
    <div className={props.classNames}>
         <h4>POZNÁMKA LABORATOŘE</h4>
         <p>{props.labPoznamka}</p>
    </div>
)
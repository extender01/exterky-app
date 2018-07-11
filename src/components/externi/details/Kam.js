import React from "react";


export const Kam = (props) => (
    <div className={props.classNames}>
         <h4>KAM TO JEDE</h4>
         <div className="flexi">
         {props.kam==="Krnov" ? <img src="../../../images/krnov.png" /> : undefined}
         {props.kam==="Nový Jičín" ? <img src="../../../images/agel.png" /> : undefined}
         {props.kam==="FN Ostrava" ? <img src="../../../images/fno.png" /> : undefined}

         <p>{props.kam}</p>
         </div>
    </div>
)
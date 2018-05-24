import React from "react";
import { connect } from "react-redux";
import { odstranitVysetreni } from "../actions/vysetreniActions";
import { Link } from "react-router-dom";

const PolozkaVysetreni = (props) => (
    <div>
        <p>===========================</p>
        <Link to={"/edit/" + props.id} ><h3>{props.nazev}</h3> </Link>

        <p>{props.kam} / {props.odber}</p>

        

    </div>
);

export default PolozkaVysetreni;
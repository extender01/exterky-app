import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { odhlasit } from "../actions/authActions";


export const Header = (props) => (
    <header>
        <h1>Externi lab vysetreni</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Domu   </NavLink>
        <NavLink to="/create" activeClassName="is-active">Pridej   </NavLink>
        <NavLink to="/help" activeClassName="is-active">Pomoc   </NavLink>
        <button onClick={props.odhlasit}>Logout</button>
        

    </header>
);

const mapDispatchToProps = (dispatch) => ({
    odhlasit: () => dispatch(odhlasit())
});


export default connect(undefined, mapDispatchToProps)(Header);
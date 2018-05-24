import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => (
    <header>
        <h1>Externi lab vysetreni</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Domu   </NavLink>
        <NavLink to="/create" activeClassName="is-active">Pridej   </NavLink>
        <NavLink to="/help" activeClassName="is-active">Pomoc   </NavLink>
        

    </header>
);

export default Header;
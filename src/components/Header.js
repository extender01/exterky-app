import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startOdhlasit } from "../actions/authActions";


export const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/"><h1>Externí vyšetření</h1></Link>
                <NavLink className="header__link" to="/" activeClassName="is-active" exact={true}>Domu   </NavLink>
                <NavLink className="header__link" to="/create" activeClassName="is-active">Pridej   </NavLink>
                <NavLink className="header__link" to="/help" activeClassName="is-active">Pomoc   </NavLink>
                <div className="dalsiPokusny">
                    <h6>{props.uzivatel}</h6>
                    <button className ="header__button" onClick={props.startOdhlasit}>Logout</button>
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startOdhlasit: () => dispatch(startOdhlasit())
});

const mapStateToProps = (state) => ({
    uzivatel: state.auth.uid
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startOdhlasit, odhlasit } from "../actions/authActions";


export const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/"><h1>CL SNO</h1></Link>
                <NavLink className="header__link" to="/" activeClassName="is-active" exact={true}>Domu   </NavLink>
                <NavLink className="header__link" to="/externi-metody" activeClassName="is-active" exact={true}>Externi   </NavLink>
                <NavLink className="header__link" to="/externi-metody/create" activeClassName="is-active">Pridej   </NavLink>
                
                <div className="header__user">
                    <p>{props.uzivatel}</p>
                   {props.uzivatel ?
                    <button  className ="header__button" onClick={props.odhlas}>LOGOUT</button>
                        :
                    <Link  className ="header__button" to="/login">LOGIN</Link>
                   }
                   
                   
                    
                    
                </div>
                
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    odhlas: () => {
        dispatch(startOdhlasit())
        dispatch(odhlasit())
    }


});

const mapStateToProps = (state) => ({
    uzivatel: state.auth.uid
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);
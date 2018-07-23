import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startOdhlasit, odhlasit } from "../actions/authActions";
import {history} from "../routers/AppRouter";



export const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <div>
                <Link className="header__title" to="/"><h1>CL SNO</h1></Link>
                </div>
                <NavLink className="header__link" to="/" exact={true}>Domu </NavLink>
                <NavLink className="header__link" to="/externi-metody" exact={true}>Externi</NavLink>
              
                {props.uzivatel ===  "lab@sno.cz" ? <NavLink className="header__link" to="/externi-metody/create">Pridej</NavLink> : undefined
                }   
                
                
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
    uzivatel: state.auth.uid,
    currentURL: history.location
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);
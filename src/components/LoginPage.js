import React from "react";
import { connect } from "react-redux";
import { startPrihlasit } from "../actions/authActions";
import {history} from "../routers/AppRouter";


export class LoginPage extends React.Component {

    constructor(props) {
        super(props);
    };

    provedSubmit = (e) => {
        e.preventDefault();
        const login = e.target.children[0].value;
        const password = e.target.children[1].value;
        this.props.startPrihlasit(login, password);
        console.log("v provedSubmit", login, password);
        console.log(history.location.pathname);
        if (history.location.pathname === "/no-access") {
            history.push("/");
        } else {
            history.goBack();
        };
    };
   
   
    render() {

        return (


            <div className="login modalDialog" id="openModal">
            <div>
                <form name="formular" className="login__form" onSubmit={this.provedSubmit}>
                    <input onFocus type="text" placeholder="Uzivatelske jmeno"  className="login__input" name="id" />
                    <input type="password" placeholder="Heslo" className="login__input" name="password" />
                    <button className="login__button" >LOGIN</button>

                </form>
            </div>
            </div>
        )
    }   


}





const mapDispatchToProps = (dispatch) => ({
    startPrihlasit: (login, password) => dispatch(startPrihlasit(login, password)) //provede prihlaseni do firebase
});


export default connect(undefined, mapDispatchToProps)(LoginPage);


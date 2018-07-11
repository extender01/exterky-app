import React from "react";
import { connect } from "react-redux";
import { startPrihlasit } from "../actions/authActions";

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
        
    }
   
   
    render() {

        return (
            <div className="login">
                <form name="formular" className="login__form" onSubmit={this.provedSubmit}>
                    <input type="text" placeholder="Uzivatelske jmeno"  className="login__input" name="id" />
                    <input type="password" placeholder="Heslo" className="login__input" name="password" />
                    <button className="login__button" >LOGIN</button>

                </form>
            
            </div>
        )
    }   


}





const mapDispatchToProps = (dispatch) => ({
    startPrihlasit: (login, password) => dispatch(startPrihlasit(login, password)) //provede prihlaseni do firebase
});


export default connect(undefined, mapDispatchToProps)(LoginPage);


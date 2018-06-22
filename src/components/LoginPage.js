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
            <div>
                <form name="formular" onSubmit={this.provedSubmit}>
                    <input type="text" placeholder="Uzivatelske jmeno" name="id" />
                    <input type="password" placeholder="Heslo" name="password" />
                    <button >LOGIN</button>

                </form>
            
            </div>
        )
    }   


}





const mapDispatchToProps = (dispatch) => ({
    startPrihlasit: (login, password) => dispatch(startPrihlasit(login, password))
});


export default connect(undefined, mapDispatchToProps)(LoginPage);


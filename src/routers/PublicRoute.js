import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

export const PublicRoute = ({
    isAuthenticated, //to same jako isAuthenticated: isAuthenticated
    component: Component,
    ...rest //vse ostatni co dosud neni v destructured podobe (nemusi se jmenovat rest, muze to byt jakkoli)
}) => (
    <Route {...rest} component={(props) => (
        !isAuthenticated ? (
            <Component {...props} />
         ) : (
            <Redirect to="/" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute)
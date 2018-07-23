import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import VysetreniDashboardPage from "../components/externi/VysetreniDashboardPage";
import PridatVysetreniPage from "../components/externi/PridatVysetreniPage";
import EditovatVysetreniPage from "../components/externi/EditovatVysetreniPage";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";
import DetailVysetreniPage from "../components/externi/DetailVysetreniPage";
import NoAccess from "../components/NoAccess";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";


//abychom mohli k history pristupovat nejen z komponent, kde to zarizuje react-router, tak si udelame vlastni history z modulu history, ktera jde pouzit vsude
export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={HomePage}  exact={true}/>
            <Route path="/externi-metody" component={VysetreniDashboardPage} exact={true}/>
            <Route path="/externi-metody/detail/:id" component={DetailVysetreniPage} />
            <PrivateRoute path="/externi-metody/create" component={PridatVysetreniPage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/externi-metody/edit/:id" component={EditovatVysetreniPage} />
            <Route path="/no-access" component={NoAccess} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
</Router>
);

export default AppRouter;
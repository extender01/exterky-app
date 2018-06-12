import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import VysetreniDashboardPage from "../components/VysetreniDashboardPage";
import PridatVysetreniPage from "../components/PridatVysetreniPage";
import EditovatVysetreniPage from "../components/EditovatVysetreniPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";


//abychom mohli k history pristupovat nejen z komponent, kde to zarizuje react-router, tak si udelame vlastni history z modulu history, ktera jde pouzit vsude
export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={VysetreniDashboardPage} exact={true} />
            <Route path="/create" component={PridatVysetreniPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/edit/:id" component={EditovatVysetreniPage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
</Router>
);

export default AppRouter;
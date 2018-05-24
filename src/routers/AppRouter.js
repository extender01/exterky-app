import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import VysetreniDashboardPage from "../components/VysetreniDashboardPage";
import PridatVysetreniPage from "../components/PridatVysetreniPage";
import EditovatVysetreniPage from "../components/EditovatVysetreniPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";




const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={VysetreniDashboardPage} exact={true} />
            <Route path="/create" component={PridatVysetreniPage} />
            <Route path="/edit/:id" component={EditovatVysetreniPage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;
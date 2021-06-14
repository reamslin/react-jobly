import React from "react";
import Home from "./Home";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobsList from "./JobsList";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";

import { Route, Switch } from "react-router-dom";

function Router() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/companies">
                    <CompanyList />
                </Route>
                <Route path="/companies/:handle">
                    <CompanyDetail />
                </Route>
                <Route exact path="/jobs">
                    <JobsList />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
            </Switch>

        </div>
    )
}

export default Router;
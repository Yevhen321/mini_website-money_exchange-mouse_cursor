import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Blog from "../pages/Blog";
import Header from "../components/Header";
import Figure from "../pages/Figure";
import Convert from "../pages/Convert";

const MainRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/figure">
                    <Figure />
                </Route>
                <Route path="/convert">
                    <Convert />
                </Route>
                <Route path="/blog">
                    <Blog/>
                </Route>
            </Switch>
        </Router>
    )
}

export default MainRouter;
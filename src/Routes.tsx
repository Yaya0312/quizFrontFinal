import Home from "./pages/Home";
import {Route, Switch} from "react-router-dom";
import React from "react";
import EditQuiz from "./pages/EditQuiz";
import Play from "./pages/Play";
import AddQuiz from "./pages/AddQuiz";

export default function Routes() {
    return (
        <Switch>
            <Route path="/edit/:id" component={EditQuiz} exact />
            <Route path="/create" component={AddQuiz} exact/>
            <Route path="/play/:id" component={Play}  exact />
            <Route path="/" component={Home} />
        </Switch>
    )
}
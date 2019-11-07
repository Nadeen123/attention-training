import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import QuizInstructions from "./QuizInstructions";
import Quiz from "./QuizPage";
import Dashboard from "./Dashboard";
import Result from "./Results";
import Skills from "./Skills";
import IndividualSkill from "./IndividualSkill";
import AboutUs from "./AboutUs";
import NotFound from "../components/404NotFound";
import BasicInformation from "./BasicInformation";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz-instructions" component={QuizInstructions} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/skills/:id" component={IndividualSkill} />
        <Route exact path="/basic-info" component={BasicInformation} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;

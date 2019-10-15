import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import CircleProgressBar from "./sharedComponent/CircleProgressBar"
import QuizInstructions from "./QuizInstructions"
import Quiz from "./QuizPage"
import Dashboard from "./Dashboard"
import Results from "./Results"
import Skills from "./Skills"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz-instructions" component={QuizInstructions} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/results/:id" component={Results} />
      </Switch>
    </Router>
  )
}

export default Routes

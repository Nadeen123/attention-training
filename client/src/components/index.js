import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import ProgressBar from "./sharedComponent/ProgressBar"
import CircleProgressBar from "./sharedComponent/CircleProgressBar"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz-instructions" component={ProgressBar} />
        <Route
          exact
          path="/quiz"
          render={props => (
            <CircleProgressBar
              percent="50%"
              title="Good job!"
              description=" you are half way there."
              button="Let’s keep going!"
            />
          )}
        />
      </Switch>
    </Router>
  )
}

export default Routes

import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import PartOne from '../containers/PartOne'
import PartTwo from '../containers/PartTwo'
import NotFound from '../containers/NotFound'
import About from '../containers/About'

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/uno" component={PartOne} />
            <Route exact path="/dos" component={PartTwo} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
        </Switch>
    </HashRouter>
)

export default App

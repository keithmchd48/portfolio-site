import React from'react'
import Landing from './landingpage.js'
import About from './aboutme.js'
import Resume from './resume.js'
import Contact from './contact'
import {Switch, Route} from 'react-router-dom'
import Error from '../error.js'
// import Project from './project.js';

function Main(){
    return(
        <Switch>
            <Route exact path="/home" component={Landing} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/aboutme" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Error}></Route>
            {/* <Route exact path="/projects" component={Project} /> */}
        </Switch>
    )
}

export default Main
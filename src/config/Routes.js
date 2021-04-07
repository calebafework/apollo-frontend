import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Comments from '../pages/Comments'
import CommentPage from '../pages/CommentPage'
import NotFound from '../pages/NotFound'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

// if passing history as history , we must use components "verbose"
// in a js object, you can do the short handed way ie history = history 


export default(
    <Router history={ history }>
        <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/comment/id' component={ CommentPage }/>
            <Route path='/comment' component={ Comments }/>
            <Route component={ NotFound }/>
        </Switch>
    </Router>
)

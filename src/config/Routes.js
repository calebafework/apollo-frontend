import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Comments from '../pages/Comments'
import Comment from '../pages/Comment'
import NotFound from '../pages/NotFound'

export default(
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/comment' component={ Comment }/>
        <Route path='/comments' component={ Comments }/>
        <Route component={ NotFound }/>
    </Switch>
)

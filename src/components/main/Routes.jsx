import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../home/Home'
import User from '../user/UserCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={User} />
        <Redirect from='*' to='/' />
    </Switch>
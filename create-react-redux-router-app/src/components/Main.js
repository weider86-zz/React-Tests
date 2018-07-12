import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Click from './Click'
import Counter from './counter'

const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Click' component={Click}/>
      <Route path='/Counter' component={Counter}/>
    </Switch>
  )

export default Main
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Richter from '../src/pages/Richter'
import DataTree from '../src/pages/DataTree'

const Router = () => {
    return <Switch>
        <Route exact path='/react-recursion-tree' component={props => <DataTree {...props} />} />
        <Route exact path='/richter' component={Richter} />
    </Switch>
}

export default Router
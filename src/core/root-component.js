import React from 'react'
import { Provider } from 'react-redux'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store'

import { ToolListContainer } from '../features/tool-search/tool-list'
import { AddToolContainer } from '../features/tool-search/tool-add'
import { UpdateToolContainer } from '../features/tool-search/tool-edit'

function Root() {
    return (
        <Provider store = { store }>
            <Router>
                <Switch>
                    <Route exact path="/" component={ToolListContainer} />
                    <Route exact path="/new" component={AddToolContainer} />
                    <Route path="/:id" component={UpdateToolContainer} />
                    <Route component={ToolListContainer} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default Root
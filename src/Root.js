import React from 'react'
import { Provider } from 'react-redux'
import { Switch, HashRouter, Route } from 'react-router-dom'
import App from './App'
import AddTool from './components/AddTool'
import UpdateTool from './components/UpdateTool'
import store from './store'

function Root() {
    return (
        <Provider store = { store }>
            <HashRouter>
                <Switch>
                    <Route path="/" component={App} />
                    <Route path="/new" component={AddTool} />
                    <Route path="/:id" component={UpdateTool} />
                </Switch>
            </HashRouter>
        </Provider>
    )
}

export default Root
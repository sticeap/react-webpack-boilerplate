import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory} from 'react-router'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'App/App.reducers'
import AppContainer from 'AppContainer'

const MOUNT_NODE = document.getElementById('root')

const initialState = window.___INITIAL_STATE__
const configureStore = () => createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window['devToolsExtension'] ? window['devToolsExtension']() : f => f
    )
)

const store = configureStore()
store.asyncReducers = {}

const render = () => {
    const routes = require('App/App.routes').default(store)

    ReactDOM.render(
        <AppContainer
            store={store}
            history={browserHistory}
            routes={routes}
        />,
        MOUNT_NODE
    )
}

render()

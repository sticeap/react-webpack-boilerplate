import React, {Component} from 'react'
import {Provider, connect} from 'react-redux'
import {Router} from 'react-router'
import '../styles/main.scss'

class AppContainer extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const {history, routes, store} = this.props

        return (
            <Provider store={store}>
                <Router history={history} children={routes}/>
            </Provider>
        )
    }
}

export default AppContainer

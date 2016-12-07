export const createRoutes = (store) => ({
    path: '/',
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            const route = {
                onEnter: (nextState, replace) => replace('/welcome')
            }

            callback(null, route) //index route
        });
    },
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            const App = require('App').default
            callback(null, App)
        });
    },
    getChildRoutes (location, callback) {
        require.ensure([], (require) => {
            const About = require('About').default
            const Inbox = require('Inbox').default
            const Welcome = require('Welcome').default

            const routes = [
                {
                    path: 'welcome',
                    component: Welcome
                },
                {
                    path: 'about',
                    component: About
                },
                {
                    path: 'inbox',
                    component: Inbox
                }
            ]

            callback(null, routes)
        })
    }
})

export default createRoutes

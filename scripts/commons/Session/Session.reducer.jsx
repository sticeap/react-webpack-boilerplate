import * as actions from './Session.actions'
import _ from 'lodash'

const initialAuthState = {
    userData: {}
}

const sessionReducer = (state = initialAuthState, action = {}) => {
    switch (action.type) {
        case actions.CREATE_SESSION:
            const {sessionData} = action.payload

            return Object.assign({}, state, {
                userData: Object.assign({}, state.userData, sessionData)
            })
        default:
            return state
    }
}

export default sessionReducer

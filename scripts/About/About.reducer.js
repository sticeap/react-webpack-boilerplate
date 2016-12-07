import * as actions from './About.actions'
import _ from 'lodash'

const initialAuthState = {
    pageData: {}
}

const aboutReducer = (state = initialAuthState, action = {}) => {
    switch (action.type) {
        case actions.GET_ABOUT:
            const {pageData} = action.payload

            return Object.assign({}, state, {
                pageData: Object.assign({}, state.pageData, pageData)
            })
        default:
            return state
    }
}

export default aboutReducer

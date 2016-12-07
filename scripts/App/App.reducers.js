import {combineReducers} from 'redux'

import sessionReducer from 'commons/Session/Session.reducer'
import aboutReducer from 'About/About.reducer'

export default combineReducers({
    session: sessionReducer,
    about: aboutReducer
})
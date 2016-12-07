// import {$getUserData} from 'Session.dataservice'

export const CREATE_SESSION = 'CREATE_SESSION'
export const DELETE_SESSION = 'DELETE_SESSION'
export const GET_SESSION = 'GET_SESSION'



const _deleteSession = () => ({
    type: DELETE_SESSION,
    payload: {}
})

const _createSession = (sessionData) => ({
    type: CREATE_SESSION,
    payload: {
        sessionData
    }
})

export const deleteSession = () => {
    return (dispatch, getState) => {
        dispatch(_deleteSession())
    }
}

export const getSession = () => {
    return (dispatch, getState) => {
        return $getUserData()
    }
}

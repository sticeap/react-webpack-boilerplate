import {$getAbout} from './About.dataservice'

export const GET_ABOUT = 'GET_ABOUT'


const _getAbout = (pageData) => ({
    type: GET_ABOUT,
    payload: {
        pageData
    }
})

export const getAbout = () => {
    return (dispatch, getState) => {
        $getAbout()
            .then((response) => {
                const {data} = response

                dispatch(_getAbout(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

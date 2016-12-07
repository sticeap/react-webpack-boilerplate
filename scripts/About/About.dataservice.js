import axios from 'axios'
import config from 'commons/lib/config'

export const $getAbout = () => {
    let configParams = {
        url: config.apiURL + '/posts/1',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {}
    }

    return axios(configParams)
}
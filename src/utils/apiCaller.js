import axios from 'axios';
import * as config from './../constants/config'

export default function apiCaller(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err)
    });
}
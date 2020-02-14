// use axios to encapsulate ajax function

import axios from 'axios'

axios.defaults.withCredentials = true;


export default function ajax(url='', data={}, type='GET'){
    if(type==='GET'){
        return axios.get(url)
    }else{
        return axios.post(url, data)
    }
}
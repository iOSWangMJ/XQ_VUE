import axios from 'axios'

axios.interceptors.request.use(config => {
    config.header['Cache-Control'] = 'no-cache'//ie浏览器缓存
    return config
}, error=>{
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    if (response.data.code === 0){
        return response.data
    } else {
        return Promise.reject(error)
    }
}, error => {
    return Promise.reject(error)
})

export default axios
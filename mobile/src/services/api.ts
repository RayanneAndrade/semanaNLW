import axios from 'axios'

const ipv4Address = 'http://192.168.100.10'

const api = axios.create({ 
    baseURL: `${ipv4Address}:3333`
 })

 export default api

import Axios from "./Axios";

const http = new Axios({
    baseURL:'http://localhost:3000',
    timeout:1000,
    headers:{}
})

export default http;
import Axios from 'axios';

const api = Axios.create({
    baseURL: "http://paulobrandao-001-site1.etempurl.com/api" ,
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + localStorage.getItem("usuario-gufos")
    }
});


export default api;
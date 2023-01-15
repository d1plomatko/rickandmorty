import {baseURL} from "../configs";

const fetchService = (url) => fetch(`${baseURL}${url}`)
            .then(response => response.json())



export {
    fetchService
}
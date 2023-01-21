import axios from "axios";

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseURL).then(res => res.data)
}

const create = (newObject) => {
    return axios.post(baseURL, newObject).then(res => res.data)
}

export default { getAll, create }
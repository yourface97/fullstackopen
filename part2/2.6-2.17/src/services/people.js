import axios from "axios";

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseURL).then(res => res.data)
}

const create = (newObject) => {
    return axios.post(baseURL, newObject).then(res => res.data)
}

const remove = (id) => {
    return axios.delete(`${baseURL}/${id}`)
}

const update = (id, newObject) => {
    return axios.put(`${baseURL}/${id}`, newObject).then(res => res.data)
}

export default { getAll, create, remove, update }
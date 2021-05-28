import axios from 'axios'

const baseUrl = '/api/persons'

const all = () =>
    axios
        .get(baseUrl)
        .then(response => response.data)

const create = newObject =>
    axios
        .post(baseUrl, newObject)
        .then(response => response.data)

const update = (id, newObject) =>
    axios
        .put(`${baseUrl}/${id}`, newObject)
        .then(response => response.data)

const delete_p = id =>
    axios
        .delete(`${baseUrl}/${id}`)
        .then(response => response.data)


export default {
    all, create, update, delete_p
}
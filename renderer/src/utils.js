import axios from "axios"

const server = "http://localhost:3000/"

export const thayyib = (endpoint, payload) => {
    return axios.post(`${server}${endpoint}`, payload)
}
import axios from "axios"
import { GET_USERS, GET_USER_BY_ID } from "../constants/actionTypes"

export const getUsers = () => (dispatch) => {
    axios.get("http://localhost:8000/api/users")
        .then(res => dispatch({ type: GET_USERS, payload: res.data }))
        .catch(err => console.log(err))
}
export const getUser = (id) => (dispatch) => {
    axios.get(`http://localhost:8000/api/users/${id}`)
        .then(res => dispatch({ type: GET_USER_BY_ID, payload: res.data }))
        .catch(err => console.log(err))
}

export const addUser=(newUser)=>(dispatch) =>{
    axios.post(`http://localhost:8000/api/users/`, newUser)
        .then(()=>dispatch(getUsers()))
        .catch(err => console.log(err))
}

export const deleteUser=(id)=>(dispatch) =>{
    axios.delete(`http://localhost:8000/api/users/${id}`)
        .then(()=>dispatch(getUsers()))
        .catch(err => console.log(err))
}

export const editeUser=(id, editUser)=>(dispatch) =>{
    axios.put(`http://localhost:8000/api/users/${id}`, editUser)
        .then(()=>dispatch(getUsers()))
        .catch(err => console.log(err))
}
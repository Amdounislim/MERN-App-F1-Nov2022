import React, { useEffect } from "react"
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import AddUser from './components/AddUser';
import UserCard from './components/UserCard';
import EditUser from './components/EditUser';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './JS/actions/actionUser'

function App() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users)

  const getAllUsers = () => {
    dispatch(getUsers());
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <div className="App">
      <Link to="/">
        <Button variant="outline-primary button">Users List</Button>
      </Link>
      <Link to="/Add_user" >
        <Button variant="primary button">Add User</Button>
      </Link>
      <div className="contact-list">
        <Routes>
          <Route path='/' element={<div className="contact-list">
                                      {users.map((el, i) => <UserCard user={el} key={el._id} />)}
                                  </div>} />
          <Route path='/Add_user' element={<AddUser />} />
          <Route path='/Edit_user' element={<EditUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

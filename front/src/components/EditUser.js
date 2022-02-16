import React, { useState, useEffect } from 'react'
import { Form, Card, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { editeUser } from '../JS/actions/actionUser'
import {Link} from "react-router-dom"

const EditUser = () => {
  const [editUser, setEditUser] = useState({})

  const userID = useSelector(state => state.userId)
  const dispatch = useDispatch()

  useEffect(() => {
    setEditUser(userID)
  }, [userID])

  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value })
  }


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "22rem",
          height: "25rem",
          marginRight: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            color: "white",
          }}
        >
          Edit User
        </Card.Header>

        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                <Form.Label >name :</Form.Label>
                <Form.Control type="text" name="name" value={editUser.name} onChange={handleChange} placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                <Form.Label >email :</Form.Label>
                <Form.Control type="email" name="email" value={editUser.email} onChange={handleChange} placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                <Form.Label >phone :</Form.Label>
                <Form.Control type="text" name="phone" value={editUser.phone} onChange={handleChange} placeholder="Enter your phone" />
              </Form.Group>
            </Form>
          </Card.Text>
        </Card.Body>
        <div className="buttons">
          <Link to='/' >
          <Button variant="outline-primary edit-button"
            onClick={() => dispatch(editeUser(editUser._id, editUser))}
          >Save</Button>
          </Link>
          <Button variant="outline-danger edit-button">Cancel</Button>
        </div>
      </Card>
    </div>
  )
}

export default EditUser

import React, { useState } from 'react'
import { Form, Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addUser } from "../JS/actions/actionUser"
import { Link } from "react-router-dom"

const AddUser = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const dispatch = useDispatch()

  const add=()=>{
    dispatch(addUser({ name, email, phone }));
    setName("")
    setEmail("")
    setPhone("")
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
          Add New Contact
        </Card.Header>

        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                <Form.Label >name :</Form.Label>
                <Form.Control type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                <Form.Label >email :</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                <Form.Label >phone :</Form.Label>
                <Form.Control type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone" />
              </Form.Group>
            </Form>
          </Card.Text>
        </Card.Body>
        <div className="buttons">
          <Link to='/' >
          <Button variant="outline-primary edit-button"
            onClick={add}
          >Add</Button>
          </Link>
          <Button variant="outline-danger edit-button">Cancel</Button>
        </div>
      </Card>
    </div>

  )
}

export default AddUser
import React from 'react';
import{Redirect} from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'

export default ({ handleOnChange, handleSubmit, user,redirect }) => {
  return (
    <>
    <Card style={{ width: '25rem' }}  >
      <Card.Body>
        <Card.Title>Create a New user</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group >
            <Form.Label> Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Write your name'
              name='userName'
              value={user.userName}
              onChange={handleOnChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Insert your email'
              name='userEmail'
              value={user.userEmail}
              onChange={handleOnChange} />
          </Form.Group>
          <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
              type='password'
              placeholder='Insert your password'
              name='userPassword'
              value={user.userPassword}
              onChange={handleOnChange} />
          </Form.Group>
          {/* <Form.Group>
          <Form.Label>Re-Password</Form.Label>
          <Form.Control
              type='password'
              placeholder='Repeat your password'
              name='userRePassword'
              value={user.userRePassword}
              onChange={handleOnChange} />
          </Form.Group> */}
          <Button type='submit'>Submit</Button>
        </Form>
      </Card.Body>
    </Card>
   { redirect && <Redirect to='/posts'/>}
   </>
  )
}
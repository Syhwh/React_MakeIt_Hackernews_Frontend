import React, { useReducer, useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import { Form, Button, Card } from 'react-bootstrap';

const SET_NAME = 'SET_NAME';
const SET_EMAIL = 'SET_EMAIL';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_REPEATED_PASSWORD = 'SET_REPEATED_PASSWORD';

function reducer(state, action) {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        userName: action.payload
      }
    case SET_EMAIL:
      return {
        ...state,
        userEmail: action.payload
      }
    case SET_PASSWORD:
      return {
        ...state,
        userPassword: action.payload
      }
    case SET_REPEATED_PASSWORD:
      return {
        ...state,
        userRepeatPassword: action.payload
      }
    default:
      return state
  }
}

const initialState = {
  userName: '',
  userEmail: '',
  userPassword: '',
  userRepeatPassword: ''
}

const actions = {
  userName: SET_NAME,
  userEmail: SET_EMAIL,
  userPassword: SET_PASSWORD,
  userRepeatPassword: SET_REPEATED_PASSWORD
}


export default function UserSignUp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { handleSubmitUserSignUpForm } = useContext(AuthContext)
  
  function handleOnChange(e) {
    const { name, value } = e.target;
    dispatch({
      type: actions[name],
      payload: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleSubmitUserSignUpForm(state)
  }
  const { userName, userEmail, userPassword, userRepeatPassword } = state
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
                value={userName}
                onChange={handleOnChange} />
            </Form.Group>
            <Form.Group >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Insert your email'
                name='userEmail'
                value={userEmail}
                onChange={handleOnChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Insert your password'
                name='userPassword'
                value={userPassword}
                onChange={handleOnChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Re-Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Repeat your password'
                name='userRepeatPassword'
                value={userRepeatPassword}
                onChange={handleOnChange} />
            </Form.Group>
            <Button type='submit'>Submit</Button>
          </Form>
        </Card.Body>
      </Card>

    </>
  )
}
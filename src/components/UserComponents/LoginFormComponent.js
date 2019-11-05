import React, { useReducer, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../store/AuthContext';
import { Form, Button, Card } from 'react-bootstrap'

const SET_EMAIL = 'SET_EMAIL';
const SET_PASSWORD = 'SET_PASSWORD';

function reducer(state, action) {
  switch (action.type) {
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
    default:
      return state
  }
}

const actions = {
  userEmail: SET_EMAIL,
  userPassword: SET_PASSWORD
}

const initialState = {
  userEmail: '',
  userPassword: ''
}
export default function LoginUserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { handleSubmitUserLoginForm } = useContext(AuthContext);

  function handleOnChange(e) {
    const { name, value } = e.target;
    dispatch({
      type: actions[name],
      payload: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitUserLoginForm(state)
  }
  const { userEmail, userPassword } = state;
  return (
    <>
      <Card style={{ width: '25rem' }}  >
        <Card.Body>
          <Card.Title>Login an user</Card.Title>
          <Form onSubmit={handleSubmit}>
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
            <Button type='submit'>Submit</Button>
            <div>Doesn't have an account? <Link to='/signUp'>SignUp</Link> </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}
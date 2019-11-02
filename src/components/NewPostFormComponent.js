import React, { useReducer, useContext } from 'react';
import { PostContext } from '../store/PostsContext';
import { Form, Button, Card } from 'react-bootstrap';

const SET_TITLE = 'SET_TITLE';
const SET_URL = 'SET_URL';

function reducer(state, action) {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        postTitle: action.payload
      }
    case SET_URL:
      return {
        ...state,
        postUrl: action.payload
      }
    default:
      return state
  }
}

const initialState = {
  postTitle: '',
  postUrl: ''
}
const actions = {
  postTitle: SET_TITLE,
  postUrl: SET_URL
}

export default function NewPostFormComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { handlePostSubmitForm } = useContext(PostContext)

  function handleOnChange(e) {
    const { name, value } = e.target;
    dispatch({
      type: actions[name],
      payload: value
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    handlePostSubmitForm(state)
  }
  const { postTitle, postUrl } = state
  return (
    <>
      <Card style={{ width: '25rem' }}  >
        <Card.Body>
          <Card.Title>Create a New Post</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group >
              <Form.Label>Post Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Insert your post title'
                name='postTitle'
                value={postTitle}
                onChange={handleOnChange} />
            </Form.Group>
            <Form.Group >
              <Form.Label>Post Url</Form.Label>
              <Form.Control
                type='text'
                placeholder='Insert your URL'
                name='postUrl'
                value={postUrl}
                onChange={handleOnChange} />
            </Form.Group>
            <Button type='submit' >Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

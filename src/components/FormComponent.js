import React from 'react';
import{Redirect} from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'

export default ({ handleOnChange, handleSubmit, post,redirect }) => {
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
              name='title'
              value={post.title}
              onChange={handleOnChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Post Url</Form.Label>
            <Form.Control
              type='text'
              placeholder='Insert your URL'
              name='url'
              value={post.url}
              onChange={handleOnChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Post Description</Form.Label>
            <Form.Control as="textarea" rows="3"
              placeholder='Insert some post description'
              name='description'
              value={post.description}
              onChange={handleOnChange} />
          </Form.Group>
          <Button type='submit' >Submit</Button>
        </Form>
      </Card.Body>
    </Card>
   { redirect && <Redirect to='/posts'/>}
   </>
  )
}

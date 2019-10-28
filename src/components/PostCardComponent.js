import React from 'react';
import { useHistory } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'

export default ({ id, title, description, url, handleDelete }) => {
  let history = useHistory();
  return (
    <Card style={{ width: '25rem' }} className="bg-light" >
      <Card.Header>{title} {id}
        <span onClick={() => handleDelete(id)}>
          <FontAwesome name='trash' /> </span>
        <span onClick={() => history.push("/newPost")}>
          <FontAwesome name='edit' /> </span>
      </Card.Header>
      <Card.Body>
        <Card.Title> {url} </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  )
}
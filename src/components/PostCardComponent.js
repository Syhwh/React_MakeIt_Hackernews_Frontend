import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button, Col, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Moment from 'react-moment';

export default ({ id, title, article, url, date, handleDelete }) => {

  return (
    <Card style={{ width: '35rem' }} className="bg-light" >
      <Card.Header>
        {title}   <Moment format="DD/MM/YYYY" >{date}</Moment>
        <span onClick={() => handleDelete(id)}>
          <FontAwesome name='trash' /> </span>
        <Link to={`/edit/${id}`}>
          <FontAwesome name='edit' /> </Link>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Card.Img variant="top" src={article.image} style={{ width: '15rem' }} />
          </Col>
          <Col>
            <Card.Title> {article.title} </Card.Title>
            <Card.Text>
              <p> <strong>Author:</strong>{article.author}  </p>
              <p>   <strong>Date:</strong>  <Moment format="DD-MM-YYYY" >{article.date}</Moment>   </p>
              <p>  <strong>Publisher:</strong>   {article.publisher}  </p>

            </Card.Text>
          </Col>
        </Row>
        <div>
          {article.description}
        </div>
        <Button variant="primary" href={url}> More  </Button>
      </Card.Body>
    </Card>
  )
}
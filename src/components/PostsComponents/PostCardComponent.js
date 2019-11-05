import React from 'react';
import { Link } from 'react-router-dom'
import { ActionsOnPosts } from './ActionsOnPosts';
import { Card, Button, Col, Row, Badge } from 'react-bootstrap';
import { VotesComponent } from './VotesComponent'
import FontAwesome from 'react-fontawesome';
import Moment from 'react-moment';

export default ({ id, title, article, url, date, postedBy, votes, showActions }) => {

  return (
    <Card style={{ width: '50rem' }} className="bg-light mb-2 mt-3" >
      <Card.Header className="d-flex justify-content-around">

        <Card.Title className='mr-auto' > {article.title} </Card.Title>
        {showActions && <ActionsOnPosts id={id} />}
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Card.Img variant="top" src={article.image} style={{ width: '15rem' }} />
          </Col>
          <Col>
            <Card.Text>
              <p> <strong>Author: </strong>{article.author}  </p>
              <p> <strong>Date: </strong>  <Moment format="DD-MM-YYYY" >{article.date}</Moment>   </p>
              <p> <strong>Publisher: </strong>   {article.publisher}  </p>
              <div className='d-flex justify-content-around'>
                <Button variant="dark" > <FontAwesome name='heart' /> <strong> Favorite </strong>   </Button>
                <Link to={`/postDetails/${id}`} >
                  <Button variant="secondary" > <FontAwesome name='info-circle' /> <strong> Details </strong>  </Button>
                </Link>
                <Button variant="primary" href={url} target='blank' > <FontAwesome name='angle-right' /> <strong> More </strong>  </Button>
              </div>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-around">
        <div><strong>Posted By: </strong>
          {postedBy}  </div>
        <div>
          <strong>Posted at: </strong>
          <Moment format="DD/MM/YYYY" >{date}</Moment>
        </div>
        <div> <strong>Votes:</strong> <Badge variant="dark">{votes}</Badge></div>

      </Card.Footer>
    </Card>
  )
}
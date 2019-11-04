import React from 'react';
import { Link } from 'react-router-dom'
import { ActionsOnPosts } from './ActionsOnPosts';
import { Card, Button, Col, Row, Badge } from 'react-bootstrap';
import { VotesComponent } from './VotesComponent'
import FontAwesome from 'react-fontawesome';
import Moment from 'react-moment';

export default ({ _id, title, article, url, date, postedBy, votes, showActions }) => {

  return (
    <Card style={{ width: '50rem' }} className="bg-light" >
      <Card.Header className="d-flex justify-content-around">
        <div><strong>Posted By: </strong>
          {postedBy}  </div>
        <div>
          <strong>Posted at: </strong>
          <Moment format="DD/MM/YYYY" >{date}</Moment>
        </div>
        <div> <strong>Votes:</strong> <Badge variant="dark">{votes}</Badge></div>
        {showActions && <ActionsOnPosts id={_id} />}
      </Card.Header>
      <Card.Body>
        <Row>

          <Card.Img variant="top" src={article.image} style={{ width: '30rem' }} />

          <Card.Text>
            <Card.Title> {article.title} </Card.Title>
            <p> <strong>Author: </strong>{article.author}  </p>
            <p> <strong>Date: </strong>  <Moment format="DD-MM-YYYY" >{article.date}</Moment>   </p>
            <p> <strong>Publisher: </strong>   {article.publisher}  </p>
            {article.description}
            <div className='d-flex justify-content-around'>
              <Button variant="secondary" > <FontAwesome name='heart' /> <strong> Favorite </strong>   </Button>
              <Button variant="primary" href={url} target='blank' > <FontAwesome name='angle-right' /> <strong> Go to the Post </strong>  </Button>
            </div>
          </Card.Text>
        </Row>
      </Card.Body>
    </Card>
  )
}
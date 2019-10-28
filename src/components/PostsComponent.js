import React, { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import PostCardComponent from './PostCardComponent';


export default function PostsComponent({ posts,  handleDelete}) {  
  
  return (
    <Fragment>
      <Container>
        <Row>
          {posts.map(({ _id, title, description, url, date }) =>
            <PostCardComponent
              key={_id}
              id={_id} 
              title={title} 
              description={description} 
              date={date}
              url={url}              
              handleDelete={handleDelete}
              />
          )}
        </Row>
      </Container>
    </Fragment>
  );
}

import React, { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import PostCardComponent from './PostCardComponent';


export default function PostsComponent({ posts, handleDelete }) {

  return (
    <Fragment>
      <Container>
        <Row>
          {posts.map(({ _id, title, article, url, date }) =>
            <PostCardComponent
              key={_id}
              id={_id}
              title={title}
              article={article}
              date={date}
              url={url}
            />
          )}
        </Row>
      </Container>
    </Fragment>
  );
}

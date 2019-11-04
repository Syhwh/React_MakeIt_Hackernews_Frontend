import React, { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import PostCardComponent from './PostCardComponent';


export default function PostsComponent({ posts, showActions }) {
  console.log('show posts component')
  console.log(posts)
  return (
    <Fragment>
      <Container>
        <Row>
          {posts.length > 0 && posts.map(({ _id, title, article, url, date, postedBy, votes }) =>
            <PostCardComponent
              key={_id}
              id={_id}
              title={title}
              article={article}
              date={date}
              url={url}
              postedBy={postedBy}
              votes={votes}
              showActions={showActions}
            />
          )}


        </Row>
      </Container>
    </Fragment>
  );
}

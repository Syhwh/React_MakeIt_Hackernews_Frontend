import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import NewPostFormComponent from '../components/PostsComponents/NewPostFormComponent';


export default function NewPostPage() {
  return (
    <Container >
      <Row className="justify-content-md-center mt-4">
        <NewPostFormComponent />
      </Row>
    </Container>

  );
}


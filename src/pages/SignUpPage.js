import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import SignUpFormComponent from '../components/UserComponents/SignUpFormComponent';


export default function SignUpPage() {
  return (
    <Container >
      <Row className="justify-content-md-center mt-4">

        <SignUpFormComponent />

      </Row>
    </Container>
  );
}
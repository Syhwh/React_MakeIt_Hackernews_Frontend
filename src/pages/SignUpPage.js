import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import SignUpFormComponent from '../components/SignUpFormComponent';


export default function SignUpPage() {
  return (
    <Container >
      <Row>
        <Col>
          <SignUpFormComponent />
        </Col>
      </Row>
    </Container>
  );
}
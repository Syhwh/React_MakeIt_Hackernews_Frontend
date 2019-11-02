import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import LoginFormComponent from '../components/LoginFormComponent';


export default function LoginPage() {
  return (

    <Container>
      <Row>
        <Col>
          <LoginFormComponent />
        </Col>
      </Row>
    </Container>

  );
}
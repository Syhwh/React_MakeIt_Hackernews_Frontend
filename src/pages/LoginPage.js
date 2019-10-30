 import React from 'react';
 import { Container, Row, Col } from 'react-bootstrap'
 import LoginFormComponent from '../components/LoginFormComponent';
 import Api from '../utils/Api';

 export default function LoginPage() {
    return (
      <div >
        <Api>
      {({handleOnChangeUserSignUp,userData,handleSubmitUserLogin,redirect})=>{ 
        return(
          <Container >
            <Row>
              <Col>
                <LoginFormComponent
                  handleOnChange={handleOnChangeUserSignUp}
                  user={userData}
                  handleSubmit={handleSubmitUserLogin} 
                  redirect={redirect}/>
              </Col>
            </Row>
          </Container>
        )
      }}
        </Api>
      </div>
    );
  }
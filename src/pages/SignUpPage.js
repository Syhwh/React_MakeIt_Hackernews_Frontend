 import React from 'react';
 import { Container, Row, Col } from 'react-bootstrap'
 import SignUpFormComponent from '../components/SignUpFormComponent';
 import Api from '../utils/Api';

 export default function SignUpPage() {
    return (
      <div >
        <Api>
      {({handleOnChangeUserSignUp,userData,handleSubmitUserSignUp,redirect})=>{ 
        return(
          <Container >
            <Row>
              <Col>
                <SignUpFormComponent
                  handleOnChange={handleOnChangeUserSignUp}
                  user={userData}
                  handleSubmit={handleSubmitUserSignUp} 
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
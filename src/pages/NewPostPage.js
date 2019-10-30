import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import FormComponent from '../components/FormComponent';
import Api from '../utils/Api';

export default function NewPostPage() {

  return (
    <div >
      <Api>
    {({handleOnChange,newPost,handleSubmit,redirect})=>{ 
      return(
        <Container >
          <Row>
            <Col>
              <FormComponent
                handleOnChange={handleOnChange}
                post={newPost}
                handleSubmit={handleSubmit} 
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


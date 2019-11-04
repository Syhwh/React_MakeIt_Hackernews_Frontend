import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import FormComponent from '../components/FormComponent';
import PostsApi from '../utils/ApiConfiguration'

export default class EditPostPage extends Component {
  constructor() {
    super()
    this.state = {
      posts: [{
        title: '',
        url: '',
        description: '',
      }],
      newPost: {
        title: '',
        url: '',
        description: '',
        edit: false
      },

    }
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newPost: { ...prevState.newPost, [name]: value }
    }));
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const post = this.state.newPost
    try {
      await PostsApi.post('/posts', post)
      this.setState(({
        newPost: { title: '', url: '', description: '', edit: false }
      }));
    } catch (error) {
      console.log(error)
    }
  };


  render() {
    return (
      <div >
        <Container >
          <Row>
            <Col>
              <FormComponent
                handleOnChange={this.handleOnChange}
                post={this.state.newPost}
                handleSubmit={this.handleSubmit} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

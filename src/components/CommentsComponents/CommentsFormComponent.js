import React, { useState, useContext } from 'react';
import { CommentContext } from '../../store/CommentsContext';
import { Container, Col, Row, Form } from 'react-bootstrap';

export default function CommentsFormComponent({ id }) {
  const [state, setState] = useState({ comment: '' })
  const { postComments } = useContext(CommentContext)

  function handleOnChange(e) {
    const { value } = e.target
    setState({
      ...state,
      comment: value
    });

  }
  function handleSubmit(e) {
    e.preventDefault()
    postComments({
      post: id,
      comment: state.comment
    })
    setState({ comment: '' })
  }
  return (<>

    <Container>
      <div className="container">
        <div id="second">
          <div className="row">
            <div className="col-md-12">
              <h3 className="second_heading"><b>Leave a Comment</b></h3>
            </div>
          </div>
        </div>
        <div id="middle">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <textarea
                onChange={handleOnChange}
                cols='90'
                type="text"
                value={state.comment}
                name="comment"
              ></textarea>
            </Form.Group>
            <button className='btn btn-success'>Post a Comment</button>
          </Form>
        </div>
      </div>
    </Container>
  </>)
}
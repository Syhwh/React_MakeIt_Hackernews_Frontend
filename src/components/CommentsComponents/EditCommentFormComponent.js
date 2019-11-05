import React, { useState, useContext } from 'react';
import { CommentContext } from '../../store/CommentsContext';
import { Container, Col, Row, Form } from 'react-bootstrap';

export default function EditCommentFormComponent({ id, comment, disableEdit }) {

  const [state, setState] = useState({ comment })
  const { handleEditComment } = useContext(CommentContext)

  function handleOnChange(e) {
    const { value } = e.target
    setState({
      ...state,
      comment: value
    });

  }

  function handleSubmit(e) {
    e.preventDefault()
    handleEditComment({
      id,
      comment: state.comment
    })
    setState({ comment: '' })
    disableEdit()
  }
  return (<>

    <Container>
      <div className="container">
        <div id="second">
          <div className="row">
            <div className="col-md-12">
              <h3 className="second_heading"><b>Edit the Comment</b></h3>
            </div>
          </div>
        </div>
        <div id="middle">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <textarea
                onChange={handleOnChange}
                cols='50'
                type="text"
                value={state.comment}
                name="comment"
              ></textarea>
            </Form.Group>
            <button type='submit' className='btn btn-success'>Save</button>
            <button onClick={disableEdit} className='btn btn-success'>Cancel</button>
          </Form>
        </div>
      </div>
    </Container>
  </>)
}
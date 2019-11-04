import React, { useState, useContext } from 'react';
import { CommentContext } from '../../store/CommentsContext';

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
    <div className="container">
      <div id="second">
        <div className="row">
          <div className="col-md-12">
            <h3 className="second_heading"><b>Leave a Comment</b></h3>
          </div>
        </div>
      </div>
      <div id="middle">
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleOnChange}
            cols='20rem'
            type="text"
            value={state.comment}
            name="comment"
          ></textarea>
          <button className='btn btn-success'>Post a Comment</button>
        </form>
      </div>
    </div>
  </>)
}
import React from 'react';
import CommentDisplayComponent from './CommentDisplayComponent'

import './CommentDisplayComponent.css';

export default function ShowCommentsComponent({ comments }) {


  return (
    <>
      <h1>Comments</h1>
      <div className="comments-container">
        <ul id="comments-list" className="comments-list">
          {comments.length > 0 ? comments.map(({ _id, userName, comment, date, userId, edited }) =>
            <CommentDisplayComponent
              key={_id}
              id={_id}
              author={userName}
              comment={comment}
              date={date}
              userId={userId}
              edited={edited}
            />) :
            <h2>No comments yet, be the first</h2>
          }
        </ul>
      </div>
    </>
  )

};

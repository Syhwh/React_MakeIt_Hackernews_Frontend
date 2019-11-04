import React from 'react';
import CommentDisplayComponent from './CommentDisplayComponent'

import './CommentDisplayComponent.css';

export default function ShowCommentsComponent({ comments }) {
  return (
    <>
      <h1>Comments</h1>
      <div className="comments-container">
        <ul id="comments-list" className="comments-list">
          {comments.length > 0 && comments.map(({ _id, userName, comment, date }) =>
            <CommentDisplayComponent
              key={_id}
              author={userName}
              comment={comment}
              date={date}
            />
          )}
        </ul>
      </div>
    </>
  )

};

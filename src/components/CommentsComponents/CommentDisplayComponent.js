import React from 'react';
import Moment from 'react-moment';

export default ({ author, comment, date }) => {
  return (
    <li>
      <div className="comment-main-level">       
        <div className="comment-box">
          <div className="comment-head">
            <h6 className="comment-name by-author">
              {author}</h6>
            <span> <Moment fromNow>{date}</Moment></span>
            <i className="fa fa-reply"></i>
            <i className="fa fa-heart"></i>
          </div>
          <div className="comment-content">
            {comment}
          </div>
        </div>
      </div>
    </li>
  )


}
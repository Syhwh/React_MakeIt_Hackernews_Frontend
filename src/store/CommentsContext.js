import React, { createContext, useState } from 'react';
import hackerNewsApi from '../utils/ApiConfiguration';

export const CommentContext = createContext();


export function CommentProvider({ children }) {
  const [comments, setComments] = useState('')


  async function postComments(comment) {
    const token = localStorage.getItem('token')
    try {
      const newComment = await hackerNewsApi.post('/comments', comment, {
        headers: {
          authorization: token
        }
      });
      setComments(comments.concat(newComment.data))
    } catch (error) {
      console.log(error)
    }
  }
  async function getComments(id) {
    const token = localStorage.getItem('token')
    try {
      const { data } = await hackerNewsApi.get(`/comments/${id}`, {
        headers: {
          authorization: token
        }
      })
      setComments(data)
    }
    catch (error) {
      console.log(error)
    }

  }
  function handleDeleteComment(id) {
    console.log('Delete comment' + id)
  }
  function handleEditComment(id) {
    console.log('Edit comment' + id)
  }

  return (
    <CommentContext.Provider value={{
      postComments,
      getComments,
      comments,
      handleDeleteComment,
      handleEditComment
    }}>
      {children}
    </CommentContext.Provider>
  )
}
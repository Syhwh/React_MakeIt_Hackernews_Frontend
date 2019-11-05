import React, { createContext, useState } from 'react';
import hackerNewsApi from '../utils/ApiConfiguration';

export const CommentContext = createContext();


export function CommentProvider({ children }) {
  const [comments, setComments] = useState('')
  //  const [edit, setEdit] = useState(false)


  async function postComments(comment) {
    const token = localStorage.getItem('token');
    try {
      const newComment = await hackerNewsApi.post('/comments', comment, {
        headers: {
          authorization: token
        }
      });
      setComments([newComment.data].concat(comments))
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
  async function handleDeleteComment(id) {
    const token = localStorage.getItem('token')
    try {
      await hackerNewsApi.delete(`comments/${id}`, {
        headers: {
          authorization: token
        }
      })
      setComments(comments.filter(({ _id }) => _id !== id))
    } catch (error) {
      console.log(error)
    }

  }


  async function handleEditComment({ id, comment }) {
    const token = localStorage.getItem('token')
    try {
      await hackerNewsApi.patch(`/comments/${id}`, { comment }, {
        headers: {
          authorization: token
        }
      })
      setComments(
        comments.map((commentary) => {
          if (commentary._id === id) {
            commentary.comment = comment
            commentary.date = Date.now()
            commentary.edited = true
            return commentary
          } else {
            return commentary
          }
        })
      )

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <CommentContext.Provider value={{
      postComments,
      getComments,
      comments,
      handleDeleteComment,
      handleEditComment,

    }}>
      {children}
    </CommentContext.Provider>
  )
}
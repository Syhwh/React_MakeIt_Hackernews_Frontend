import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import hackerNewsApi from '../utils/ApiConfiguration'

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [post, setPost] = useState('')
  const history = useHistory();
  const token = localStorage.getItem('token');

  async function handlePostSubmitForm(formData) {
    try {
      await hackerNewsApi.post('/posts', formData, {
        headers: {
          authorization: token
        }
      });
      history.push('/')
    } catch (error) {
      console.log(error)
    }

  }

  async function handleDeletePost(id) {
    try {
      console.log('ok' + id)
      // await hackerNewsApi.delete(`/posts/${id}`)
      // this.setState(state => {
      //   return { data: state.data.filter(e => e._id !== id) }
      // })
    } catch (error) {
      console.log(error)
    }
  };


  async function getUserPosts(id) {
    try {
      const posts = await hackerNewsApi.get(`/posts/${id}`)
      setPost(posts.data)
    }
    catch (error) {
      console.log(error)
    }

  }

  return (
    <PostContext.Provider value={
      {
        post,
        handlePostSubmitForm,
        handleDeletePost,
        getUserPosts
      }
    }>
      {children}
    </PostContext.Provider>
  )
}
import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import hackerNewsApi from '../utils/ApiConfiguration'

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPost] = useState('');
  const [userPosts, setUserPosts] = useState('');
  const [postDetails, setPostDetails] = useState('');

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
      await hackerNewsApi.delete(`/posts/${id}`, {
        headers: {
          authorization: token
        }
      });
      setPost(posts.filter(e => e._id !== id))
      setUserPosts(posts.filter(e => e._id !== id))
    } catch (error) {
      console.log(error)
    }
  };


  async function getPosts() {
    try {
      const posts = await hackerNewsApi.get('/');
      setPost(posts.data)
    }
    catch (error) {
      console.log(error)
    }

  }

  async function getUserPosts(id) {
    try {
      const { data } = await hackerNewsApi.get(`/posts/${id}`, {
        headers: {
          authorization: token
        }
      })
      console.log(data)
      setUserPosts(data)
    }
    catch (error) {
      console.log(error)
    }

  }
  async function getPostsDetails(id) {
    try {
      const { data } = await hackerNewsApi.get(`/details/${id}`, {
        headers: {
          authorization: token
        }
      });
      setPostDetails(data.post)
    }
    catch (error) {
      console.log(error)
    }
  }


  return (
    <PostContext.Provider value={
      {
        posts,
        userPosts,
        handlePostSubmitForm,
        handleDeletePost,
        getPosts,
        getUserPosts,
        getPostsDetails,
        postDetails
      }
    }>
      {children}
    </PostContext.Provider>
  )
}
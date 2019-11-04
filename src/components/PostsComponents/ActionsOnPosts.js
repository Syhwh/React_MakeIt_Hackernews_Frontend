import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../../store/PostsContext';
import FontAwesome from 'react-fontawesome';

export function ActionsOnPosts({ id }) {
  const { handleDeletePost } = useContext(PostContext)
  return (
    <>
      <span onClick={() => handleDeletePost(id)} ><FontAwesome name='trash' /></span>
    </>
  )
}
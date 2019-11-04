import React, { useContext } from 'react';
import { CommentContext } from '../../store/CommentsContext';
import FontAwesome from 'react-fontawesome';


export function ActionsOnComments({ id, enableEdit }) {
  const { handleDeleteComment } = useContext(CommentContext)
  return (
    <>
      <span onClick={() => handleDeleteComment(id)} ><FontAwesome name='trash' /></span>
      <span onClick={() => enableEdit()} ><FontAwesome name='edit' /></span>
    </>
  )
}
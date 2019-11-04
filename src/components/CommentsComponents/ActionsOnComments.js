import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CommentContext } from '../../store/PostsContext';
import FontAwesome from 'react-fontawesome';

export function ActionsOnComments({ id }) {
    const { handleDeleteComment, handleEditComment } = useContext(CommentContext)
    return (
        <>
            <span onClick={() => handleDeleteComment(id)} ><FontAwesome name='trash' /></span>
            <span onClick={() => handleEditComment(id)} ><FontAwesome name='edit' /></span>


        </>
    )
}
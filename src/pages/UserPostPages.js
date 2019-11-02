import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../store/AuthContext';
import { PostContext } from '../store/PostsContext';
import PostsComponent from '../components/PostsComponent';

export default function UserPostPages() {
    const { user } = useContext(AuthContext)
    const { post, getUserPosts } = useContext(PostContext);

    useEffect(() => {
     console.log(user)  
     getUserPosts(user)
    },[])
console.log(post)
    return (
        <>
            <h2> Popular POSTS</h2>
            {post.length > 0 && <PostsComponent posts={post} />}
        </>
    )
}
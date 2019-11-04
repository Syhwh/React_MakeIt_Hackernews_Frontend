import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../store/AuthContext';
import { PostContext } from '../store/PostsContext';
import ShowPostsComponent from '../components/PostsComponents/ShowPostsComponent';

export default function UserPostPages() {
    const { user } = useContext(AuthContext)
    const { userPosts, getUserPosts } = useContext(PostContext);

    useEffect(() => {
        getUserPosts(user)
    }, [])

    return (
        <>
            <h2> Personal POSTS</h2>
            {userPosts.length > 0 && <ShowPostsComponent posts={userPosts} showActions={true} />}
        </>
    )
}
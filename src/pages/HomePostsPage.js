import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../store/PostsContext';

//import components
import Loading from '../components/LoadingComponent';
import Error from '../components/ErrorComponent';
import ShowPostsComponent from '../components/PostsComponents/ShowPostsComponent';




export default function HomePostPage() {
  const [loading, setState] = useState(true)
  const { getPosts, posts } = useContext(PostContext);
  useEffect(() => {
    getPosts()
    setState(false)
  }, [])


  if (loading) return <Loading />
  // if (error) return <Error />
  return (
    <>
      <h2> Popular POSTS</h2>
      {posts.length > 0 && <ShowPostsComponent posts={posts} />}
    
      
      </>


  )

}


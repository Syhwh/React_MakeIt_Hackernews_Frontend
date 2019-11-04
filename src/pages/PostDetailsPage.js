import React, { useEffect, useContext, useState } from 'react';
import { PostContext } from '../store/PostsContext';
import { CommentContext } from '../store/CommentsContext';
import { Container, Row, Col } from 'react-bootstrap'
import Loading from '../components/LoadingComponent'
import CommentsFormComponent from '../components/CommentsComponents/CommentsFormComponent';
import ShowCommentsComponent from '../components/CommentsComponents/ShowCommentsComponent';
import PostDetailsCardComponent from '../components/PostsComponents/PostDetailsCardComponent';


export default function PostDetailsPage(props) {
  const [loading, setLoading] = useState(true)
  const { getPostsDetails, postDetails } = useContext(PostContext)
  const { comments, getComments } = useContext(CommentContext);
  const postId = props.match.params.handle;
  useEffect(() => {
    async function fetchingData() {
      await getPostsDetails(postId)
      await getComments(postId)
      setLoading(false)
    }
    fetchingData()
  }, [])
  console.log(postDetails)

  if (loading) return <Loading />
  const { _id, title, article, url, date, postedBy, votes } = postDetails
  return (
    <>
      <Container>
        <Row>
          <h1> {postDetails.title} Post Details</h1>
       
        </Row>
        <Row>

        <PostDetailsCardComponent
          _id={_id}
          title={title}
          article={article}
          url={url}
          date={date}
          postedBy={postedBy}
          votes={votes}
          />
          </Row>
        <ShowCommentsComponent comments={comments} />
        <CommentsFormComponent id={postId} />

      </Container>
    </>
  )
}
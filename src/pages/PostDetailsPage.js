import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../store/PostsContext';
import { CommentContext } from '../store/CommentsContext';
import { AuthContext } from '../store/AuthContext';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Loading from '../components/LoadingComponent';
import CommentsFormComponent from '../components/CommentsComponents/CommentsFormComponent';
import ShowCommentsComponent from '../components/CommentsComponents/ShowCommentsComponent';
import PostDetailsCardComponent from '../components/PostsComponents/PostDetailsCardComponent';



export default function PostDetailsPage(props) {
  const [loading, setLoading] = useState(true);
  const { getPostsDetails, postDetails } = useContext(PostContext);
  const { comments, getComments } = useContext(CommentContext);
  const { user } = useContext(AuthContext);
  const postId = props.match.params.handle;
  useEffect(() => {
    async function fetchingData() {
      await getPostsDetails(postId)
      await getComments(postId)
      setLoading(false)
    }
    fetchingData()
  }, []);

  if (loading) return <Loading />
  const { _id, title, article, url, date, postedBy, votes } = postDetails
  return (
    <>
      <Container >
        <Row className="justify-content-md-center mt-4">
          <h2> {postDetails.title} Post Details</h2>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <PostDetailsCardComponent
            _id={_id}
            title={title}
            article={article}
            url={url}
            date={date}
            postedBy={postedBy}
            votes={votes.length}
          />
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Card style={{ width: '50rem' }} className="bg-light" >
            <Card.Header>
              <h4>Comments</h4>
            </Card.Header>
            <Card.Text>
              <ShowCommentsComponent comments={comments} />
            </Card.Text>
            <Card.Footer>
              {user ? <CommentsFormComponent id={postId} /> :
                <>
                  <h5> “You must be logged in to post a comment.” <span><Link to='/login' >Login</Link> </span> </h5>

                </>
              }
            </Card.Footer>
          </Card>

        </Row>

      </Container>
    </>
  )
}
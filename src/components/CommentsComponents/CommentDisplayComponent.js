import React, { useContext, useState } from 'react';
import Moment from 'react-moment';
import { Card, Button } from 'react-bootstrap';
import { AuthContext } from '../../store/AuthContext';
import { ActionsOnComments } from './ActionsOnComments';
import EditCommentFormComponent from './EditCommentFormComponent';

export default ({ author, comment, date, userId, id, edited }) => {
  const { user } = useContext(AuthContext);
  const [edit, setState] = useState(false);


  const enableEdit = () => {
    setState(true)
  }

  const disableEdit = () => {
    setState(false)
  }

  return (
    <>
      <li>
        <Card style={{ width: '43rem' }}>
          <Card.Header >
            <strong as="h5"> {author} </strong>
            <span className="muted"> <Moment fromNow>{date}</Moment></span>
            {edited && <span>Edited</span>}
            {user === userId &&
              <ActionsOnComments id={id} enableEdit={enableEdit} />
            }
          </Card.Header>
          <Card.Body>
            <Card.Title>
            </Card.Title>
            <Card.Text>
              {edit ?
                <EditCommentFormComponent id={id} comment={comment} disableEdit={disableEdit} />
                :
                <p>
                  {comment}
                </p>
              }
            </Card.Text>
            <Card.Footer className='mr-auto'>
              <Button variant="primary">Reply</Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </li>
    </>
  )


}
import React from 'react';

//import components
import Loading from '../components/LoadingComponent';
import Error from '../components/ErrorComponent';
import PostsComponent from '../components/PostsComponent';
import Api from '../utils/Api';


export default class PostsPage extends React.Component {
   
  render() {
    return (  
        <Api endpoint={'/'} >
          {({ data, loading, error,handleEdit,handleDelete }) => {
            if (loading) return <Loading />
            if (error) return <Error />
            return (
              <>
              <h2> Popular POSTS</h2>
               {data.length > 0 && <PostsComponent posts={data} handleEdit={handleEdit} handleDelete={handleDelete}/>}
              </>
            )
          }}
        </Api>
    )
  }

}

 
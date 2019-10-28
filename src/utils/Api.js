
import React from 'react';
import PostsApi from './ApiConfiguration'
class Api extends React.Component {
  state = {
    data: [],
    loading: false,
    error: null
  }
  async componentDidMount() {
    this.setState({
      loading: true
    });
    try {
      const { data } = await PostsApi.get(this.props.endpoint);
      this.setState({ data });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        loading: false
      })
    }
  }

  handleDelete = async (id) => {
    try {
      await PostsApi.delete(`/posts/${id}`)
      this.setState(state => {
        return {data: state.data.filter(e => e._id !== id)} 
      })
    } catch (error) {
      console.log(error)
    }
  };

  handleEdit = (id) => {
    console.log(id)
  }


  render() {
    return this.props.children({ ...this.state, handleEdit: this.handleEdit, handleDelete: this.handleDelete });
  }
}

export default Api;






import React from 'react';
import hackerNewsApi from './ApiConfiguration'
class Api extends React.Component {
  state = {
    data: [],
    loading: false,
    error: null,
    newPost: {
      title: '',
      url: '',
    },
    redirect: false,
    _id: '',
    editing: false,
    userData: {
      userName: '',
      userEmail: '',
      userPassword: ''
    }
  }

  async componentDidMount() {

    this.setState({
      loading: true,
      redirect: false
    });
    console.log(this.props)
    try {
      const { data } = await hackerNewsApi.get(this.props.endpoint);
      this.setState({ data });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        loading: false
      })
    }
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newPost: { ...prevState.newPost, [name]: value }
    }));
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const post = this.state.newPost
    try {
      this.setState({
        newPost: { title: '', url: '' },
        redirect: true
      });
      await hackerNewsApi.post('/posts', post);

    } catch (error) {
      console.log(error)
    }
  };

  handleDelete = async (id) => {
    try {
      await hackerNewsApi.delete(`/posts/${id}`)
      this.setState(state => {
        return { data: state.data.filter(e => e._id !== id) }
      })
    } catch (error) {
      console.log(error)
    }
  };

  // handleEdit = (id) => {
  //   console.log(id)
  // }
  handleOnChangeUserSignUp = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userData: { ...prevState.userData, [name]: value }
    }));
  }

  handleSubmitUserSignUp = async (e) => {
    e.preventDefault()
    const user = this.state.userData
    try {
      await hackerNewsApi.post('/signup', user);
      this.setState({
        userData: {
          userName: '',
          userEmail: '',
          userPassword: ''
        },
        redirect: true
      });
    } catch (error) {
      console.log(error)
    }
  };


  handleSubmitUserLogin = async (e) => {
    e.preventDefault()
    const user = this.state.userData
    try {
      
      const {data}  = await hackerNewsApi.post('/login', user);
      console.log(data.token)
      localStorage.setItem('jwt', data.token)
      this.setState({
        userData: {
          userEmail: '',
          userPassword: ''
        },
        redirect: true
      });
    } catch (error) {
      console.log(error)
    }
  };


  render() {
    return this.props.children({
      ...this.state,
      handleEdit: this.handleEdit,
      handleDelete: this.handleDelete,
      handleOnChange: this.handleOnChange,
      handleSubmit: this.handleSubmit,
      handleSubmitUserSignUp: this.handleSubmitUserSignUp,
      handleOnChangeUserSignUp: this.handleOnChangeUserSignUp,
      handleSubmitUserLogin:this.handleSubmitUserLogin
    });
  }
}

export default Api;





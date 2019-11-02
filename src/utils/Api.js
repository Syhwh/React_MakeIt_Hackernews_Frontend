
import React from 'react';
import hackerNewsApi from './ApiConfiguration'
class Api extends React.Component {
  state = {
    data: [],
    loading: false,
    error: null,
  }

  async componentDidMount() {
    this.setState({
      loading: true
    });
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
  render() {
    return this.props.children({
      ...this.state,
    });
  }
}

export default Api;





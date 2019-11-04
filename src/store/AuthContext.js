import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import hackerNewsApi from '../utils/ApiConfiguration';

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  // define state hooks
  const [user, setUser] = useState(false);
  const history = useHistory()

  //hooks first time run
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return history.push('/');
    hackerNewsApi.post('/verify', null, {
      headers: {
        authorization: token
      }
    })
      .then(({ data }) => setUser(data))
      .catch(() => history.push('/'))
  }, []);



  function handleSubmitUserLoginForm(formData) {
    hackerNewsApi.post('/login', formData)
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        setUser(data.userId);
        history.push('/');
      })
      .catch(error => console.log(error))
  };

  function handleSubmitUserSignUpForm(formData) {
    hackerNewsApi.post('/signup', formData)
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        setUser(data.userId);
        history.push('/');
      })
      .catch(error => console.log(error))
  };


  function handleLogout() {
    const token = localStorage.getItem('token')
    hackerNewsApi.post('/logout', null, {
      headers: {
        authorization: token
      }
    })
      .then(() => {
        localStorage.removeItem('token');
        setUser(0)
        history.push('/');
      })
      .catch(error => console.log(error))
  }

  return (
    <AuthContext.Provider value={{
      user,
      handleSubmitUserSignUpForm,
      handleSubmitUserLoginForm,
      handleLogout
    }}>
      {children}
    </AuthContext.Provider>
  )

}
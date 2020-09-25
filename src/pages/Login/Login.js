import React from 'react';
import './Login.scss';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../services/firebase';
import { useStateValue } from '../../services/StateProvider';
import { actionTypes } from '../../services/reducer';

const Login = () => {
  const [{}, dispatch] = useStateValue();
  
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(res => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        })
      })
      .catch(error => alert(error.message));
  };
  
  return (
    <div className='login'>
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
        <Button
          type='submit'
          onClick={signIn}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;
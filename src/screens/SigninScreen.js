import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { signin } from '../actions/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
export default function SigninScreen(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <div className='formtion tempimg'>
      <div className='signincard' style={{ height: '350px' }}>
        <form className="signinform" onSubmit={submitHandler}>
          <div>
            <label style={{ textAlign: 'center', fontSize: '18px' }}><i className="fa fa-user"></i>&nbsp;<b>Sign In</b></label>
          </div>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div>
            <label className="signinlabel" htmlFor="email">Email Address</label>
            <input style={{ margin: '0px 50px' }}
              type="email"
              id="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label className="signinlabel" htmlFor="password">Password</label>
            <input style={{ margin: '0px 50px' }}
              type="password"
              id="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <label />
            <button className="signsubmit" type="submit">
              Login
            </button>
          </div>
          <div>
            <label />
            <>
              <label className='reglink' style={{ textAlign: 'center' }}>
                New customer?&nbsp;&nbsp;{''}
                <span onClick={() => navigate("/register")}><b>Start here</b></span>
              </label>
            </>
          </div>
        </form>
      </div>
    </div>
  );
}
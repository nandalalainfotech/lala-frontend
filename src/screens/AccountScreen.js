import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { accountin } from '../actions/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import data from '../data';

export default function AccountScreen(props) {
  console.log("props", props)
  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/accountcreation';

  const userAccount = useSelector((state) => state.userAccount);
  const { userInfo, loading, error } = userAccount;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
   
    console.log("email",email);

    e.preventDefault();
    dispatch(accountin(email, password));

  };
  

  useEffect(() => {
    console.log("useraccount", data, userInfo);

    if (userInfo) {
    
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  

  return (

    <div className='row'>
      <div className='col-sm-3'>
        <div className='formation2'>
          <div className="formation2-body">
            <form className="form" onSubmit={submitHandler} >


              <div>
                <h1 className='code'>Let us create your free Amazon Business account</h1>
              </div>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
              <div>
                {/* <label htmlFor="email">Email address</label> */}
                <input
                //  autoComplete={'email' + Math.random()} 
                
                  type="email"
                  id="email"
                  pattern=".*"
                  placeholder="Enter email"
                  // pathName="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div>
                {/* <label htmlFor="password">Phone Number</label> */}
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <div>
                <button className="omg" onclick={submitHandler}>
                  Get Started
                </button>
              </div>
              <div>

                <div>
                  <h5><i>Make sure that you have information about your organisation to help us verify your business account faster..</i></h5>
                </div>
                <div>
                  <div className="tooltip">
                    Why is verification Needed? <i className="fa fa-chevron-down"></i>{''}
                    <span className="tooltiptext">To ensure that identity of yours and
                      other business remain secure,We always confirm new business registeration.</span>
                  </div>
                  <label />
                </div>

              </div>
            </form>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='formation1'>
            <div className="formation1-body">
              <h1>Reshape buying for your organisation</h1>
            </div>
            <div className='gst'>
              <h3 className='gst'> GST Invoice & Bulk Discounts</h3>
              <p className="gst1">Save up to 28% more with GST input credit and avail discounts on multi-unit purchases.</p>
            </div>
            <div>
              <h3 className='business'>Business Analytics</h3>
              <p>Track and monitor spending by your organisation with dynamic charts and data tables.</p>
            </div>
            <div>
              <h3 className='secure'> Secure Your Account</h3>
              <p>Add more colleagues to your account for making business purchases instead of sharing your login credentials.</p>
            </div>

            <img className="city" src="/image/ama5.jpg" alt=""></img>
            <div className="row center">

              <p className='robot'>Learn more about amazon Business{' '}</p>
            </div>
          </div>

        </div >
      </div>
    </div>


  );
}

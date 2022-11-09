import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTrimmers } from '../actions/trimmerAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Trimmer from '../components/Trimmer';
// import Product from '../components/Product';




export default function TrimmerScreens() {
  const dispatch = useDispatch();
  const trimmerList = useSelector((state) => state.trimmerList);
  console.log("called------->trimmerList",trimmerList);
  const { loading, error, trimmers } = trimmerList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listTrimmers({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>trimmer collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {trimmers.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {trimmers.map((trimmer) => (
              <Trimmer key={trimmer._id} trimmer={trimmer}></Trimmer>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

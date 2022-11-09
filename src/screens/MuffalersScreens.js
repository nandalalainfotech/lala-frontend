import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMuffalerss } from '../actions/muffalersAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Muffalers from '../components/Muffalers';
// import Product from '../components/Product';




export default function MuffalersScreens() {
  const dispatch = useDispatch();
  const muffalersList = useSelector((state) => state.muffalersList);
  console.log("called------->muffalersList",muffalersList);
  const { loading, error, muffalerss } = muffalersList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listMuffalerss({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>muffalers collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {muffalerss.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {muffalerss.map((muffalers) => (
              <Muffalers key={muffalers._id} muffalers={muffalers}></Muffalers>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

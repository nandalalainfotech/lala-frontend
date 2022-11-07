import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSherwanis } from '../actions/sherwaniAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Sherwani from '../components/Sherwani';
// import Product from '../components/Product';




export default function SherwaniScreens() {
  const dispatch = useDispatch();
  const sherwaniList = useSelector((state) => state.sherwaniList);
  console.log("called------->sherwaniList",sherwaniList);
  const { loading, error, sherwanis } = sherwaniList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listSherwanis({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>sherwani collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {sherwanis.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {sherwanis.map((sherwani) => (
              <Sherwani key={sherwani._id} sherwani={sherwani}></Sherwani>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSwimwears } from '../actions/swimwearAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Swimwear from '../components/Swimwear';
// import Product from '../components/Product';




export default function SwimWearScreens() {
  const dispatch = useDispatch();
  const swimwearList = useSelector((state) => state.swimwearList);
  console.log("called------->swimwearList",swimwearList);
  const { loading, error, swimwears } = swimwearList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listSwimwears({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>swimwear collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {swimwears.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {swimwears.map((swimwear) => (
              <Swimwear key={swimwear._id} swimwear={swimwear}></Swimwear>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

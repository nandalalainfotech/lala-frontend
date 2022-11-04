import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRainjackets } from '../actions/rainjacketAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rainjacket from '../components/Rainjacket';
// import Product from '../components/Product';




export default function RainjacketScreens() {
  const dispatch = useDispatch();
  const rainjacketList = useSelector((state) => state.rainjacketList);
  console.log("called------->rainjacketList",rainjacketList);
  const { loading, error, rainjackets } = rainjacketList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listRainjackets({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>rainjacket collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {rainjackets.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {rainjackets.map((rainjacket) => (
              <Rainjacket key={rainjacket._id} rainjacket={rainjacket}></Rainjacket>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

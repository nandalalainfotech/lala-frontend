import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listDeodarants } from '../actions/deodarantAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Deodarant from '../components/Deodarant';
// import Product from '../components/Product';




export default function DeodarantScreens() {
  const dispatch = useDispatch();
  const deodarantList = useSelector((state) => state.deodarantList);
  console.log("called------->deodarantList",deodarantList);
  const { loading, error, deodarants } = deodarantList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listDeodarants({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>deodarant collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {deodarants.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {deodarants.map((deodarant) => (
              <Deodarant key={deodarant._id} deodarant={deodarant}></Deodarant>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

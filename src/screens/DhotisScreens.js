import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listDhotiss } from '../actions/dhotisAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Dhotis from '../components/Dhotis';
// import Product from '../components/Product';




export default function DhotisScreens() {
  const dispatch = useDispatch();
  const dhotisList = useSelector((state) => state.dhotisList);
  console.log("called------->dhotisList",dhotisList);
  const { loading, error, dhotiss } = dhotisList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listDhotiss({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>Dhoti's collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {dhotiss.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {dhotiss.map((dhotis) => (
              <Dhotis key={dhotis._id} dhotis={dhotis}></Dhotis>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

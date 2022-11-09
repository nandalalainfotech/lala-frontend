import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPerfumes } from '../actions/perfumeAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Perfume from '../components/Perfume';
// import Product from '../components/Product';




export default function PerfumeScreens() {
  const dispatch = useDispatch();
  const perfumeList = useSelector((state) => state.perfumeList);
  console.log("called------->perfumeList",perfumeList);
  const { loading, error, perfumes } = perfumeList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listPerfumes({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>perfume collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {perfumes.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {perfumes.map((perfume) => (
              <Perfume key={perfume._id} perfume={perfume}></Perfume>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

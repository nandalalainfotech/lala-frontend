import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPhonecasess } from '../actions/phonecasesAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Phonecases from '../components/Phonecases';
// import Product from '../components/Product';




export default function PhonecasesScreens() {
  const dispatch = useDispatch();
  const phonecasesList = useSelector((state) => state.phonecasesList);
  console.log("called------->phonecasesList",phonecasesList);
  const { loading, error, phonecasess } = phonecasesList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listPhonecasess({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>phonecases collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {phonecasess.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {phonecasess.map((phonecases) => (
              <Phonecases key={phonecases._id} phonecases={phonecases}></Phonecases>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

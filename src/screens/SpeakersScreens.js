import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSpeakerss } from '../actions/speakersAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Speakers from '../components/Speakers';
// import Product from '../components/Product';




export default function SpeakersScreens() {
  const dispatch = useDispatch();
  const speakersList = useSelector((state) => state.speakersList);
  console.log("called------->speakersList",speakersList);
  const { loading, error, speakerss } = speakersList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listSpeakerss({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>speakers collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {speakerss.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {speakerss.map((speakers) => (
              <Speakers key={speakers._id} speakers={speakers}></Speakers>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

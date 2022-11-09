import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTiless } from '../actions/tilesAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Tiles from '../components/Tiles';
// import Product from '../components/Product';




export default function TilesScreens() {
  const dispatch = useDispatch();
  const tilesList = useSelector((state) => state.tilesList);
  console.log("called------->tilesList",tilesList);
  const { loading, error, tiless } = tilesList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listTiless({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>tiles collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {tiless.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {tiless.map((tiles) => (
              <Tiles key={tiles._id} tiles={tiles}></Tiles>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

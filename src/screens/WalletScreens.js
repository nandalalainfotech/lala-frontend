import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listWallets } from '../actions/walletAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Wallet from '../components/Wallet';
// import Product from '../components/Product';




export default function WalletScreens() {
  const dispatch = useDispatch();
  const walletList = useSelector((state) => state.walletList);
  console.log("called------->walletList",walletList);
  const { loading, error, wallets } = walletList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listWallets({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>wallet collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {wallets.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {wallets.map((wallet) => (
              <Wallet key={wallet._id} wallet={wallet}></Wallet>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

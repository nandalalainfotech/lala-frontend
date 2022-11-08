import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listKurtas } from '../actions/kurtasAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Kurtas from '../components/Kurtas';


export default function KurtasScreens() {
  const dispatch = useDispatch();
  const kurtasList = useSelector((state) => state.kurtasList);
  console.log("called------->kurtasList",kurtasList);
  const { loading, error, kurtass } = kurtasList;
  
  useEffect(() => {
    dispatch(listKurtas({}));
   
  }, [dispatch]);
  return (
    <div>
      <h2>Kurtas collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {kurtass.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {kurtass.map((kurtas) => (
              <Kurtas key={kurtas._id} kurtas={kurtas}></Kurtas>
            ))}
          </div>
        </>
      )}
    </div >
  );
}

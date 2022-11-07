import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listNehrus } from '../actions/nehruAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Nehru from '../components/Nehru';


export default function NehruScreens() {
  const dispatch = useDispatch();
  const nehruList = useSelector((state) => state.nehruList);
  console.log("called------->nehruList",nehruList);
  const { loading, error, nehrus } = nehruList;
  
  useEffect(() => {
    dispatch(listNehrus({}));
   
  }, [dispatch]);
  return (
    <div>
      <h2>Nehru collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {nehrus.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {nehrus.map((nehru) => (
              <Nehru key={nehru._id} nehru={nehru}></Nehru>
            ))}
          </div>
        </>
      )}
    </div >
  );
}

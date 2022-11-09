// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import LoadingBox from "../components/LoadingBox";
// import MessageBox from "../components/MessageBox";
// import Rating from "../components/Rating";
// import { createReview, detailsTshirt } from "../actions/tshirtAction";

// // import ModalImage from "react-modal-image";
// import ReactImageMagnify from "react-image-magnify";
// import { TSHIRT_REVIEW_CREATE_RESET } from "../constants/tshirtConstants";

// export default function TshirtScreen(props) {
//   console.log("catshirt");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const params = useParams();
//   const { id: tshirtId } = params;
//   console.log("called--->>tshirtId",params);
//   const [qty, setQty] = useState(1);
//   const tshirtDetails = useSelector((state) => state.tshirtDetails);
//   const { loading, error, tshirt } = tshirtDetails;
//   const userSignin = useSelector((state) => state.userSignin);
//   const { userInfo } = userSignin;
//   const tshirtReviewCreate = useSelector((state) => state.tshirtReviewCreate);
//   const {

//     loading: loadingReviewCreate,
//     error: errorReviewCreate,
//     success: successReviewCreate,
//   } = tshirtReviewCreate;
  
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   // const [selectedImage, setSelectedImage] = useState('');
//   useEffect(() => {
//     if (successReviewCreate) {
//       window.alert("Review Submitted Successfully");
//       setRating("");
//       setComment("");
//       dispatch({ type: TSHIRT_REVIEW_CREATE_RESET });
//     }
//     dispatch(detailsTshirt(tshirtId));
//   }, [dispatch, tshirtId, successReviewCreate]);
//   const addToCartHandler = () => {
//     navigate(`/cart/${tshirtId}?qty=${qty}`);
//   };
// console.log("called-->addToCartHandler",tshirtId);
//   const submitHandler = (e) => {
    
//     e.preventDefault();
//     if (comment && rating) {
//       dispatch(
//         createReview(tshirtId, { rating, comment, name: userInfo.name })
//       );
//     } else {
//       alert("Please enter comment and rating");
//     }
//   };

//   return (
//     <div>
//       {loading ? (
//         <LoadingBox></LoadingBox>
//       ) : error ? (
//         <MessageBox variant="danger">{error}</MessageBox>
//       ) : (
//         <div>
//           <div className="row top" style={{ marginTop: "40px" }}>
//             <div className="cards" style={{ position: "sticky", top: "80px" }}>
//               <div className="col-2">
//                 <ReactImageMagnify
//                   {...{
//                     smallImage: {
//                       className: "large",
//                       src: tshirt.image,
//                       width: 380,
//                       height: 480,
//                     },
//                     largeImage: {
//                       className: "small",
//                       src: tshirt.image,
//                       width: 600,
//                       height: 600,
//                     },
//                   }}
//                 />
//               </div>
//             </div>

//             <div className="col-1">
//               {/* <Link to="/">
//                 <h2>Back to result</h2>
//               </Link> */}
//               <div className="card card-body">
//                 <div className="step1">
//                   <ul>
//                     <li>
//                       <h1 style={{ textTransform: "uppercase" }}>
//                         {tshirt.name}
//                       </h1>
//                     </li>
//                     <li>
//                       <Rating
//                         rating={tshirt.rating}
//                         numReviews={tshirt.numReviews}
//                       ></Rating>
//                     </li>
//                     <li>Price : ₹{tshirt.price}</li>
//                     <li>
//                       Category:
//                       <span> {tshirt.category}</span>
//                     </li>
//                     <li>
//                       Brand:
//                       <span> {tshirt.brand}</span>
//                     </li>
//                     <li>
//                       Description:
//                       <span> {tshirt.description}</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="step2">
//                 <div className="card card-body" style={{ marginTop: '40px' }}>
//                   <ul>
//                     <li>
//                       <div className="row">
//                         <div>Price</div>
//                         <div className="price">₹{tshirt.price}</div>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="row">
//                         <div>Status</div>
//                         <div>
//                           {tshirt.countInStock > 0 ? (
//                             <span className="success">In Stock</span>
//                           ) : (
//                             <span className="danger">Unavailable</span>
//                           )}
//                         </div>
//                       </div>
//                     </li>
//                     {tshirt.countInStock > 0 && (
//                       <>
//                         <li>
//                           <div className="row">
//                             <div>Qty</div>
//                             <div>
//                               <select
//                                 value={qty}
//                                 onChange={(e) => setQty(e.target.value)}
//                               >
//                                 {[...Array(tshirt.countInStock).keys()].map(
//                                   (x) => (
//                                     <option key={x + 1} value={x + 1}>
//                                       {x + 1}
//                                     </option>
//                                   )
//                                 )}
//                               </select>
//                             </div>
//                           </div>
//                         </li>
//                         <li>
//                           <button
//                             onClick={addToCartHandler}
//                             className="primary block"
//                           >
//                             Add to Cart
//                           </button>
//                         </li>
//                       </>
//                     )}
//                   </ul>
//                 </div>
//               </div>

//               <div className="card card-body" style={{ marginTop: '40px' }}>
//                 <div className="step3">
//                   <h2 style={{ marginLeft: "20px" }}>Reviews & Ratings</h2>
//                   {tshirt.reviews.length === 0 && (
//                     <MessageBox>There is no review</MessageBox>
//                   )}
//                 </div>

//                 <div className="step3">
//                   <ul>
//                     {tshirt.reviews.map((review) => (
//                       <li key={review._id}>
//                         <strong>{review.name}</strong>
//                         <p>
//                           <Rating rating={review.rating} caption=" "></Rating>
//                         </p>
//                         <p>{review.createdAt.substring(0, 10)}</p>
//                         <p>{review.comment}</p>
//                       </li>
//                     ))}
//                     <li>
//                       {userInfo ? (
//                         <form className="form" onSubmit={submitHandler}>
//                           <div>
//                             <h2>Write a customer review</h2>
//                           </div>
//                           <div>
//                             <label htmlFor="rating">Rating</label>
//                             <select
//                               id="rating"
//                               value={rating}
//                               onChange={(e) => setRating(e.target.value)}
//                             >
//                               <option value="">Select...</option>
//                               <option value="1">1- Poor</option>
//                               <option value="2">2- Fair</option>
//                               <option value="3">3- Good</option>
//                               <option value="4">4- Very good</option>
//                               <option value="5">5- Excelent</option>
//                             </select>
//                           </div>
//                           <div>
//                             <label htmlFor="comment">Comment</label>
//                             <textarea
//                               id="comment"
//                               value={comment}
//                               onChange={(e) => setComment(e.target.value)}
//                             ></textarea>
//                           </div>
//                           <div>
//                             <label />
//                             <button className="primary" type="submit">
//                               Submit
//                             </button>
//                           </div>
//                           <div>
//                             {loadingReviewCreate && <LoadingBox></LoadingBox>}
//                             {errorReviewCreate && (
//                               <MessageBox variant="danger">
//                                 {errorReviewCreate}
//                               </MessageBox>
//                             )}
//                           </div>
//                         </form>
//                       ) : (
//                         <MessageBox>
//                           Please <Link to="/signin">Sign In</Link> to write a
//                           review
//                         </MessageBox>
//                       )}
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";
import { createReview, detailsTshirt } from "../actions/tshirtAction";
import { TSHIRT_REVIEW_CREATE_RESET } from "../constants/tshirtConstants";
// import ModalImage from "react-modal-image";
import ReactImageMagnify from 'react-image-magnify';
import data from "../data";


export default function TshirtScreen(props) {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { id: tshirtId } = params;
  const [qty, setQty] = useState(1);
  const tshirtDetails = useSelector((state) => state.tshirtDetails);
  const { loading, error, tshirt } = tshirtDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


  const tshirtReviewCreate = useSelector((state) => state.tshirtReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = tshirtReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  // const [selectedImage, setSelectedImage] = useState('');
  useEffect(() => {
    if (successReviewCreate) {
      window.alert('Review Submitted Successfully');
      setRating('');
      setComment('');
      dispatch({ type: TSHIRT_REVIEW_CREATE_RESET });
    }
    dispatch(detailsTshirt(tshirtId));
  }, [dispatch, tshirtId, successReviewCreate]);
  const addToCartHandler = () => {
    navigate(`/cart/${tshirtId}?qty=${qty}`);
  };


  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(tshirtId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert('Please enter comment and rating');
    }
  };


  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div >
          <Link to="/">Back to result</Link>
          <div className="row top">
            <div className="col-2">
            
               <ReactImageMagnify {...{
                smallImage: {
                  className: "large",
                  src: tshirt.image,
                  width: 300,
                  height: 400,

                },
                largeImage: {
                  className: "small",
                  src: tshirt.image,
                  width: 600,
                  height: 600,

                },


              }} />

            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{tshirt.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={tshirt.rating}
                    numReviews={tshirt.numReviews}
                  ></Rating>
                </li>
                <li>Pirce : ${tshirt.price}</li>
               
                <li>
                  Description:
                  <p>{tshirt.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${tshirt.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {tshirt.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {tshirt.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(tshirt.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 id="reviews">Reviews</h2>
            {tshirt.reviews.length === 0 && (
              <MessageBox>There is no review</MessageBox>
            )}
            <ul>
              {tshirt.reviews.map((review) => (
                <li key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating rating={review.rating} caption=" "></Rating>
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
              <li>
                {userInfo ? (
                  <form className="form" onSubmit={submitHandler}>
                    <div>1
                      <h2>Write a customer review</h2>
                    </div>
                    <div>
                      <label htmlFor="rating">Rating</label>
                      <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      > 
                        <option  value="">Select...</option>
                        <option className="Rating" value="1">1     - Not intrested</option>
                        <option className="Rating" value="1.5">1.5 - Poor</option>
                        <option className="Rating" value="2">2     - Fair</option>
                        <option className="Rating" value="2.5">2.5 - Nice</option>
                        <option className="Rating" value="3">3     - Good</option>
                        <option className="Rating" value="3.5">3.5 - Very Good</option>
                        <option className="Rating" value="4">4     - Exelent</option>
                        <option className="Rating" value="4.5">4.5 - Outstanding</option>
                        <option className="Rating" value="5">5     - Marvelous</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label />
                      <button className="primary" type="submit">
                        Submit
                      </button>
                    </div>
                    <div>
                      {loadingReviewCreate && <LoadingBox></LoadingBox>}
                      {errorReviewCreate && (
                        <MessageBox variant="danger">
                          {errorReviewCreate}
                        </MessageBox>
                      )}
                    </div>
                  </form>
                ) : (
                  <MessageBox>
                    Please <Link to="/signin">Sign In</Link> to write a review
                  </MessageBox>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

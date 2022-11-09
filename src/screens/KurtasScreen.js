import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";
import { createReview, detailsKurtas } from "../actions/kurtasAction";

// import ModalImage from "react-modal-image";
import ReactImageMagnify from "react-image-magnify";
import { KURTAS_REVIEW_CREATE_RESET } from "../constants/kurtasConstants";

export default function KurtasScreen(props) {
  console.log("kurtas");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { id: kurtasId } = params;
  console.log("called--->>kurtasId",params);
  const [qty, setQty] = useState(1);
  const kurtasDetails = useSelector((state) => state.kurtasDetails);
  const { loading, error, kurtas } = kurtasDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const kurtasReviewCreate = useSelector((state) => state.kurtasReviewCreate);
  const {

    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = kurtasReviewCreate;
  
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  // const [selectedImage, setSelectedImage] = useState('');
  useEffect(() => {
    if (successReviewCreate) {
      window.alert("Review Submitted Successfully");
      setRating("");
      setComment("");
      dispatch({ type: KURTAS_REVIEW_CREATE_RESET });
    }
    dispatch(detailsKurtas(kurtasId));
  }, [dispatch, kurtasId, successReviewCreate]);
  const addToCartHandler = () => {
    navigate(`/cart/${kurtasId}?qty=${qty}`);
  };
console.log("called-->addToCartHandler",kurtasId);
  const submitHandler = (e) => {
    
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(kurtasId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert("Please enter comment and rating");
    }
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="row top" style={{ marginTop: "40px" }}>
            <div className="cards" style={{ position: "sticky", top: "80px" }}>
              <div className="col-2">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      className: "large",
                      src: kurtas.image,
                      width: 380,
                      height: 480,
                    },
                    largeImage: {
                      className: "small",
                      src: kurtas.image,
                      width: 600,
                      height: 600,
                    },
                  }}
                />
              </div>
            </div>

            <div className="col-1">
              {/* <Link to="/">
                <h2>Back to result</h2>
              </Link> */}
              <div className="card card-body">
                <div className="step1">
                  <ul>
                    <li>
                      <h1 style={{ textTransform: "uppercase" }}>
                        {kurtas.name}
                      </h1>
                    </li>
                    <li>
                      <Rating
                        rating={kurtas.rating}
                        numReviews={kurtas.numReviews}
                      ></Rating>
                    </li>
                    <li>Price : ₹{kurtas.price}</li>
                    <li>
                      Category:
                      <span> {kurtas.category}</span>
                    </li>
                    <li>
                      Brand:
                      <span> {kurtas.brand}</span>
                    </li>
                    <li>
                      Description:
                      <span> {kurtas.description}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="step2">
                <div className="card card-body" style={{ marginTop: '40px' }}>
                  <ul>
                    <li>
                      <div className="row">
                        <div>Price</div>
                        <div className="price">₹{kurtas.price}</div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div>Status</div>
                        <div>
                          {kurtas.countInStock > 0 ? (
                            <span className="success">In Stock</span>
                          ) : (
                            <span className="danger">Unavailable</span>
                          )}
                        </div>
                      </div>
                    </li>
                    {kurtas.countInStock > 0 && (
                      <>
                        <li>
                          <div className="row">
                            <div>Qty</div>
                            <div>
                              <select
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {[...Array(kurtas.countInStock).keys()].map(
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

              <div className="card card-body" style={{ marginTop: '40px' }}>
                <div className="step3">
                  <h2 style={{ marginLeft: "20px" }}>Reviews & Ratings</h2>
                  {kurtas.reviews.length === 0 && (
                    <MessageBox>There is no review</MessageBox>
                  )}
                </div>

                <div className="step3">
                  <ul>
                    {kurtas.reviews.map((review) => (
                      <li key={review._id}>
                        <strong>{review.name}</strong>
                        <p>
                          <Rating rating={review.rating} caption=" "></Rating>
                        </p>
                        <p>{review.createdAt.substring(0, 10)}</p>
                        <p>{review.comment}</p>
                      </li>
                    ))}
                    <li>
                      {userInfo ? (
                        <form className="form" onSubmit={submitHandler}>
                          <div>
                            <h2>Write a customer review</h2>
                          </div>
                          <div>
                            <label htmlFor="rating">Rating</label>
                            <select
                              id="rating"
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                            >
                              <option value="">Select...</option>
                              <option value="1">1- Poor</option>
                              <option value="2">2- Fair</option>
                              <option value="3">3- Good</option>
                              <option value="4">4- Very good</option>
                              <option value="5">5- Excelent</option>
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
                          Please <Link to="/signin">Sign In</Link> to write a
                          review
                        </MessageBox>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

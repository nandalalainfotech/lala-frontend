import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from 'axios';
import { detailsNehru, updateNehru } from "../actions/nehruAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import { NEHRU_UPDATE_RESET } from "../constants/nehruConstants";



export default function NehruEditScreen(props) {
  const navigate = useNavigate();
  const params = useParams();
  const { id: nehruId } = params;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  // const [images, setImages] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const nehruDetails = useSelector((state) => state.nehruDetails);
  const { loading, error, nehru } = nehruDetails;
  const nehruUpdate = useSelector((state) => state.nehruUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = nehruUpdate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      navigate('/nehrulist');
    }
    if (!nehru || nehru._id !== nehruId || successUpdate) {
      dispatch({ type: NEHRU_UPDATE_RESET });
      dispatch(detailsNehru(nehruId));
    } else {
      setName(nehru.name);
      setPrice(nehru.price);
      setImage(nehru.image);
      setCategory(nehru.category);
      setCountInStock(nehru.countInStock);
      setBrand(nehru.brand);
      setDescription(nehru.description);
    }
  }, [nehru, dispatch, nehruId, navigate, successUpdate]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateNehru({
        _id: nehruId,
        name,
        price,
        image,
        category,
        brand,
        countInStock,
        description,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    console.log("xxx", e);
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      console.log("iii.....", setImage);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit nehru {nehruId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Images"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="countInStock">Count In Stock</label>
              <input
                id="countInStock"
                type="text"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

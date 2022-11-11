import Axios from 'axios';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigate,
  useParams
} from "react-router-dom";
import { createProduct, updateProduct, detailsProduct } from "../actions/productAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";


export default function ProductEditScreen(props) {
  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState();
  const [category, setCategory] = useState("");
  const [categorygroup, setCategorygroup] = useState("");
  const [categorytype, setCategorytype] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const productUpdate = useSelector((state) => state.productUpdate);
  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!product && productId) {
      dispatch(detailsProduct(productId));
    }

    if(product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setCategory(product.category);
      setCategorygroup(product.categorygroup);
      setCategorytype(product.categorytype);
      setCountInStock(product.countInStock);
      setBrand(product.brand);
      setDescription(product.description);
    }

    if (successUpdate || successCreate) {
      navigate('/productlist');
    }
  }, [product,productId, dispatch,navigate, successUpdate, successCreate]);

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        imageFile,
        category,
        categorygroup,
        categorytype,
        brand,
        countInStock,
        description,
      })
    );
  };
  const createHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct({
        name,
        price,
        image,
        imageFile,
        category,
        categorygroup,
        categorytype,
        brand,
        countInStock,
        description,
      })
    );
  }

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      if(!product && !productId){
       const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
          Product: `Bearer ${product}`,
        },
       }); 
       setImage(data.image.originalname);
       setImageFile(data.image);   
      }
      if(product){
        const { data } = await Axios.put(`/api/uploads/${product.fileId}`, bodyFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${userInfo.token}`,
            Product: `Bearer ${product}`,
          },
         }); 
         setImage(data.image.originalname);
         setImageFile(data.image); 
      }
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  
  return (
    <div>
      <form className="form" >
        {/* {productId ? <h1>Edit Product {productId}</h1> : <h1>Create Product</h1>} */}
        {(loadingCreate || loadingUpdate) && <LoadingBox></LoadingBox>}
        {(errorCreate || errorUpdate) && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {!product && !productId ?(
          <>
          <div>
          <h1>Create Product</h1>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="text"
              placeholder="Enter price"
              onChange={(e) => setPrice(e.target.value)}
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
            <label htmlFor="category">Category</label>
            <input
              id="category"
              type="text"
              placeholder="Enter category"
              onChange={(e) => setCategory(e.target.value)}
            ></input>
          </div>
          <div>
          <label htmlFor="category group">Category group</label>
            <input
              id="category group"
              type="text"
              placeholder="Enter category group"
              onChange={(e) => setCategorygroup(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="category group text">Category text</label>
            <input
              id="category text"
              type="text"
              placeholder="Enter category  text"
              onChange={(e) => setCategorytype(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="brand">Brand</label>
            <input
              id="brand"
              type="text"
              placeholder="Enter brand"
              onChange={(e) => setBrand(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="countInStock">Count In Stock</label>
            <input
              id="countInStock"
              type="text"
              placeholder="Enter countInStock"
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
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label></label>
            <button className="primary" type="submit"  onClick={createHandler}>
              Create
            </button>
          </div>
        </>
        ) : product? (
          <>
            <div>
            <h1>Edit Product {productId}</h1>
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
            <label htmlFor="category group">Category group</label>
              <input
                id="category group"
                type="text"
                placeholder="Enter category group"
                value={categorygroup}
                onChange={(e) => setCategorygroup(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="category group text">Category text</label>
              <input
                id="category text"
                type="text"
                placeholder="Enter category  text"
                value={categorytype}
                onChange={(e) => setCategorytype(e.target.value)}
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
              <button className="primary" type="submit"  onClick={updateHandler}>
              Update
              </button>
            </div>
          </>
        ) :<div><LoadingBox></LoadingBox></div>
      }
      </form>
    </div>
  );
}

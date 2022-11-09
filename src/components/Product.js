import React ,{ useEffect ,useState }from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import Axios from 'axios';


export default function Product(props) {
  const { product } = props;
  const [image, setImage] = useState()

  useEffect(() => {
    async function fetchData() {
      const  imageData =  await Axios.get(`/api/uploads/show/${product._id}`, { responseType: 'blob' });
      setImage(URL.createObjectURL(imageData.data));
    }
    fetchData();
  }, [product]); 
  
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="price">₹{product.price}</div>
      </div>
    </div>
  );
}
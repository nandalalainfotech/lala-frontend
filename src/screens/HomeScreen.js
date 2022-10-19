import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productAction';
import { listTopSellers } from '../actions/userAction';
// import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';



export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  // console.log(productList)
  const { loading, error, products } = productList;
  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;


  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);
  return (
    <div>

      <div className='convey'>
        <h2>Top Sellers</h2>
        {loadingSellers ? (
          <LoadingBox></LoadingBox>
        ) : errorSellers ? (
          <MessageBox variant="danger">{errorSellers}</MessageBox>
        ) : (
          <>
            {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}

            {sellers.map((seller) => (

              <div key={seller._id}>

                {/* <div className="carousel-item"> */}

                <Carousel showArrows autoPlay showThumbs={false}>
                  {/* <Carousel showArrows active showThumbs={true}> */}
                  <Link to={`/seller/${seller._id}`}>


                    <img className='sellerimg' src={seller.seller.logo1} alt={seller.seller.name} />

                    <img className='sellerimg' src={seller.seller.logo2} alt={seller.seller.name} />

                    <img className='sellerimg' src={seller.seller.logo3} alt={seller.seller.name} />

                    <img className='sellerimg' src={seller.seller.logo4} alt={seller.seller.name} />


                  </Link>

                  <Link to={`/seller/${seller._id}`}>


                    <img className='sellerimg' src={seller.seller.logo1} alt={seller.seller.name} />

                    <img className='sellerimg' src={seller.seller.logo2} alt={seller.seller.name} />

                    <img className='sellerimg' src={seller.seller.logo3} alt={seller.seller.name} />

                    <img className='sellerimg' src={seller.seller.logo4} alt={seller.seller.name} />


                  </Link>

                </Carousel>


              </div>

              // </div>
            ))}

          </>
        )
        }
      </div>



      <h2>Men's collection</h2>
      {
        loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
            {/* {sarees.length === 0 && <MessageBox>No Product Found</MessageBox>} */}
            <div className="row center">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
            {/* <div className="row center">
              {sarees.map((saree) => (
                <Saree key={saree._id} product={saree}></Saree>
              ))}
            </div> */}

          </>
        )
      }
      {/* <h2>Men's collection</h2> */}

      <h2>Women's collection</h2>

      <div className='armour'>
        <div className="carousel-item">
          <Carousel   showThumbs={false}>
            <div className='row'>

              <div className='col-sm-2'>
                <div className="card1">
                  <img src="/image/p7.jpg" alt="Avatar" height="300px" />


                  <div className="container">
                    <div className="Name">
                      <p>purly saree</p>
                    </div>
                    <div className="rating">
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star-half-o"></i></span>
                    </div>
                    <div className="price">
                      $580
                    </div>
                    {/* <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p> */}
                  </div>
                </div>
              </div>
              <div className='col-sm-2'>
                <div className="card2">
                  <img src="/image/p8.jpg" alt="Avatar" height="300px" />
                  <div className="container">
                    <div className="Name">
                      <p>traditional saree</p>
                    </div>
                    <div className="rating">
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star-half-o"></i></span>
                    </div>
                    <div className="price">
                      $420
                    </div>
                    {/* <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p> */}
                  </div>
                </div>
              </div>
              <div className='col-sm-2'>
                <div className="card3">
                  <img src="/image/p9.jpg" alt="Avatar" height="300px" />
                  <div className="container">
                    <div className="Name">
                      <p>maskar saree</p>
                    </div>
                    <div className="rating">
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      {/* <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span> */}
                      <span><i className="fa fa-star-half-o"></i></span>
                    </div>
                    <div className="price">
                      $720
                    </div>
                    {/* <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p> */}
                  </div>
                </div>
              </div>
              <div className='col-sm-2'>
                <div className="card4">
                  <img src="/image/p91.jpg" alt="Avatar" height="300px" />
                  <div className="container">
                    <div className="Name">
                      <p>Pinaky saree</p>
                    </div>
                    <div className="rating">
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      {/* <span><i className="fa fa-star"></i></span> */}
                      <span><i className="fa fa-star-half-o"></i></span>
                    </div>
                    <div className="price">
                      $920
                    </div>

                  </div>
                </div>
              </div>

            </div>
            <div className='row'>

              <div className='col-sm-2'>
                <div className="card1">
                  <img src="/image/p10.jpg" alt="Avatar" height="300px" />


                  <div className="container">
                    <div className="Name">
                      <p>paper saree</p>
                    </div>
                    <div className="rating">
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star-half-o"></i></span>
                    </div>
                    <div className="price">
                      $580
                    </div>
                    {/* <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p> */}
                  </div>
                </div>
              </div>
              <div className='col-sm-2'>
                <div className="card2">
                  <img src="/image/p11.jpg" alt="Avatar" height="300px" />
                  <div className="container">
                    <div className="Name">
                      <p>maska saree</p>
                    </div>
                    <div className="rating">
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star-half-o"></i></span>
                    </div>
                    <div className="price">
                      $420
                    </div>
                    {/* <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p> */}
                  </div>
                </div>
              </div>
              <div className='col-sm-2'>
                <div className="card3">
                  <img src="/image/p12.jpg" alt="Avatar" height="300px" />
                  <div className="container">
                    <div className="Name">
                      <p>arutha saree</p>
                    </div>
                    <div className="rating">
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      {/* <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span> */}
                      <span><i className="fa fa-star-half-o"></i></span>
                    </div>
                    <div className="price">
                      $720
                    </div>
                    {/* <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p> */}
                  </div>
                </div>
              </div>
              <div className='col-sm-2'>
                <div className="card4">
                  <img src="/image/p45.jpg" alt="Avatar" height="300px" />
                  <div className="container">
                    <div className="Name">
                      <p>jimka saree</p>
                    </div>
                    <div className="rating">
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      {/* <span><i className="fa fa-star"></i></span> */}
                      <span><i className="fa fa-star-half-o"></i></span>
                    </div>
                    <div className="price">
                      $920
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </Carousel>
        </div>
      </div>
      <h2>Kid's collection</h2>
      <div className='container'>
        <div className='row'>

          <div className='col-sm-2'>
            <div className="card5">
              <img src="/image/kid5.jpg" alt="Avatar" height="300px" />


              <div className="container">
                <div className="Name">
                  <p>angel medi</p>
                </div>
                <div className="rating">
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star-half-o"></i></span>
                </div>
                <div className="price">
                  $980
                </div>
                {/* <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p> */}
              </div>
            </div>
          </div>
          <div className='col-sm-2'>
            <div className="card6">
              <img src="/image/kid2.jpg" alt="Avatar" height="300px" />
              <div className="container">
                <div className="Name">
                  <p>hansa inskert</p>
                </div>
                <div className="rating">
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star-half-o"></i></span>
                </div>
                <div className="price">
                  $520
                </div>
                {/* <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p> */}
              </div>
            </div>
          </div>
          <div className='col-sm-2'>
            <div className="card7">
              <img src="/image/kid3.jpg" alt="Avatar" height="300px" />
              <div className="container">
                <div className="Name">
                  <p>umberalla harie</p>
                </div>
                <div className="rating">
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  {/* <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span> */}
                  <span><i className="fa fa-star-half-o"></i></span>
                </div>
                <div className="price">
                  $920
                </div>
                {/* <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p> */}
              </div>
            </div>
          </div>
          <div className='col-sm-2'>
            <div className="card8" >
              <img src="/image/kid4.jpg" alt="aval8" height="300px" />
              <div className="container">
                <div className="Name">
                  <p>classic medie</p>
                </div>
                <div className="rating">
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  {/* <span><i className="fa fa-star"></i></span> */}
                  <span><i className="fa fa-star-half-o"></i></span>
                </div>
                <div className="price">
                  $1220
                </div>
                {/* <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p> */}
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* {
        loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {sarees.length === 0 && <MessageBox>No Product Found</MessageBox>}
            <div className="row center">
              {products.map((saree) => (
                <Saree key={saree._id} saree={saree}></Saree>
              ))}
            </div>


          </>
        )
      } */}



    </div >


  );
}

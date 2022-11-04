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
import { listKids } from '../actions/kidAction';
import { listWomens } from '../actions/womenAction';
import Women from '../components/women';
import Kid from '../components/Kid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const womenList = useSelector((state) => state.womenList);
  const { womens } = womenList;
  const kidList = useSelector((state) => state.kidList);
  const { loading, error, kids } = kidList;
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;
  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listKids({}));
    dispatch(listWomens({}));
    dispatch(listTopSellers());
  }, [dispatch]);



  var settings = {
    autoplay: true,
    autoplaySpeed: 1300,
    pauseOnFocus: true,
    pauseOnHover: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    variableWidth: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>

      <div className='convey'>
        {/* <img src="../image/ama1.jpg" alt="home" height="500px" width="1320px"/> */}
        <h2>Top Sellers</h2>
        {loadingSellers ? (
          <LoadingBox></LoadingBox>
        ) : errorSellers ? (
          <MessageBox variant="danger">{errorSellers}</MessageBox>
        ) : (
          <>
            {sellers?.length === 0 && <MessageBox>No Seller Found</MessageBox>}

            {sellers?.map((seller) => (

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
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <Slider {...settings}>
            {products?.map((product) => (
              <div >
                <Product key={product._id} product={product}></Product>
              </div>
            ))}
          </Slider>
        </>
      )}

      <h2>Women collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {womens?.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {womens?.map((women) => (
              <Women key={women._id} women={women}></Women>
            ))}
          </div>
        </>
      )}

      <h2>Kids collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {kids?.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {kids?.map((kid) => (
              <Kid key={kid._id} kid={kid}></Kid>
            ))}
          </div>
        </>
      )}



    </div >


  );
}

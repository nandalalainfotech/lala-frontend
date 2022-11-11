import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import { listTopSellers } from "../actions/userAction";
// import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { listKids } from "../actions/kidAction";
import { listWomens } from "../actions/womenAction";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const userTopSellersList = useSelector((state) => state.userTopSellersList);

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
    autoplay: false,
    autoplaySpeed: 1300,
    pauseOnFocus: true,
    pauseOnHover: true,
    dots: false,
    arrows: true,
    infinite: false,
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div>
      <div className="convey">
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
                <Carousel showArrows autoPlay showThumbs={false} infiniteLoop={true} > 
                  <Link to={`/seller`}>
                    <ul data-slides>
                      <li className="slide" >
                        <img className="sellerimg" src="/image/p10.jpg" alt="Sarees" />

                        <img className="sellerimg" src="/image/p91.jpg" alt="Sarees" />

                        <img className="sellerimg" src="/image/sa4.jpg" alt="Sarees" />

                        <img className="sellerimg" src="/image/p11.jpg" alt="Sarees" />
                      </li>
                    </ul>
                  </Link>

                  <Link to={`/seller`}>
                    <ul>
                      <li className="slide" data-active>
                        <img className="sellerimg" src="/image/p12.jpg" alt="Sarees" />

                        <img className="sellerimg" src="/image/sa5.jpg" alt="Sarees" />

                        <img className="sellerimg" src="/image/sa9.jpg" alt="Sarees" />

                        <img className="sellerimg" src="/image/sa10.jpg" alt="Sarees" />
                      </li>
                    </ul>
                  </Link>
                </Carousel>
              </div>
            ))}
          </>
        )}
      </div>

      <h2 className="product">Product's Collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <Slider {...settings}>
            {products?.map((menProduct) => (
              <div>
                <Product key={menProduct._id} product={menProduct}></Product>
              </div>
            ))}
          </Slider>
        </>
      )}

      <h2  className="product" >Men's collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <Slider {...settings}>
            {products?.filter((menProduct) => {
                return menProduct.category === "men";
              })
              .map((menProduct) => (
                <div>
                  <Product key={menProduct._id} product={menProduct}></Product>
                </div>
              ))}
          </Slider>
        </>
      )}

      <h2 className="product">Women's collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <Slider {...settings}>
            {products?.filter((product) => {
                return product.category === "women";
              })
              .map((product) => (
                <div>
                  <Product key={product._id} product={product}></Product>
                </div>
              ))}
          </Slider>
        </>
      )}

      <h2 className="product">Kid's collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <Slider {...settings}>
            {products?.filter((kidProduct) => {
                return kidProduct?.category === "Kids";
              })
              .map((kidProduct) => (
                <div>
                  <Product key={kidProduct._id} product={kidProduct}></Product>
                </div>
              ))}
          </Slider>
        </>
      )}
    </div>
  );
}

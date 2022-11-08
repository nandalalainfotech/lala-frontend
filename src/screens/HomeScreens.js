import React from 'react';
import Kid from '../components/Kid';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';




// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
// import { useDispatch, useSelector } from 'react-redux';
// import { listTopSellers } from '../actions/userAction';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// import { Link } from 'react-router-dom';
// import Tshirt from '../components/Tshirt';
// import { listTshirts } from '../actions/tshirtAction';



export default function TshirtScreens(props) {
  // const dispatch = useDispatch();
  // const tshirtList = useSelector((state) => state.tshirtList);
  // // console.log(productList)
  // const { loading, error, tshirts } = tshirtList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  // const {
  //     loading: loadingSellers,
  //     error: errorSellers,
  //     users: sellers,
  // } = userTopSellersList;
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;

  // useEffect(() => {
  //     dispatch(listTshirts({}));
  //     dispatch(listTopSellers());
  // }, [dispatch]);
  return (

    <div>
      <p> dsdgg</p>

      <h2>Kids collection</h2>
      {/* {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {kids.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {kids.map((kid) => (
              <Kid key={kid._id} kid={kid}></Kid>
            ))}
          </div>
        </>
      )} */}
    </div>
    // <div>

    //     <div className='convey'>
    //         {/* <img src="../image/ama1.jpg" alt="home" height="500px" width="1320px"/> */}
    //         <h2>Top Sellers</h2>
    //         {loadingSellers ? (
    //             <LoadingBox></LoadingBox>
    //         ) : errorSellers ? (
    //             <MessageBox variant="danger">{errorSellers}</MessageBox>
    //         ) : (
    //             <>
    //                 {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}

    //                 {sellers.map((seller) => (

    //                     <div key={seller._id}>

    //                         {/* <div className="carousel-item"> */}

    //                         <Carousel showArrows autoPlay showThumbs={false}>
    //                             {/* <Carousel showArrows active showThumbs={true}> */}
    //                             <Link to={`/seller/${seller._id}`}>


    //                                 <img className='sellerimg' src={seller.seller.logo1} alt={seller.seller.name} />

    //                                 <img className='sellerimg' src={seller.seller.logo2} alt={seller.seller.name} />

    //                                 <img className='sellerimg' src={seller.seller.logo3} alt={seller.seller.name} />

    //                                 <img className='sellerimg' src={seller.seller.logo4} alt={seller.seller.name} />


    //                             </Link>

    //                             <Link to={`/seller/${seller._id}`}>


    //                                 <img className='sellerimg' src={seller.seller.logo1} alt={seller.seller.name} />

    //                                 <img className='sellerimg' src={seller.seller.logo2} alt={seller.seller.name} />

    //                                 <img className='sellerimg' src={seller.seller.logo3} alt={seller.seller.name} />

    //                                 <img className='sellerimg' src={seller.seller.logo4} alt={seller.seller.name} />


    //                             </Link>

    //                         </Carousel>


    //                     </div>

    //                     // </div>
    //                 ))}

    //             </>
    //         )
    //         }
    //     </div>



    //     <h2>tshirt collection</h2>
    //     {
    //         loading ? (
    //             <LoadingBox></LoadingBox>
    //         ) : error ? (
    //             <MessageBox variant="danger">{error}</MessageBox>
    //         ) : (
    //             <>
    //                 {tshirts.length === 0 && <MessageBox>No Product Found</MessageBox>}
    //                 {/* {sarees.length === 0 && <MessageBox>No Product Found</MessageBox>} */}
    //                 <div className="row center">
    //                     {tshirts.map((tshirt) => (
    //                         <Tshirt key={tshirt._id} tshirt={tshirt}></Tshirt>
    //                     ))}
    //                 </div>
    //                 {/* <div className="row center">
    //       {sarees.map((saree) => (
    //         <Saree key={saree._id} product={saree}></Saree>
    //       ))}
    //     </div> */}

    //             </>
    //         )
    //     }
    // </div>
  )
}
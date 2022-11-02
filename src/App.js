import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { signout } from "./actions/userAction";
import { registerout } from "./actions/userAction";
import { accountout } from "./actions/userAction";
// import { adminout } from "./actions/userAction";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PrivateRoute from "./components/PrivateRoute";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";
import AccountScreen from "./screens/AccountScreen";
// import HomeScreens from "./screens/HomeScreens";
import AccountCreation from "./screens/AccountCreation";
import AdmininScreen from "./screens/AdmininScreen";
import AdminRoute from "./components/AdminRoute";
import ProductListScreen from "./screens/ProductListScreen";
import SareeListScreen from "./screens/SareeListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import UserListScreen from "./screens/UserListScreen";
import SellerRoute from "./components/SellerRoute";
import SellerScreen from "./screens/SellerScreen";
import SearchBox from "./components/SearchBox";
import SearchScreen from "./screens/SearchScreen";
import { listProductCategories } from './actions/productAction';
import { listSareeCategories } from './actions/sareeAction';
import MessageBox from "./components/MessageBox";
import LoadingBox from "./components/LoadingBox";
import MapScreen from "./screens/MapScreen";
import DashboardScreen from "./screens/DashboardScreen";
import ChatBox from "./components/ChatBox";
import SupportScreen from "./screens/SupportScreen";
import SareeScreen from "./screens/SareeScreen";
import BookScreen from "./screens/BookScreen";
import SareeEditScreen from "./screens/SareeEditScreen";
import TshirtListScreen from "./screens/TshirtListScreen";
import CasualShirtListScreen from "./screens/CasualShirtListScreen";
import CartWomenScreen from "./screens/CartWomenScreen";
import CartKidScreen from "./screens/CartKidScreen";
import CartCasualShirtScreen from "./screens/CartCasualShirtScreen";
import WomenListScreen from "./screens/WomenListScreen";
import KidListScreen from "./screens/KidListScreen";
import WomenEditScreen from "./screens/WomenEditScreen";
import CasualShirtEditScreen from "./screens/CasualShirtEditScreen";
import KidEditScreen from "./screens/KidEditScreen";
import WomenScreen from "./screens/WomenScreen";

import KidScreen from "./screens/KidsScreen";
import TshirtEditScreen from "./screens/TshirtEditScreen";
import TshirtScreens from "./screens/TshirtScreens";
import CartTshirtScreen from "./screens/CartTshirtScreen";
import HomeScreens from "./screens/HomeScreens";
import CasualShirtScreens from "./screens/CasualShirtScreens";
import TshirtScreen from "./screens/TshirtScreen";
import CasualShirtScreen from "./screens/CasualShirtScreen";
import FormalshirtScreen from "./screens/FormalshirtScreen";
import FormalshirtScreens from "./screens/FormalshirtScreens";
import FormalShirtListScreen from "./screens/FormalShirtListScreen";
import FormalShirtEditScreen from "./screens/FormalShirtEditScreen";

// import data from './data';
// import Saree from "./components/Saree";
// import ScreenRoute from "./components/ScreenRoute";



function App() {
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const accountoutHandler = () => {
    dispatch(accountout());
  };
  const registeroutHandler = () => {
    dispatch(registerout());
  };

  // const accountoutHandler = () => {
  //   dispatch(accountout());
  // };
  // const adminoutHandler = () => {
  //   dispatch(adminout());
  // };
  // console.log={useInfo,"userAdminin"};
  // const  dispatch  = useDispatch();


  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
    dispatch(listSareeCategories());
  }, [dispatch]);

  // const SareeCategoryList = useSelector((state) => state.SareeCategoryList);
  // const {
  //   loading: loadingCategories,
  //   error: errorCategories,
  //   categories,
  // } = SareeCategoryList;
  // useEffect(() => {
  //   dispatch(listSareeCategories());
  // }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
            <Link className="brand" to="/">

              <img src="/image/logo.png" alt="lala" height="35px" width="30px" className="logo img" margin-right="250px" />

              <span className="nandalala">&nbsp;</span>lala<span className="in"></span>
            </Link>
          </div>
          <div className="run">

            {
              userInfo && userInfo && (

                <div className="user">

                  <div className="nav-item is-active" active-color="orange">
                    <Link to="#men" >
                      MEN
                    </Link>
                  </div>
                  <ul className="dropdowns-contents">
                    <li>
                      <h3 className="btn success"> <Link to="/Topwear" style={{ color: '#ee5f73' }}>Topwear</Link></h3>
                      <div className="sub-menu">

                        <li>
                          <Link to="/Tshirt">T-shirts</Link>
                        </li>
                        <li>
                          <Link to="/casualshirt">casual shirts</Link>
                        </li>
                        <li>
                          <Link to="/formalshirt">formal shirts</Link>
                        </li>

                        <li>
                          <Link to="/sweater">sweater</Link>
                        </li>

                        <li>
                          <Link to="/Jackets">Jackets</Link>
                        </li>
                        <li>
                          <Link to="/Blazer-coats">Blazer&coats</Link>
                        </li>

                        <li>
                          <Link to="/suits">suits</Link>
                        </li>
                        <li>
                          <Link to="/Rain-jackets">Rain Jackets</Link>
                        </li>

                        <li>
                          <h4>
                            <Link to="/Indian-Festival-Wear" style={{ color: '#ee5f73' }}>Indian festival wear</Link>
                          </h4>
                        </li>

                        <li>
                          <Link to="/Kurtas-kurtaseats">Kurtas&kurtaseats</Link>
                        </li>
                        <li>
                          <Link to="/Sherwanis">Sherwanis</Link>
                        </li>
                        <li>
                          <Link to="/Nehru-Jackets">NehruJackets</Link>
                        </li>

                        <li>
                          <Link to="/Dhotis">Dhotis</Link>
                        </li>

                      </div>
                    </li>
                    <li>
                      <h3 > <Link to="/Bottom-Wear" style={{ color: '#ee5f73' }}>Bottom Wear</Link> </h3>
                      <div className="sub-menu">
                        <li>
                          <Link to="/Jeans">Jeans</Link>
                        </li>
                        <li>
                          <Link to="/Casual-trousers">Casual trousers</Link>
                        </li>
                        <li>
                          <Link to="/formal-trousers">formal trousers</Link>
                        </li>
                        <li>
                          <Link to="/shorts">shorts</Link>
                        </li>

                        <li>
                          <Link to="/trackpants-joggers">trackpants&joggers</Link>
                        </li>
                      </div>

                      <h3> <Link to="/InnearWear-Sleepe" style={{ color: '#ee5f73' }}>Innear Wear&Sleepe Wear</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/briefs-trunks">briefs&trunks</Link>
                        </li>
                        <li>
                          <Link to="/boxers">boxers</Link>
                        </li>
                        <li>
                          <Link to="/formal-trousers">formal trousers</Link>
                        </li>
                        <li>
                          <Link to="/shorts">shorts</Link>
                        </li>
                        <li>
                          <Link to="/vests">vests</Link>
                        </li>
                        <li>
                          <Link to="/sleepwear-loungewear">sleepwear&loungewear</Link>
                        </li>

                        <li>
                          <Link to="/thermals">thermals</Link>
                        </li>

                      </div>

                      <h3> <Link to="/Plus-Size" style={{ color: '#ee5f73' }}>Plus Size</Link> </h3>

                    </li>

                    <li>
                      <h3> <Link to="/Foot-Wear" style={{ color: '#ee5f73' }}>Foot Wear</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/casual-shoes">casual shoes</Link>
                        </li>
                        <li>
                          <Link to="/sports-shoes">sports shoes</Link>
                        </li>
                        <li>
                          <Link to="/formal-shoes">formal shoes</Link>
                        </li>
                        <li>
                          <Link to="/sneakers">sneakers</Link>
                        </li>
                        <li>
                          <Link to="/sandals-floaters">sandals&floaters</Link>
                        </li>
                        <li>
                          <Link to="/flipfloaps">flipfloaps</Link>
                        </li>
                        <li>
                          <Link to="/socks">socks</Link>
                        </li>
                      </div>

                      <h6><Link to="/Personal-Care-Grooming" style={{ color: '#ee5f73' }}>personalCareGrooming</Link> </h6>

                      <h3> <Link to="/Sunglasses-Frames" style={{ color: '#ee5f73' }}>Sunglasses&Frames</Link> </h3>

                      <h3>  <Link to="/Watches" style={{ color: '#ee5f73' }}>Watches</Link> </h3>

                    </li>
                    <li>
                      <h3>  <Link to="/Sports-activy-Wear" style={{ color: '#ee5f73' }}>Sports activy Wear</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/sports-shoes">sports shoes</Link>
                        </li>
                        <li>
                          <Link to="/sandal-shoes">sandal shoes</Link>
                        </li>
                        <li>
                          <Link to="/active-t-shirts">active t-shirts</Link>
                        </li>
                        <li>
                          <Link to="/trackpants-shorts">trackpants&shorts</Link>
                        </li>
                        <li>
                          <Link to="/tracksuits">tracksuits</Link>
                        </li>
                        <li>
                          <Link to="/Jackets-sweetshirts">Jackets&sweetshirts</Link>
                        </li>
                        <li>
                          <Link to="/active-t-shirts">active t-shirts</Link>
                        </li>

                        <li>
                          <Link to="/sports-accessories">sportsaccessories</Link>
                        </li>

                        <li>
                          <Link to="/swirm-wears">swirm wears</Link>
                        </li>
                      </div>

                      <h3> <Link to="/gadgets" style={{ color: '#ee5f73' }}>gadgets</Link> </h3>


                      <div className="sub-menu">
                        <li>
                          <Link to="/small-wearables">small wearables</Link>
                        </li>
                        <li>
                          <Link to="/fitness-gadgets">fitness gadgets</Link>
                        </li>
                        <li>
                          <Link to="/headphone">headphone</Link>
                        </li>
                        <li>
                          <Link to="/speakers">speakers</Link>
                        </li>
                      </div>
                    </li>

                    <li>

                    </li>
                    <li>
                      <h3><Link to="/Faschion-Accessories" style={{ color: '#ee5f73' }}>Faschion Accessories</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/wallets">wallets</Link>
                        </li>

                        <li>
                          <Link to="/belts">belts</Link>
                        </li>

                        <li>
                          <Link to="/perfume-bodymists">perfume&bodymists</Link>
                        </li>
                        <li>
                          <Link to="/belts">helmets</Link>
                        </li>
                        <li>
                          <Link to="/trimmers">trimmers</Link>
                        </li>
                        <li>
                          <Link to="/Deodorants">Deodorants</Link>
                        </li>
                        <li>
                          <Link to="/tiles-cuffkins-pocketsquares">tiles,cuffkins&pocketsquares</Link>
                        </li>
                        <li>
                          <Link to="/accessory-gift-seat">accessory gift seat</Link>
                        </li>
                        <li>
                          <Link to="/caps-hates">caps&hates</Link>
                        </li>
                        <li>
                          <Link to="/muffalear-scarves-gloves">muffalear,scarves&gloves</Link>
                        </li>
                        <li>
                          <Link to="/perfume-bodymists">perfume&bodymists</Link>
                        </li>
                        <li>
                          <Link to="/phone-cases">phone cases</Link>
                        </li>
                        <li>
                          <Link to="/rings-wrist-wear">rings&wrist wear</Link>
                        </li>
                      </div>
                      <li>
                        <h5><Link to="/Bags-Backpacks" style={{ color: '#ee5f73' }}>Bags&Backpacks</Link> </h5>
                      </li>
                      {/* <li> */}
                      <h5><Link to="/Luggages-trolleys" style={{ color: '#ee5f73' }}>Luggages&trolleys</Link> </h5>
                      {/* </li> */}

                    </li>


                  </ul>

                </div >

              )
            }
            {
              userInfo && userInfo && (
                <div className="user1">
                  <div className="sware"  >
                    <Link to="/women">
                      {/* <strong> */}
                      WOMEN
                      {/* </strong> */}
                    </Link>
                  </div>
                  <ul className="dropdowns-contents1">
                    <li>

                      <h3><Link to="/Indian-fusion-wear" style={{ color: '#fb56c1' }} >Indian&fusion wear</Link></h3>


                      <div className="sub-menu">
                        <li>
                          <Link to="/kurtas-suits">kurtas&suits</Link>
                        </li>
                        <li>
                          <Link to="/kurits-tunics&tops">kurits,tunics&tops</Link>
                        </li>
                        <li>
                          <Link to="/sarees">sarees</Link>
                        </li>

                        <li>
                          <Link to="/ethnic-wear">ethnic wear</Link>
                        </li>
                        <li>
                          <Link to="/laggins-salwars-chudidars">laggins,salwars&chudidars</Link>
                        </li>
                        <li>
                          <Link to="/Skirts-Palazzos">Skirts & Palazzos</Link>
                        </li>

                        <li>
                          <Link to="/Dress-Materials">Dress Materials</Link>
                        </li>
                        <li>
                          <Link to="/Lehenga-Cholis">Lehenga Cholis</Link>
                        </li>
                        <li>
                          <Link to="/Dupattas-Shawls">Dupattas & Shawls</Link>
                        </li>

                        <li>
                          <Link to="/Jackets">Jackets</Link>
                        </li>
                      </div>
                      {/* <hr /> */}
                      <div className="ok">
                        <h3><Link to="/Belts-Scarves-More" style={{ color: '#fb56c1' }}>Belts, Scarves & More</Link></h3>
                        <h3> <Link to="/Watches-Wearables" style={{ color: '#fb56c1' }}>Watches & Wearables</Link></h3>
                      </div>
                    </li>
                    <li>
                      <h3> <Link to="/Western-Wear" style={{ color: '#fb56c1' }}>Western Wear</Link> </h3>
                      <div className="sub-menu">
                        <li>
                          <Link to="/Dresses">Dresses</Link>
                        </li>
                        <li>
                          <Link to="/Tops">Tops</Link>
                        </li>
                        <li>
                          <Link to="/T-shirts">Tshirts</Link>
                        </li>
                        <li>
                          <Link to="/Jeans">Jeans</Link>
                        </li>
                        <li>
                          <Link to="/Shorts-Skirts">Shorts & Skirts</Link>
                        </li>
                        <li>
                          <Link to="/Co-ords">Co-ords</Link>
                        </li>
                        <li>
                          <Link to="/Playsuits">Playsuits</Link>
                        </li>
                        <li>
                          <Link to="/Jumpsuits">Jumpsuits</Link>
                        </li>
                        <li>
                          <Link to="/Shrugs">Shrugs</Link>
                        </li>
                        <li>
                          <Link to="/Sweaters-Sweatshirts">Sweaters&Sweatshirts</Link>
                        </li>
                        <li>
                          <Link to="/Jackets-Coats">Jackets & Coats</Link>
                        </li>
                        <li>
                          <Link to="/Blazers-Waistcoats">Blazers & Waistcoats</Link>
                        </li>

                      </div>
                      {/* <hr /> */}
                      <h3> <Link to="/Plus-Size" style={{ color: '#fb56c1' }}>Plus Size</Link> </h3>
                    </li>

                    <li>
                      <h3> <Link to="/Maternity" style={{ color: '#fb56c1' }}>Maternity</Link> </h3>
                      <h3> <Link to="/Sunglasses-Frames" style={{ color: '#fb56c1' }}>Sunglasses & Frames</Link> </h3>
                      <h3> <Link to="/Foot-Wear" style={{ color: '#fb56c1' }}>Foot Wear</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/Flats">Flats</Link>
                        </li>
                        <li>
                          <Link to="/Casual-Shoes">Casual Shoes</Link>
                        </li>
                        <li>
                          <Link to="/Heels">Heels</Link>
                        </li>
                        <li>
                          <Link to="/Boots">Boots</Link>
                        </li>
                        <li>
                          <Link to="/Sports-Shoes-Floaters">SportsShoes&Floaters</Link>
                        </li>

                      </div>
                      {/* <hr /> */}
                      <h3>  <Link to="/Sports-activy-Wear" style={{ color: '#fb56c1' }}>Sports &activy Wear</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/clothing">Clothing</Link>
                        </li>
                        <li>
                          <Link to="/Footwear">Footwear</Link>
                        </li>
                        <li>
                          <Link to="/Sports-Accessories">Sports Accessories</Link>
                        </li>
                        <li>
                          <Link to="/Sports-Equipment">Sports Equipment</Link>
                        </li>

                      </div>
                    </li>
                    <li>
                      <h3> <Link to="/Lingerie-Sleepwear" style={{ color: '#fb56c1' }}> Lingerie & Sleepwear</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/Bra">Bra</Link>
                        </li>

                        <li>
                          <Link to="/Briefs">Briefs</Link>
                        </li>
                        <li>
                          <Link to="/Shapewear">Shapewear</Link>
                        </li>
                        <li>
                          <Link to="/Sleepwear-Loungewear">Sleepwear&Loungewear</Link>
                        </li>
                        <li>
                          <Link to="/Swimwear">Swimwear</Link>
                        </li>
                        <li>
                          <Link to="/Camisoles-Thermals">Camisoles & Thermals</Link>
                        </li>
                      </div>
                      {/* <hr /> */}
                      <h3><Link to="/Beauty-Personal-Care" style={{ color: '#fb56c1' }}>Beauty & Personal Care</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/Makeup">Makeup</Link>
                        </li>
                        <li>
                          <Link to="/Skincare">Skincare</Link>
                        </li>
                        <li>
                          <Link to="/Premium-Beauty">Premium Beauty</Link>
                        </li>
                        <li>
                          <Link to="/Lipsticks">Lipsticks</Link>
                        </li>
                        <li>
                          <Link to="/Fragrances">Fragrances</Link>
                        </li>

                      </div>
                    </li>
                    <li>
                      <h3> <Link to="/Gadgets" style={{ color: '#fb56c1' }}>Gadgets</Link></h3>
                      <div className="sub-menu">
                        <li>
                          <Link to="/Smart-Wearables">SmartWearables</Link>
                        </li>
                        <li>
                          <Link to="/Fitness-Gadgets">FitnessGadgets</Link>
                        </li>
                        <li>
                          <Link to="/Headphones">Headphones</Link>
                        </li>

                        <li>
                          <Link to="/Speakers">Speakers</Link>
                        </li>
                      </div>
                      {/* <hr /> */}
                      <h3> <Link to="/Jewellery" style={{ color: '#fb56c1' }}>Jewellery</Link></h3>
                      <div className="sub-menu">
                        <li>
                          <Link to="/Fashion-Jewellery">FashionJewellery</Link>
                        </li>
                        <li>
                          <Link to="/Fine-Jewellery">Fine Jewellery</Link>
                        </li>
                        <li>
                          <Link to="/Earrings">Earrings</Link>
                        </li>

                        {/* <li>
                          <Link to="/Speakers">Speakers</Link>
                        </li> */}
                      </div>
                      {/* <hr /> */}
                      <h3> <Link to="/Gadgets" style={{ color: '#fb56c1' }}>Backpacks</Link></h3>
                      <h3> <Link to="/Handbags-Bags-Wallets" style={{ color: '#fb56c1' }}>Handbags,Bags&Wallets</Link></h3>
                      <h3> <Link to="/Luggages-Trolleys" style={{ color: '#fb56c1' }}>Luggages & Trolleys</Link></h3>
                    </li>
                  </ul>
                </div>
              )
            }
            {
              userInfo && userInfo && (
                <div className="user2">
                  <div className="activate is-active" active-color="orange">
                    <Link to="/kids">
                      {/* <strong> */}
                      kIDS
                      {/* </strong> */}
                    </Link>
                  </div>
                  <ul className="dropdowns-contents2">
                    <li>
                      <h3> <Link to="/Boys-Clothing" style={{ color: '#f26a10' }}>Boys Clothing</Link></h3>
                      <div className="sub-menu">
                        <li>
                          <Link to="/T-Shirts">T-Shirts</Link>
                        </li>
                        <li>
                          <Link to="/Shirts">Shirts</Link>
                        </li>
                        <li>
                          <Link to="/Shorts">Shorts</Link>
                        </li>

                        <li>
                          <Link to="/Jeans">Jeans</Link>
                        </li>
                        <li>
                          <Link to="/Trousers">Trousers</Link>
                        </li>
                        <li>
                          <Link to="/Clothing-Sets">Clothing Sets</Link>
                        </li>

                        <li>
                          <Link to="/Ethnic-Wear">Ethnic Wear</Link>
                        </li>
                        <li>
                          <Link to="/Track-Pants-Pyjamas">Track Pants & Pyjamas</Link>
                        </li>
                        <li>
                          <Link to="/Jacket-Sweater-Sweatshirts">Jacket,Sweater&Sweatshirts</Link>
                        </li>

                        <li>
                          <Link to="/Party-Wear">Party Wear</Link>
                        </li>
                        <li>
                          <Link to="/Innerwear-Thermals">Innerwear & Thermals</Link>
                        </li>
                        <li>
                          <Link to="/Nightwear-Loungewear">Nightwear & Loungewear</Link>
                        </li>

                        <li>
                          <Link to="/Value-Packs">Value Packs</Link>
                        </li>
                      </div>
                    </li>
                    <li>
                      <h3> <Link to="/Western-Wear" style={{ color: '#f26a10' }}>Western-Wear</Link> </h3>
                      <div className="sub-menu">
                        <li>
                          <Link to="/Dresses">Dresses</Link>
                        </li>
                        <li>
                          <Link to="/Tops">Tops</Link>
                        </li>
                        <li>
                          <Link to="/T-shirts">Tshirts</Link>
                        </li>
                        <li>
                          <Link to="/Clothing-Sets">Clothing Sets</Link>
                        </li>
                        <li>
                          <Link to="/Lehenga-choli">Lehenga choli</Link>
                        </li>
                        <li>
                          <Link to="/Kurta-Sets">Kurta Sets</Link>
                        </li>
                        <li>
                          <Link to="/Party-wear">Party wear</Link>
                        </li>
                        <li>
                          <Link to="/Dungarees-Jumpsuits">Dungarees & Jumpsuits</Link>
                        </li>
                        <li>
                          <Link to="/Skirts-shorts">Skirts & shorts</Link>
                        </li>
                        <li>
                          <Link to="/Tights-Leggings">Tights & Leggings</Link>
                        </li>
                        <li>
                          <Link to="/Jeans-Trousers-Capris">Jeans,Trousers &Capris</Link>
                        </li>
                        <li>
                          <Link to="/Jacket-Sweater-Sweatshirts">Jacket,Sweater&Sweatshirts</Link>
                        </li>
                        <li>
                          <Link to="/Innerwear-Thermals">Innerwear & Thermals</Link>
                        </li>
                        <li>
                          <Link to="/Nightwear-Loungewear">Nightwear & Loungewear</Link>
                        </li>
                        <li>
                          <Link to="/Value-Packs">Value Packs</Link>
                        </li>

                      </div>

                    </li>

                    <li>

                      <h3> <Link to="/Foot-Wear" style={{ color: '#f26a10' }}>Foot Wear</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/Casual-Shoes">Casual Shoes</Link>
                        </li>
                        <li>
                          <Link to="/Flipflops">Flipflops</Link>
                        </li>
                        <li>
                          <Link to="/Sports Shoes">Sports Shoes</Link>
                        </li>
                        <li>
                          <Link to="/Flats">Flats</Link>
                        </li>
                        <li>
                          <Link to="/Sandals">Sandals</Link>
                        </li>
                        <li>
                          <Link to="/School-Shoes">School Shoes</Link>
                        </li>
                        <li>
                          <Link to="/Socks">Socks</Link>
                        </li>


                      </div>
                      {/* <hr /> */}
                      <h3>  <Link to="/Toys" style={{ color: '#f26a10' }}>Toys</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/Learning-Development">Learning&Development</Link>
                        </li>
                        <li>
                          <Link to="/Activity-Toys">Activity Toys</Link>
                        </li>
                        <li>
                          <Link to="/Soft-Toys">Soft Toys</Link>
                        </li>
                        <li>
                          <Link to="/Action-Figure-Play">Action Figure / Play set</Link>
                        </li>

                      </div>
                    </li>


                    <li>
                      <h3> <Link to="/Infants" style={{ color: '#f26a10' }}>Infants</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/Bodysuits">Bodysuits</Link>
                        </li>
                        <li>
                          <Link to="/Rompers-Sleepsuits">Rompers&Sleepsuits</Link>
                        </li>
                        <li>
                          <Link to="/Clothing-Sets">Clothing Sets</Link>
                        </li>
                        <li>
                          <Link to="/Tshirts-Tops">Tshirts & Tops</Link>
                        </li>
                        <li>
                          <Link to="/Dresses">Dresses</Link>
                        </li>
                        <li>
                          <Link to="/Bottom-wear">Bottom wear</Link>
                        </li>
                        <li>
                          <Link to="/Winter-Wear">Winter Wear</Link>
                        </li>
                        <li>
                          <Link to="/Innerwear-Sleepwear">Innerwear&Sleepwear</Link>
                        </li>
                        <li>
                          <Link to="/Infant-Care">Infant Care</Link>
                        </li>
                      </div>
                      {/* <hr /> */}

                      <h3><Link to="/Home-Bath" style={{ color: '#f26a10' }}>Home & Bath</Link> </h3>
                      <h3><Link to="/Personal-Care" style={{ color: '#f26a10' }}>Personal Care</Link> </h3>
                    </li>
                    <li>
                      <h3><Link to="/Kids-Accessories" style={{ color: '#f26a10' }}>Kids Accessories</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/Bags-Backpacks">Bags&Backpacks</Link>
                        </li>
                        <li>
                          <Link to="/Watches">Watches</Link>
                        </li>
                        <li>
                          <Link to="/Jewellery-Hair-accessory">Jewellery&Hairaccessory</Link>
                        </li>
                        <li>
                          <Link to="/Sunglasses">Sunglasses</Link>
                        </li>
                        <li>
                          <Link to="/Masks-Protective-Gears">Masks&ProtectiveGears</Link>
                        </li>
                        <li>
                          <Link to="Caps-Hats">Caps & Hats</Link>
                        </li>

                      </div>
                      {/* <hr /> */}

                      <h3> <Link to="/Brands" style={{ color: '#f26a10' }}>Brands</Link></h3>
                      <div className="sub-menu">
                        <li>
                          <Link to="/H&M">H&M</Link>
                        </li>
                        <li>
                          <Link to="/Max-Kids">Max Kids</Link>
                        </li>
                        <li>
                          <Link to="/Pantaloons">Pantaloons</Link>
                        </li>
                        <li>
                          <Link to="/United-Colors">UnitedColorsofBenettonKids</Link>
                        </li>
                        <li>
                          <Link to="/YK">YK</Link>
                        </li>
                        <li>
                          <Link to="/Kids">U.S. Polo Assn. Kids</Link>
                        </li>
                        <li>
                          <Link to="/Mothercare">Mothercare</Link>
                        </li>
                        <li>
                          <Link to="/HRX">HRX</Link>
                        </li>

                      </div>
                    </li>

                  </ul>
                </div>
              )
            }
            {
              userInfo && userInfo && (
                <div className="user3">

                  <div className="living is-active" active-color="orange">
                    <Link to="home">
                      {/* <strong> */}
                      HOME&LIVING
                      {/* </strong> */}
                    </Link>
                  </div>
                  <ul className="dropdowns-contents3">
                    <li>
                      <h3> <Link to="/Bed-Linen-Furnishing" style={{ color: '#f2c210' }}>Bed Linen & Furnishing</Link></h3>
                      <div className="sub-menu">
                        <li>
                          <Link to="/Bed-Runners"> Bed Runners</Link>
                        </li>
                        <li>
                          <Link to="/Mattress-Protectors">Mattress Protectors</Link>
                        </li>
                        <li>
                          <Link to="/Bedsheets">Bedsheets</Link>
                        </li>

                        <li>
                          <Link to="/Bedding-Sets">Bedding Sets</Link>
                        </li>
                        <li>
                          <Link to="/Blankets-Quilts-Dohars">Blankets,Quilts&Dohars</Link>
                        </li>
                        <li>
                          <Link to="/Pillows-Pillow-Covers">Pillows & Pillow Covers</Link>
                        </li>

                        <li>
                          <Link to="/Bed-Covers">Bed Covers</Link>
                        </li>
                        <li>
                          <Link to="/Diwan-Sets">Diwan Sets</Link>
                        </li>
                        <li>
                          <Link to="/Chair-Pads-Covers">Chair Pads & Covers</Link>
                        </li>
                        <li>
                          <Link to="/Sofa-Covers">Sofa Covers</Link>
                        </li>
                      </div>
                      {/* <hr /> */}
                      <h3> <Link to="/Flooring" style={{ color: '#f2c210' }}>Flooring</Link> </h3>
                      <div className="sub-menu">
                        <li>
                          <Link to="/Floor-Runners">Floor Runners</Link>
                        </li>
                        <li>
                          <Link to="/Carpets">Carpets</Link>
                        </li>

                        <li>
                          <Link to="/Floor-Mats-Dhurries">Floor Mats& Dhurries</Link>
                        </li>
                        <li>
                          <Link to="/Door-Mats">Door Mats</Link>
                        </li>
                      </div>
                    </li>
                    <li>


                    </li>

                    <li>
                      <div className="menu" color="text-primary">
                        <h3><Link to="/Bath" style={{ color: '#f2c210' }}>Bath</Link></h3>
                      </div>
                      <div className="sub-menu">
                        <li>
                          <Link to="/Bath-Towels">Bath Towels</Link>
                        </li>
                        <li>
                          <Link to="/Hand-Face-Towels">Hand &Face Towels</Link>
                        </li>
                        <li>
                          <Link to="/Beach-Towels">Beach Towels</Link>
                        </li>
                        <li>
                          <Link to="/Towels-Set">Towels Set</Link>
                        </li>
                        <li>
                          <Link to="/Bath-Rugs">Bath Rugs</Link>
                        </li>
                        <li>
                          <Link to="/Bath-Robes">Bath Robes</Link>
                        </li>
                        <li>
                          <Link to="/Bathroom-Accessories">BathroomAccessories</Link>
                        </li>
                        <li>
                          <Link to="/Shower-Curtains">ShowerCurtains</Link>
                        </li>
                        {/* <li>
                          <Link to="/Sports Shoes & Floaters">Sports shoes&Floaters</Link>
                        </li> */}

                      </div>
                      {/* <hr /> */}
                      <h3>  <Link to="/Lamps-Lighting" style={{ color: '#f2c210' }}>Lamps&Lighting</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/Floor-Lamps">Floor Lamps</Link>
                        </li>
                        <li>
                          <Link to="/Ceiling-Lamps">CeilingLamps</Link>
                        </li>
                        <li>
                          <Link to="/Table-Lamps">Table Lamps</Link>
                        </li>
                        <li>
                          <Link to="/Wall-Lamps">Wall Lamps</Link>
                        </li>
                        <li>
                          <Link to="/Outdoor-Lamps">Outdoor Lamps</Link>
                        </li>
                        <li>
                          <Link to="/String-Lights">String Lights</Link>
                        </li>

                      </div>

                    </li>
                    <li>

                    </li>

                    <li>
                      <h3> <Link to="/Home-Decor" style={{ color: '#f2c210' }}>Home Decor</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/Plants-Planters">Plants & Planters</Link>
                        </li>
                        <li>
                          <Link to="/Aromas-Candles">Aromas & Candles</Link>
                        </li>
                        <li>
                          <Link to="/Clocks">Clocks</Link>
                        </li>

                        <li>
                          <Link to="/Mirrors">Mirrors</Link>
                        </li>
                        <li>
                          <Link to="/Wall-Decor">Wall Decor</Link>
                        </li>
                        <li>
                          <Link to="/Festive-Decor">Festive Decor</Link>
                        </li>

                        <li>
                          <Link to="/Pooja-Essentials">Pooja Essentials</Link>
                        </li>
                        <li>
                          <Link to="/Wall-Shelves">Wall Shelves</Link>
                        </li>
                        <li>
                          <Link to="/Fountains">Fountains</Link>
                        </li>
                        <li>
                          <Link to="/Showpieces-Vases">Show pieces& Vases</Link>
                        </li>
                        <li>
                          <Link to="/Ottoman">Ottoman</Link>
                        </li>
                      </div>
                      {/* <hr /> */}
                      <h3><Link to="/Cushions-Cushion-Covers" style={{ color: '#f2c210' }}>Cushions&CushionCovers</Link> </h3>
                      <h3><Link to="/Curtains" style={{ color: '#f2c210' }}>Curtains</Link> </h3>
                    </li>
                    <li>
                      <h3><Link to="/Home-Gift-Sets" style={{ color: '#f2c210' }}>Home Gift Sets</Link> </h3>
                      <h3><Link to="/Kitchen-Table" style={{ color: '#f2c210' }}>Kitchen & Table</Link> </h3>

                      <div className="sub-menu">

                        <li>
                          <Link to="/Table-Runners">Table Runners</Link>
                        </li>
                        <li>
                          <Link to="/Dinnerware-Serveware">Dinnerware & Serveware</Link>
                        </li>
                        <li>
                          <Link to="/Cups-and-Mugs">Cups and Mugs</Link>
                        </li>
                        <li>
                          <Link to="/Bakeware-Cookware">Bakeware & Cookware</Link>
                        </li>
                        <li>
                          <Link to="/Kitchen-Storage-Tools">Kitchen Storage & Tools</Link>
                        </li>
                        <li>
                          <Link to="/Bar-Drinkware">Bar & Drinkware</Link>
                        </li>
                        <li>
                          <Link to="/Table-Covers-Furnishings">TableCovers&Furnishings</Link>
                        </li>
                      </div>
                      {/* <hr /> */}
                      <h3> <Link to="/Gadgets" style={{ color: '#f2c210' }}>Storage</Link></h3>
                      <div className="sub-menu">
                        <li>
                          <Link to="/Bins">Bins</Link>
                        </li>
                        <li>
                          <Link to="/Hangers">Hangers</Link>
                        </li>
                        <li>
                          <Link to="/Organisers">Organisers</Link>
                        </li>
                        <li>
                          <Link to="/Hooks-Holders">Hooks & Holders</Link>
                        </li>
                        <li>
                          <Link to="/Laundry-Bags">Laundry Bags</Link>
                        </li>

                      </div>
                    </li>
                    <li>

                    </li>
                    <li>
                      <h3> <Link to="/Brands" style={{ color: '#f2c210' }}>Brands</Link></h3>
                      <div className="sub-menu">
                        <li>
                          <Link to="/H&M">H&M</Link>
                        </li>
                        <li>
                          <Link to="/Marks-Spencer">Marks & Spencer</Link>
                        </li>
                        <li>
                          <Link to="/Home-Centre">Home Centre</Link>
                        </li>
                        <li>
                          <Link to="/Spaces">Spaces</Link>
                        </li>
                        <li>
                          <Link to="/D-Decor">D'Decor</Link>
                        </li>
                        <li>
                          <Link to="/Story-Home">Story@Home</Link>
                        </li>
                        <li>
                          <Link to="/Pure-Home-Living">PureHome&Living</Link>
                        </li>
                        <li>
                          <Link to="/Swayam">Swayam</Link>
                        </li>
                        <li>
                          <Link to="/Raymond-Home">Raymond Home</Link>
                        </li>
                        <li>
                          <Link to="/Maspar">Maspar</Link>

                          <li>
                            <Link to="/Trident">Trident</Link>
                          </li>
                          <li>
                            <Link to="/Cortina">Cortina</Link>
                          </li>
                          <li>
                            <Link to="/Random">Random</Link>
                          </li>
                          <li>
                            <Link to="/Ellementry">Ellementry</Link>
                          </li>
                          <li>
                            <Link to="/ROMEE">ROMEE</Link>
                          </li>
                          <li>
                            <Link to="/Story-Home">SEJby NishaGupta</Link>
                          </li>
                        </li>

                      </div>

                    </li>

                  </ul>
                </div>
              )
            }
            {
              userInfo && userInfo && (
                <div className="user4">

                  <div className="beauty is-active" active-color="orange">
                    <Link to="beauty">
                      {/* <strong> */}
                      BEAUTY
                      {/* </strong> */}
                    </Link>
                  </div>
                  <ul className="dropdowns-contents4">
                    <li>
                      <h3> <Link to="/Makeup" style={{ color: '#0db7af' }}>Makeup</Link></h3>
                      <div className="sub-menu">
                        <li>
                          <Link to="/Lipstick">Lipstick</Link>
                        </li>
                        <li>
                          <Link to="/Lip-Gloss">Lip Gloss</Link>
                        </li>
                        <li>
                          <Link to="/Lip-Liner">Lip Liner</Link>
                        </li>
                        <li>
                          <Link to="/Mascara">Mascara</Link>
                        </li>
                        <li>
                          <Link to="/Eyeliner">Eyeliner</Link>
                        </li>
                        <li>
                          <Link to="/Kajal">Kajal</Link>
                        </li>

                        <li>
                          <Link to="/Eyeshadow">Eyeshadow</Link>
                        </li>
                        <li>
                          <Link to="/Foundation">Foundation</Link>
                        </li>
                        <li>
                          <Link to="/Primer">Primer</Link>
                        </li>
                        <li>
                          <Link to="/Concealer">Concealer</Link>
                        </li>
                        <li>
                          <Link to="/Compact">Compact</Link>
                        </li>
                        <li>
                          <Link to="/Nail-Polish">Nail Polish</Link>
                        </li>

                      </div>
                    </li>
                    <li>
                      <h3> <Link to="/Skincare-Bath-Body " style={{ color: '#0db7af' }}>Skincare, Bath & Body</Link> </h3>
                      <div className="sub-menu">

                        <li>
                          <Link to="/Face-Moisturiser">Face Moisturiser</Link>
                        </li>
                        <li>
                          <Link to="/Cleanser">Cleanser</Link>
                        </li>
                        <li>
                          <Link to="/Masks-Peel">Masks & Peel</Link>
                        </li>
                        <li>
                          <Link to="/Sunscreen">Sunscreen</Link>
                        </li>
                        <li>
                          <Link to="/Serum">Serum</Link>
                        </li>
                        <li>
                          <Link to="/Face-Wash">Face Wash</Link>
                        </li>

                        <li>
                          <Link to="/Eye-Cream">Eye Cream</Link>
                        </li>
                        <li>
                          <Link to="/Lip-Balm">Lip Balm</Link>
                        </li>
                        <li>
                          <Link to="/Body-Lotion ">Body Lotion </Link>
                        </li>
                        <li>
                          <Link to="/Body-Wash">Body Wash</Link>
                        </li>
                        <li>
                          <Link to="/Body-Scrup"> Body Scrub</Link>
                        </li>
                        <li>
                          <Link to="/Hand-cream">Hand Cream </Link>
                        </li>
                      </div>
                      {/* <hr /> */}
                      <h3> <Link to="/Baby-Care" style={{ color: '#0db7af' }}>Baby Care</Link> </h3>
                      <h3> <Link to="/Masks" style={{ color: '#0db7af' }}>Masks</Link> </h3>
                    </li>

                    <li>
                      <h3> <Link to="/Haircare" style={{ color: '#0db7af' }}>Haircare</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/Shampoo">Shampoo</Link>
                        </li>
                        <li>
                          <Link to="/Conditioner">Conditioners</Link>
                        </li>
                        <li>
                          <Link to="/Hair-Cream">Hair Cream</Link>
                        </li>
                        <li>
                          <Link to="/Hair-Oil">Hair Oil</Link>
                        </li>
                        <li>
                          <Link to="/Hair-Gel">Hair Gel</Link>
                        </li>
                        <li>
                          <Link to="/Hair-Color">Hair Color</Link>
                        </li>
                        <li>
                          <Link to="/Hair-Serum">Hair Serum</Link>
                        </li>
                        <li>
                          <Link to="/Hair-Accessory">Hair Accessory</Link>
                        </li>

                      </div>
                      {/* <hr /> */}

                      <h3>  <Link to="/Fragrances" style={{ color: '#0db7af' }}>Fragrances</Link> </h3>

                      <div className="sub-menu">
                        <li>
                          <Link to="/Perfume">Perfume</Link>
                        </li>
                        <li>
                          <Link to="/Deodorant">Deodorant</Link>
                        </li>
                        <li>
                          <Link to="/Body-Mist">Body Mist</Link>
                        </li>

                      </div>
                    </li>
                    <li>

                    </li>

                    <li>
                      <h3> <Link to="/Appliances" style={{ color: '#0db7af' }}>Appliances</Link> </h3>

                      <div className="sub-menu">


                        <li>
                          <Link to="/Hair-Straightener">Hair Straightener</Link>
                        </li>
                        <li>
                          <Link to="/Hair-Dryer">Hair Dryer</Link>
                        </li>
                        <li>
                          <Link to="/Epilator">Epilator</Link>
                        </li>
                        {/* <hr /> */}
                        <h3> <Link to="/Men-Grooming" style={{ color: '#0db7af' }}>Men's Grooming</Link> </h3>


                        <li>
                          <Link to="/Trimmers">Trimmers</Link>
                        </li>
                        <li>
                          <Link to="/Beard-Oil">Beard Oil</Link>
                        </li>

                        <li>
                          <Link to="/Hair-Wax">Hair Wax</Link>
                        </li>

                        {/* <hr /> */}
                        <h3> <Link to="/Beauty-Gift-Makeup" style={{ color: '#0db7af' }}>Beauty Gift & Makeup Set</Link> </h3>

                        <li>
                          <Link to="/Beauty-Gift">Beauty Gift</Link>
                        </li>
                        <li>
                          <Link to="/Makeup-Kit">Makeup Kit</Link>
                        </li>


                      </div>
                      {/* <hr /> */}
                      <h3> <Link to="/Premium-Beauty" style={{ color: '#0db7af' }} >Premium Beauty</Link> </h3>
                      <h3> <Link to="/Wellness-Hygiene" style={{ color: '#0db7af' }}>Wellness & Hygiene</Link> </h3>

                    </li>
                    <li>
                      <h3><Link to="/Top-Brands" style={{ color: '#0db7af' }} >Top Brands</Link> </h3>


                      <div className="sub-menu">

                        <li>
                          <Link to="/Lakme">Lakme</Link>
                        </li>
                        <li>
                          <Link to="/Maybelline">Maybelline</Link>
                        </li>
                        <li>
                          <Link to="/Loreal">Loreal</Link>
                        </li>
                        <li>
                          <Link to="/Philips">Philips</Link>
                        </li>
                        <li>
                          <Link to="/Bath-Body-Works">Bath & Body Works</Link>
                        </li>
                        <li>
                          <Link to="/Body-Shop">The Body Shop</Link>
                        </li>
                        <li>
                          <Link to="/Biotique">Biotique</Link>
                        </li>
                        <li>
                          <Link to="/Mamaearth">Mamaearth</Link>
                        </li>
                        <li>
                          <Link to="/MCaffeine">MCaffeine</Link>
                        </li>
                        <li>
                          <Link to="/Nivea">Nivea</Link>
                        </li>
                        <li>
                          <Link to="/Loreal-Professionnel">Loreal Professionnel</Link>
                          <li>
                            <Link to="/KAMA-AYURVEDA">Kama Ayerveda</Link>
                          </li>
                          <li>
                            <Link to="/m.a.c">M.A.C</Link>
                          </li>
                          <li>
                            <Link to="/Forest-Essentials">Forest Essentials</Link>
                          </li>
                        </li>
                      </div>
                    </li>

                  </ul>
                </div>
              )
            }

          </div>
          <div className="search">
            <SearchBox />
          </div>
          <div className="dropdownlist">
            <Link to="/cart">
              <i className="fa fa-shopping-cart"></i>&nbsp;Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>

            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} {" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">OrderHistory</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      SignOut
                    </Link>
                    <Link to="#accountout" onClick={accountoutHandler}></Link>
                    <Link to="#registerout" onClick={registeroutHandler}></Link>
                  </li>

                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>


            )}

            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <br />
                  <li>
                    <Link to="/productlist">Mens</Link>
                  </li>
                  <li>
                    <Link to="/womenlist">Womens</Link>
                  </li>
                  <li>
                    <Link to="/kidlist">Kids</Link>
                  </li>
                  <br />
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/support">Support</Link>
                  </li>
                </ul>

              </div>
            )}

            {/* {userInfo && userInfo.isAdmin && (

              <div className="dropdown">
                <Link to="#menu">
                  Menu
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/Saree">Saree</Link>
                  </li>
                  <li>
                    <Link to="/book">Books</Link>
                  </li>

                </ul>
              </div>


            )} */}
          </div>
        </header>
        <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul className="categories">
            <li>
              <strong>Categories</strong>
              {/* <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >

              </button> */}
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="open"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
            {/* {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))
            )} */}
          </ul>
        </aside>
        <main>
          <Routes>
            <Route path="/seller/:id" element={<SellerScreen />}></Route>
            <Route path="/cart/:id" element={<CartScreen />}></Route>
            <Route path="/cartwomen/:id" element={<CartWomenScreen />}></Route>
            <Route path="/cartkid/:id" element={<CartKidScreen />}></Route>
            <Route path="/carttshirt/:id" element={<CartScreen />}></Route>
            <Route path="/cartcasualshirt/:id" element={<CartCasualShirtScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/cartwomen" element={<CartWomenScreen />}></Route>
            <Route path="/cartkid" element={<CartKidScreen />}></Route>
            <Route path="/cartTshirt" element={<CartTshirtScreen />}></Route>
            <Route path="/cartCasualShirt" element={<CartCasualShirtScreen />}></Route>
           
            <Route path="/signin" element={<SigninScreen />}></Route>
            <Route path="/account" element={<AccountScreen />}></Route>
            <Route path="/accountcreation" element={<AccountCreation />}></Route>
            <Route path="/adminin" element={<AdmininScreen />}></Route>
            <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
            <Route path="/payment" element={<PaymentMethodScreen />}></Route>
            <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
            <Route path="/order/:id" element={<OrderScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
            <Route path="/search/name" element={<SearchScreen />} exact></Route>
            <Route path="/productlist/seller" element={<SellerRoute><ProductListScreen /></SellerRoute>} exact></Route>
            <Route path="/tshirtlist/seller" element={<SellerRoute><TshirtListScreen /></SellerRoute>} exact></Route>
            <Route path="/casualshirtlist/seller" element={<SellerRoute><CasualShirtListScreen /></SellerRoute>} exact></Route>
            <Route path="/formalshirtlist/seller" element={<SellerRoute><FormalShirtListScreen /></SellerRoute>} exact></Route>
            
            <Route path="/Sareelist/seller" element={<SellerRoute><SareeListScreen /></SellerRoute>} exact></Route>
            <Route path="/OrderList/seller" element={<SellerRoute><OrderListScreen /></SellerRoute>} exact></Route>
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfileScreen />
                </PrivateRoute>
              }
            />
            <Route
              path="/productlist"
              element={
                <AdminRoute>
                  <ProductListScreen />
                </AdminRoute>
              }
              exact
            />
            <Route
              path="/womenlist"
              element={
                <AdminRoute>
                  <WomenListScreen />
                </AdminRoute>
              }
              exact
            />
            <Route
              path="/kidlist"
              element={
                <AdminRoute>
                  <KidListScreen />
                </AdminRoute>
              }
              exact
            />

            <Route
              path="/tshirtlist"
              element={
                <AdminRoute>
                  <TshirtListScreen />
                </AdminRoute>
              }
              exact
            />
            <Route
              path="/casualshirtlist"
              element={
                <AdminRoute>
                  <CasualShirtListScreen />
                </AdminRoute>
              }
              exact
            />
            <Route
              path="/formalshirtlist"
              element={
                <AdminRoute>
                  <FormalShirtListScreen />
                </AdminRoute>
              }
              exact
            />
            <Route
              path="/orderlist"
              element={
                <AdminRoute>
                  <OrderListScreen />
                </AdminRoute>
              }
              exact
            />
            <Route
              path="/Sareelist"
              element={
                <AdminRoute>
                  <SareeListScreen />
                </AdminRoute>
              }
              exact
            />
            <Route
              path="/search/name/:name"
              element={<SearchScreen />}
              exact
            ></Route>
            <Route
              path="/search/category/:category"
              element={<SearchScreen />}
              exact
            ></Route>
            <Route
              path="/search/category/:category/name/:name"
              element={<SearchScreen />}
              exact
            ></Route>
            <Route
              path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
              element={<SearchScreen />}
              exact
            ></Route>

            <Route
              path="/productlist/seller"
              element={
                <SellerRoute>
                  <ProductListScreen />
                </SellerRoute>
              }
            />

            <Route
              path="/womenlist/seller"
              element={
                <SellerRoute>
                  <WomenListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/kidlist/seller"
              element={
                <SellerRoute>
                  <KidListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/tshirtlist/seller"
              element={
                <SellerRoute>
                  <TshirtListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/casualshirtlist/seller"
              element={
                <SellerRoute>
                  <CasualShirtListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/formalshirtlist/seller"
              element={
                <SellerRoute>
                  <CasualShirtListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/sareelist/seller"
              element={
                <SellerRoute>
                  <SareeListScreen />
                </SellerRoute>
              }
            />
            <Route
              path="/orderlist/seller"
              element={
                <SellerRoute>
                  <OrderListScreen />
                </SellerRoute>
              }
            />
            <Route
              path="/product/:id/edit"
              element={<ProductEditScreen />}
              exact
            ></Route>


            <Route
              path="/women/:id/edit"
              element={<WomenEditScreen />}
              exact
            ></Route>
            <Route
              path="/kid/:id/edit"
              element={<KidEditScreen />}
              exact
            ></Route>

            <Route
              path="/tshirt/:id/edit"
              element={<TshirtEditScreen />}
              exact
            ></Route>
            <Route
              path="/formalshirt/:id/edit"
              element={<FormalShirtEditScreen />}
              exact
            ></Route>
            <Route
              path="/casualshirt/:id/edit"
              element={<CasualShirtEditScreen />}
              exact
            ></Route>
            <Route
              path="/saree/:id/edit"
              element={<SareeEditScreen />}
              exact
            ></Route>
            <Route
              path="/user/:id/edit"
              element={
                <AdminRoute>
                  <UserEditScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/userlist"
              element={
                <AdminRoute>
                  <UserListScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <AdminRoute>
                  <DashboardScreen />
                </AdminRoute>
              }
            />
            {/* <Route
              path="/Saree/:id"
              element={<SareeScreen />}
              exact
            ></Route> */}
            <Route
              path="/Saree"
              element={
                <AdminRoute>
                  <SareeScreen />exact
                </AdminRoute>
              }
            />
            <Route
              path="/sareelist/pageNumber/:pageNumber"
              element={
                <AdminRoute>
                  <SareeListScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/book"
              element={
                <AdminRoute>
                  <BookScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/productlist/pageNumber/:pageNumber"
              element={
                <AdminRoute>
                  <ProductListScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/Home"
              element={
                <AdminRoute>
                  <HomeScreens />
                </AdminRoute>
              }
            />
            <Route
              path="/casualshirt"
              element={
                <AdminRoute>
                  <CasualShirtScreens />
                </AdminRoute>
              }
            />

            <Route
              path="/Tshirt"
              element={
                <AdminRoute>
                  <TshirtScreens />
                </AdminRoute>
              }
            />
             <Route
              path="/Formalshirt"
              element={
                <AdminRoute>
                  <FormalshirtScreens />
                </AdminRoute>
              }
            />
            <Route
              path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
              element={<SearchScreen />}
              exact
            ></Route>
            <Route
              path="/map"
              element={
                <PrivateRoute>
                  <MapScreen />
                </PrivateRoute>
              }
            />
            <Route
              path="/support"
              element={
                <AdminRoute>
                  <SupportScreen />
                </AdminRoute>
              }
            />

            <Route
              path="/saree/:id"
              element={<SareeScreen />}
              exact
            ></Route>
            <Route
              path="/product/:id"
              element={<ProductScreen />}
              exact
            ></Route>

            <Route path="/women/:id" element={<WomenScreen />} exact></Route>
            <Route path="/kid/:id" element={<KidScreen />} exact></Route>
            <Route path="/tshirt/:id" element={<TshirtScreen />} exact></Route>
            <Route path="/casualshirt/:id" element={<CasualShirtScreen />} exact></Route>
            <Route path="/formalshirt/:id" element={<FormalshirtScreen />} exact></Route>
            <Route
              path="/orderhistory"
              element={<OrderHistoryScreen />}
            ></Route>
            <Route path="/" element={<HomeScreen />} exact></Route>

          </Routes>
        </main>
        <footer className="row center">
          {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
          <div>All right reserved</div>{' '}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

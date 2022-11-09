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
import { listProductCategories, listProductCategoriesgroup, listProductCategoriestype } from "./actions/productAction";
import { listSareeCategories } from "./actions/sareeAction";
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
import CartFormalShirtScreen from "./screens/CartFormalShirtScreen";
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

import JacketScreen from "./screens/JacketScreen";
import JacketScreens from "./screens/JacketScreens";
import JacketListScreen from "./screens/JacketListScreen";
import JacketEditScreen from "./screens/JacketEditScreen";
import CartJacketScreen from "./screens/CartJacketScreen";

import SweaterScreen from "./screens/SweaterScreen";
import SweaterScreens from "./screens/SweaterScreens";
import SweaterListScreen from "./screens/SweaterListScreen";
import SweaterEditScreen from "./screens/SweaterEditScreen";
import CartSweaterScreen from "./screens/CartSweaterScreen";

import SuitScreen from "./screens/SuitScreen";
import SuitScreens from "./screens/SuitScreens";
import SuitListScreen from "./screens/SuitListScreen";
import SuitEditScreen from "./screens/SuitEditScreen";
import CartSuitScreen from "./screens/CartSuitScreen";

import RainjacketScreen from "./screens/RainjacketScreen";
import RainjacketScreens from "./screens/RainjacketScreens";
import RainJacketListScreen from "./screens/RainJacketListScreen";
import RainJacketEditScreen from "./screens/RainJacketEditScreen";
import CartRainjacketScreen from "./screens/CartRainjacketScreen";

import BlazerScreen from "./screens/BlazerScreen";
import BlazerScreens from "./screens/BlazerScreens";
import BlazerListScreen from "./screens/BlazerListScreen";
import BlazerEditScreen from "./screens/BlazerEditScreen";
import CartBlazerScreen from "./screens/CartBlazerScreen";


import KurtasScreen from "./screens/KurtasScreen";
import KurtasScreens from "./screens/KurtasScreens";
import KurtasListScreen from "./screens/KurtasListScreen";
import KurtasEditScreen from "./screens/KurtasEditScreen";
import CartKurtasScreen from "./screens/CartKurtasScreen";

import IndianScreen from "./screens/IndianScreen";
import IndianScreens from "./screens/IndianScreens";
import IndianListScreen from "./screens/IndianListScreen";
import IndianEditScreen from "./screens/IndianEditScreen";
import CartIndianScreen from "./screens/CartIndianScreen";

import NehruScreen from "./screens/NehruScreen";
import NehruScreens from "./screens/NehruScreens";
import NehruListScreen from "./screens/NehruListScreen";
import NehruEditScreen from "./screens/NehruEditScreen";
import CartNehruScreen from "./screens/CartNehruScreen";

import SherwaniScreen from "./screens/SherwaniScreen";
import SherwaniScreens from "./screens/SherwaniScreens";
import SherwaniListScreen from "./screens/SherwaniListScreen";
import SherwaniEditScreen from "./screens/SherwaniEditScreen";
import CartSherwaniScreen from "./screens/CartSherwaniScreen";

import DhotisScreen from "./screens/DhotisScreen";
import DhotisScreens from "./screens/DhotisScreens";
import DhotisListScreen from "./screens/DhotisListScreen";
import DhotisEditScreen from "./screens/DhotisEditScreen";
import CartDhotisScreen from "./screens/CartDhotisScreen";

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
  
  const productCategorygroupList = useSelector((state) => state.productCategorygroupList);
  const {
    loadinggrp: loadingCategoriesGroup,
    errorcategrp: errorCategoriesGroup,
    categoriesGroup,
  } = productCategorygroupList;

  const productCategorytypeList = useSelector((state) => state.productCategorytypeList);
  const {
    loadingtype: loadingCategoriesType,
    errorcategtype: errorCategoriesType,
    categoriesType,
  } = productCategorytypeList;
  useEffect(() => {
    dispatch(listProductCategories());
    dispatch(listProductCategoriesgroup());
    dispatch(listProductCategoriestype());
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
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <div className="row navigation">
            <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
            <div className="brand-name">
              <Link to="/">
                <img
                  src="/image/logo.png"
                  alt="lala"
                  height="35px"
                  width="30px"
                  className="logo img"
                  margin-right="250px"
                />
                <span className="nandalala">&nbsp;</span>lala
                <span className="in"></span>
              </Link>
            </div>
            {userInfo && userInfo && (
              <div className="search">
                <SearchBox />
              </div>
            )}
            {/* <button
              className="hamburger"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <i className="fa fa-bars"></i>
            </button> */}
            <div
              className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
              }
            >
              <ul>
                <li>
                  <div className="dropdown">
                    <Link className="home" to="/cart">
                      <i className="fa fa-shopping-cart"></i>&nbsp;Cart
                      {cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                      )}
                    </Link>
                  </div>
                </li>
                <li>
                  {userInfo ? (
                    <div className="dropdown">
                      <Link className="home" to="#">
                        {userInfo.name}{" "}
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                          {" "}
                          <Link to="/profile">User Profile</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/orderhistory">OrderHistory</Link>
                        </li>
                        <li>
                          <Link to="#signout" onClick={signoutHandler}>
                            SignOut
                          </Link>

                          <Link
                            to="#accountout"
                            onClick={accountoutHandler}
                          ></Link>
                          <Link
                            to="#registerout"
                            onClick={registeroutHandler}
                          ></Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link to="/signin">Sign In</Link>
                  )}
                </li>
                <li>
                  {userInfo && userInfo.isSeller && (
                    <div className="dropdown">
                      <Link className="home" to="#admin">
                        Seller
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                          {" "}
                          <Link to="/productlist/seller">Products</Link>
                        </li>
                        <li>
                          <Link to="/orderlist/seller">Orders</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  {userInfo && userInfo.isAdmin && (
                    <div className="dropdown">
                      <Link className="home" to="#admin">
                        Admin
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                          <Link to="/productlist">Products</Link>
                        </li>
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
                </li>
              </ul>
            </div>
          </div>
          
          <div className="second-nav">
            <div className="wrapper">
              <input type="radio" name="slider" id="menu-btn" />
              <input type="radio" name="slider" id="close-btn" />
              <ul className="nav-links">
                <label htmlFor="close-btn" className="btn close-btn">
                  <i className="fa fa-times"></i>
                </label>
                {userInfo && userInfo && (
                  <li>
                    <Link className="desktop-item" to="#men">
                      Men
                    </Link>
                    <input type="checkbox" id="showMega" />
                    <label htmlFor="showMega" className="mobile-item">
                      MEN
                    </label>
                    <div className="mega-box">
                      <div className="content">
                        <div className="row">
                          <ul className="mega-links">
                            <li>
                              <h3>
                                <Link
                                  to="search/name/topwear"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Topwear
                                </Link>
                              </h3>
                              {""}
                            </li>
                            <li>
                              <Link to="search/name/t-shirt">T-shirts</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-casual">casual shirts</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-formal-shirt">formal shirts</Link>
                            </li>

                            <li>
                              <Link to="search/name/men-sweater">sweater</Link>
                            </li>

                            <li>
                              <Link to="search/name/men-jacket">Jackets</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-blazer">Blazer&coats</Link>
                            </li>

                            <li>
                              <Link to="search/name/men-suit">suits</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-rain-jacket">Rain Jackets</Link>
                            </li>

                            <li>
                              <h3>
                                <Link
                                  to="search/name/men-indian"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Indian festival wear
                                </Link>
                              </h3>
                            </li>

                            <li>
                              <Link to="search/name/men-kurtas">
                                Kurtas&kurtaseats
                              </Link>
                            </li>
                            <li>
                              <Link to="search/name/men-sherwani">Sherwanis</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-nehru">NehruJackets</Link>
                            </li>

                            <li>
                              <Link to="search/name/men-dhotis">Dhotis</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links">
                            <li>
                              <h3>
                                <Link
                                  to="search/name/men-Bottom-Wear"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Bottom Wear
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/name/men-jeans">Jeans</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-casual-trousers">Casual trousers</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-formal-trousers">formal trousers</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-shorts">shorts</Link>
                            </li>

                            <li>
                              <Link to="search/name/men-trackpants-joggers">
                                trackpants&joggers
                              </Link>
                            </li>

                            <li>
                              <h3>
                                <Link
                                  to="search/name/men-InnearWear-Sleepe"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Innear Wear&Sleepe Wear
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/name/men-briefs-trunks">briefs&trunks</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-boxers">boxers</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-formal-trousers">formal trousers</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-shorts">shorts</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-vests">vests</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-sleepwear-loungewear">
                                sleepwear&loungewear
                              </Link>
                            </li>

                            <li>
                              <Link to="search/name/men-thermals">thermals</Link>
                            </li>

                            <li>
                              <h3>
                                <Link
                                  to="search/name/men-plus"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Plus Size
                                </Link>
                              </h3>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/name/men-Foot-Wear"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Foot Wear
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/name/men-casual-shoes">casual shoes</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-sports-shoes">sports shoes</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-formal-shoes">formal shoes</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-sneakers">sneakers</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-sandals-floaters">
                                sandals&floaters
                              </Link>
                            </li>
                            <li>
                              <Link to="search/name/men-flipfloaps">flipfloaps</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-socks">socks</Link>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/name/men-Personal-Care-Grooming"
                                  style={{ color: "#ee5f73" }}
                                >
                                  personalCareGrooming
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link
                                to="search/name/men-sunglasses-Frames"
                                style={{ color: "#ee5f73" }}
                              >
                                Sunglasses&Frames
                              </Link>
                            </li>
                            <li>
                              <Link to="search/name/men-Watches" style={{ color: "#ee5f73" }}>
                                Watches
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links">
                            <li>
                              <h3>
                                <Link
                                  to="search/name/men-Sports-activy-Wear"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Sports activy Wear
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/name/men-sports-shoes">sports shoes</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-sandal-shoes">sandal shoes</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-active-t-shirts">active t-shirts</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-trackpants-shorts">
                                trackpants&shorts
                              </Link>
                            </li>
                            <li>
                              <Link to="search/name/men-tracksuits">tracksuits</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-jackets-sweetshirts">
                                Jackets&sweetshirts
                              </Link>
                            </li>
                           

                            <li>
                              <Link to="search/name/men-sports-accessories">
                                sportsaccessories
                              </Link>
                            </li>

                            <li>
                              <Link to="search/name/men-swirm-wears">swirm wears</Link>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/name/men-gadgets"
                                  style={{ color: "#ee5f73" }}
                                >
                                  gadgets
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/name/men-small-wearables">small wearables</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-fitness-gadgets">fitness gadgets</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-headphone">headphone</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-speakers">speakers</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links">
                            <li>
                              <h3>
                                <Link
                                  to="search/name/men-faschion"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Faschion Accessories
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/name/men-wallets">wallets</Link>
                            </li>

                            <li>
                              <Link to="search/name/men-belts">belts</Link>
                            </li>

                            <li>
                              <Link to="search/name/men-perfume-bodymists">
                                perfume&bodymists
                              </Link>
                            </li>
                            <li>
                              <Link to="search/name/men-belts">helmets</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-trimmers">trimmers</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-Deodorants">Deodorants</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-tiles-cuffkins-pocketsquares">
                                tiles,cuffkins&pocketsquares
                              </Link>
                            </li>
                            <li>
                              <Link to="search/name/men-accessory-gift-seat">
                                accessory gift seat
                              </Link>
                            </li>
                            <li>
                              <Link to="search/name/men-caps-hates">caps&hates</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-muffalear-scarves-gloves">
                                muffalear,scarves&gloves
                              </Link>
                            </li>
                            <li>
                              <Link to="search/name/men-perfume-bodymists">
                                perfume&bodymists
                              </Link>
                            </li>
                            <li>
                              <Link to="search/name/men-phone-cases">phone cases</Link>
                            </li>
                            <li>
                              <Link to="search/name/men-rings-wrist-wear">
                                rings&wrist wear
                              </Link>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/name/men-Bags-Backpacks"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Bags&Backpacks
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/name/men-Luggages-trolleys"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Luggages&trolleys
                                </Link>
                              </h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
                {userInfo && userInfo && (
                  <li>
                    <Link className="desktop-item1" to="#men">
                      Women
                    </Link>
                    <input type="checkbox" id="showMega1" />
                    <label htmlFor="showMega1" className="mobile-item1">
                      Women
                    </label>
                    <div className="mega-box1">
                      <div className="content">
                        <div className="row">
                          <ul className="mega-links1">
                            <li>
                              <h3>
                                <Link
                                  to="search/category/women-Indian-fusion-wear"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Indian&fusion wear
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/women-kurtas-suits">kurtas&suits</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-kurits-tunics&tops">
                                kurits,tunics&tops
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/women-sarees">sarees</Link>
                            </li>

                            <li>
                              <Link to="search/category/women-ethnic-wear">ethnic wear</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-laggins-salwars-chudidars">
                                laggins,salwars&chudidars
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Skirts-Palazzos">
                                Skirts & Palazzos
                              </Link>
                            </li>

                            <li>
                              <Link to="search/category/women-Dress-Materials">Dress Materials</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Lehenga-Cholis">Lehenga Cholis</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Dupattas-Shawls">
                                Dupattas & Shawls
                              </Link>
                            </li>

                            <li>
                              <Link to="search/category/women-Jackets">Jackets</Link>
                            </li>

                            <li>
                              <h3>
                                <Link
                                  to="search/category/women-Belts-Scarves-More"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Belts, Scarves & More
                                </Link>
                              </h3>
                            </li>

                            <li>
                              {" "}
                              <h3>
                                <Link
                                  to="search/category/women-Watches-Wearables"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Watches & Wearables
                                </Link>
                              </h3>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links1">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/women-Western-Wear"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Western Wear
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/women-Dresses">Dresses</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Tops">Tops</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-T-shirts">Tshirts</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Jeans">Jeans</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Shorts-Skirts">Shorts & Skirts</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Co-ords">Co-ords</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Playsuits">Playsuits</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Jumpsuits">Jumpsuits</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Shrugs">Shrugs</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Sweaters-Sweatshirts">
                                Sweaters&Sweatshirts
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Jackets-Coats">Jackets & Coats</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Blazers-Waistcoats">
                                Blazers & Waistcoats
                              </Link>
                            </li>

                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/women-Plus-Size"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Plus Size
                                </Link>{" "}
                              </h3>{" "}
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links1">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/women-Maternity"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Maternity
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/women-Sunglasses-Frames"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Sunglasses & Frames
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/women-Foot-Wear"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Foot Wear
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/women-Flats">Flats</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Casual-Shoes">Casual Shoes</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Heels">Heels</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Boots">Boots</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Sports-Shoes-Floaters">
                                SportsShoes&Floaters
                              </Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="/search/category/women-ports-activy-Wear"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Sports &activy Wear
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/women-clothing">Clothing</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Footwear">Footwear</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Sports-Accessories">
                                Sports Accessories
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Sports-Equipment">
                                Sports Equipment
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links1">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/women-Lingerie-Sleepwear"
                                  style={{ color: "#fb56c1" }}
                                >
                                  {" "}
                                  Lingerie & Sleepwear
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/women-Bra">Bra</Link>
                            </li>

                            <li>
                              <Link to="search/category/women-Briefs">Briefs</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Shapewear">Shapewear</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Sleepwear-Loungewear">
                                Sleepwear&Loungewear
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Swimwear">Swimwear</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Camisoles-Thermals">
                                Camisoles & Thermals
                              </Link>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/category/women-Beauty-Personal-Care"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Beauty & Personal Care
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/women-Makeup">Makeup</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Skincare">Skincare</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Premium-Beauty">Premium Beauty</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Lipsticks">Lipsticks</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Fragrances">Fragrances</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links1">
                            <li>
                              <h3>
                                <Link
                                  to="/Gadgets"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Gadgets
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/women-Smart-Wearables">SmartWearables</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Fitness-Gadgets">FitnessGadgets</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Headphones">Headphones</Link>
                            </li>

                            <li>
                              <Link to="search/category/women-Speakers">Speakers</Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/women-Jewellery"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Jewellery
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/women-Fashion-Jewellery">
                                FashionJewellery
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Fine-Jewellery">Fine Jewellery</Link>
                            </li>
                            <li>
                              <Link to="search/category/women-Earrings">Earrings</Link>
                            </li>

                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/women-Gadgets"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Backpacks
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/women-Handbags-Bags-Wallets"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Handbags,Bags&Wallets
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/women-Luggages-Trolleys"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Luggages & Trolleys
                                </Link>
                              </h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
                {userInfo && userInfo && (
                  <li>
                    <Link className="desktop-item1" to="#men">
                      Kids
                    </Link>
                    <input type="checkbox" id="showMega2" />
                    <label htmlFor="showMega2" className="mobile-item2">
                      Kids
                    </label>
                    <div className="mega-box2">
                      <div className="content">
                        <div className="row">
                          <ul className="mega-links2">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/kids-Boys-Clothing"
                                  style={{ color: "#f26a10" }}
                                >
                                  Boys Clothing
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/kids-T-Shirts">T-Shirts</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Shirts">Shirts</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Shorts">Shorts</Link>
                            </li>

                            <li>
                              <Link to="search/category/kids-Jeans">Jeans</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Trousers">Trousers</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Clothing-Sets">Clothing Sets</Link>
                            </li>

                            <li>
                              <Link to="search/category/kids-Ethnic-Wear">Ethnic Wear</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Track-Pants-Pyjamas">
                                Track Pants & Pyjamas
                              </Link>
                            </li>
                            <li>
                              <Link to="/Jacket-Sweater-Sweatshirts">
                                Jacket,Sweater&Sweatshirts
                              </Link>
                            </li>

                            <li>
                              <Link to="search/category/kids-Party-Wear">Party Wear</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Innerwear-Thermals">
                                Innerwear & Thermals
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Nightwear-Loungewear">
                                Nightwear & Loungewear
                              </Link>
                            </li>

                            <li>
                              <Link to="search/category/kids-Value-Packs">Value Packs</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links2">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/kids-Western-Wear"
                                  style={{ color: "#f26a10" }}
                                >
                                  Western-Wear
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/kids-Dresses">Dresses</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Tops">Tops</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-T-shirts">Tshirts</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Clothing-Sets">Clothing Sets</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Lehenga-choli">Lehenga choli</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Kurta-Sets">Kurta Sets</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Party-wear">Party wear</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Dungarees-Jumpsuits">
                                Dungarees & Jumpsuits
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Skirts-shorts">Skirts & shorts</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Tights-Leggings">
                                Tights & Leggings
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Jeans-Trousers-Capris">
                                Jeans,Trousers &Capris
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Jacket-Sweater-Sweatshirts">
                                Jacket,Sweater&Sweatshirts
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Innerwear-Thermals">
                                Innerwear & Thermals
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Nightwear-Loungewear">
                                Nightwear & Loungewear
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Value-Packs">Value Packs</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links2">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/kids-Foot-Wear"
                                  style={{ color: "#f26a10" }}
                                >
                                  Foot Wear
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/kids-Casual-Shoes">Casual Shoes</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Flipflops">Flipflops</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Sports Shoes">Sports Shoes</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Flats">Flats</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Sandals">Sandals</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-School-Shoes">School Shoes</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Socks">Socks</Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link to="search/category/kids-Toys" style={{ color: "#f26a10" }}>
                                  Toys
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/kids-Learning-Development">
                                Learning&Development
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Activity-Toys">Activity Toys</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Soft-Toys">Soft Toys</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Action-Figure-Play">
                                Action Figure / Play set
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links2">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/kids-Infants"
                                  style={{ color: "#f26a10" }}
                                >
                                  Infants
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/kids-Bodysuits">Bodysuits</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Rompers-Sleepsuits">
                                Rompers&Sleepsuits
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Clothing-Sets">Clothing Sets</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Tshirts-Tops">Tshirts & Tops</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Dresses">Dresses</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Bottom-wear">Bottom wear</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Winter-Wear">Winter Wear</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Innerwear-Sleepwear">
                                Innerwear&Sleepwear
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Infant-Care">Infant Care</Link>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/category/kids-Home-Bath"
                                  style={{ color: "#f26a10" }}
                                >
                                  Home & Bath
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/category/kids-Personal-Care"
                                  style={{ color: "#f26a10" }}
                                >
                                  Personal Care
                                </Link>{" "}
                              </h3>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links2">
                            <li>
                              <h3>
                                <Link
                                  to="search/category/kids-Accessories"
                                  style={{ color: "#f26a10" }}
                                >
                                  Kids Accessories
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/kids-Bags-Backpacks">Bags&Backpacks</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Watches">Watches</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Jewellery-Hair-accessory">
                                Jewellery&Hairaccessory
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Sunglasses">Sunglasses</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Masks-Protective-Gears">
                                Masks&ProtectiveGears
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Caps-Hats">Caps & Hats</Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link to="search/category/kids-Brands" style={{ color: "#f26a10" }}>
                                  Brands
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/kids-H&M">H&M</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Max-Kids">Max Kids</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Pantaloons">Pantaloons</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-United-Colors">
                                UnitedColorsofBenettonKids
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-YK">YK</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Kids">U.S. Polo Assn. Kids</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-Mothercare">Mothercare</Link>
                            </li>
                            <li>
                              <Link to="search/category/kids-HRX">HRX</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
                {userInfo && userInfo && (
                  <li>
                    <Link className="desktop-item3" to="#men">
                      Home & Living
                    </Link>
                    <input type="checkbox" id="showMega3" />
                    <label htmlFor="showMega3" className="mobile-item3">
                      Home & Living
                    </label>
                    <div className="mega-box3">
                      <div className="content">
                        <div className="row">
                          <ul className="mega-links3">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/home-Bed-Linen"
                                  style={{ color: "#f2c210" }}
                                >
                                  Bed Linen & Furnishing
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/home-Bed-Runners"> Bed Runners</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Mattress-Protectors">
                                Mattress Protectors
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Bedsheets">Bedsheets</Link>
                            </li>

                            <li>
                              <Link to="search/category/home-Bedding-Sets">Bedding Sets</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Blankets-Quilts-Dohars">
                                Blankets,Quilts&Dohars
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Pillows-Pillow-Covers">
                                Pillows & Pillow Covers
                              </Link>
                            </li>

                            <li>
                              <Link to="search/category/home-Bed-Covers">Bed Covers</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Diwan-Sets">Diwan Sets</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Chair-Pads-Covers">
                                Chair Pads & Covers
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Sofa-Covers">Sofa Covers</Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/home-Flooring"
                                  style={{ color: "#f2c210" }}
                                >
                                  Flooring
                                </Link>{" "}
                              </h3>{" "}
                            </li>
                            <li>
                              <Link to="search/category/home-Floor-Runners">Floor Runners</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Carpets">Carpets</Link>
                            </li>

                            <li>
                              <Link to="search/category/home-Floor-Mats-Dhurries">
                                Floor Mats& Dhurries
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Door-Mats">Door Mats</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links3">
                            <li>
                              <h3>
                                <Link to="search/category/home-Bath" style={{ color: "#f2c210" }}>
                                  Bath
                                </Link>
                              </h3>{" "}
                            </li>
                            <li>
                              <Link to="search/category/home-Bath-Towels">Bath Towels</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Hand-Face-Towels">
                                Hand &Face Towels
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Beach-Towels">Beach Towels</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Towels-Set">Towels Set</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Bath-Rugs">Bath Rugs</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Bath-Robes">Bath Robes</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Bathroom-Accessories">
                                BathroomAccessories
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Shower-Curtains">ShowerCurtains</Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/home-Lamps-Lighting"
                                  style={{ color: "#f2c210" }}
                                >
                                  Lamps&Lighting
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/home-Floor-Lamps">Floor Lamps</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Ceiling-Lamps">CeilingLamps</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Table-Lamps">Table Lamps</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Wall-Lamps">Wall Lamps</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Outdoor-Lamps">Outdoor Lamps</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-String-Lights">String Lights</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links3">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/home-Decor"
                                  style={{ color: "#f2c210" }}
                                >
                                  Home Decor
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/home-Plants-Planters">
                                Plants & Planters
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Aromas-Candles">Aromas & Candles</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Clocks">Clocks</Link>
                            </li>

                            <li>
                              <Link to="search/category/home-Mirrors">Mirrors</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Wall-Decor">Wall Decor</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Festive-Decor">Festive Decor</Link>
                            </li>

                            <li>
                              <Link to="search/category/home-Pooja-Essentials">
                                Pooja Essentials
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Wall-Shelves">Wall Shelves</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Fountains">Fountains</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Showpieces-Vases">
                                Show pieces& Vases
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Ottoman">Ottoman</Link>
                            </li>

                            <li>
                              <h3>
                                <Link
                                  to="search/category/home-Cushions-Cushion-Covers"
                                  style={{ color: "#f2c210" }}
                                >
                                  Cushions&CushionCovers
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="/Curtains"
                                  style={{ color: "#f2c210" }}
                                >
                                  Curtains
                                </Link>{" "}
                              </h3>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links3">
                            <li>
                              <h3>
                                <Link
                                  to="search/category/home-Home-Gift-Sets"
                                  style={{ color: "#f2c210" }}
                                >
                                  Home Gift Sets
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/category/home-Kitchen-Table"
                                  style={{ color: "#f2c210" }}
                                >
                                  Kitchen & Table
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/home-Table-Runners">Table Runners</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Dinnerware-Serveware">
                                Dinnerware & Serveware
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Cups-and-Mugs">Cups and Mugs</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Bakeware-Cookware">
                                Bakeware & Cookware
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Kitchen-Storage-Tools">
                                Kitchen Storage & Tools
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Bar-Drinkware">Bar & Drinkware</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Table-Covers-Furnishings">
                                TableCovers&Furnishings
                              </Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/home-Gadgets"
                                  style={{ color: "#f2c210" }}
                                >
                                  Storage
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/home-Bins">Bins</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Hangers">Hangers</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Organisers">Organisers</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Hooks-Holders">Hooks & Holders</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Laundry-Bags">Laundry Bags</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links3">
                            <li>
                              <h3>
                                {" "}
                                <Link to="search/category/home-Brands" style={{ color: "#f2c210" }}>
                                  Brands
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/home-H&M">H&M</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Marks-Spencer">Marks & Spencer</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Home-Centre">Home Centre</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Spaces">Spaces</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-D-Decor">D'Decor</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Story-Home">Story@Home</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Pure-Home-Living">
                                PureHome&Living
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Swayam">Swayam</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Raymond-Home">Raymond Home</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Maspar">Maspar</Link>{" "}
                            </li>

                            <li>
                              <Link to="search/category/home-Trident">Trident</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Cortina">Cortina</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Random">Random</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Ellementry">Ellementry</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-ROMEE">ROMEE</Link>
                            </li>
                            <li>
                              <Link to="search/category/home-Story-Home">SEJby NishaGupta</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                )}

                {userInfo && userInfo && (
                  <li>
                    <Link className="desktop-item4" to="#men">
                      Beauty
                    </Link>
                    <input type="checkbox" id="showMega4" />
                    <label htmlFor="showMega4" className="mobile-item4">
                      Beauty
                    </label>
                    <div className="mega-box4">
                      <div className="content">
                        <div className="row">
                          <ul className="mega-links4">
                            <li>
                              <h3>
                                {" "}
                                <Link to="search/category/beauty-Makeup" style={{ color: "#0db7af" }}>
                                  Makeup
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Lipstick">Lipstick</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Lip-Gloss">Lip Gloss</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Lip-Liner">Lip Liner</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Mascara">Mascara</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Eyeliner">Eyeliner</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Kajal">Kajal</Link>
                            </li>

                            <li>
                              <Link to="search/category/beauty-Eyeshadow">Eyeshadow</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Foundation">Foundation</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Primer">Primer</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Concealer">Concealer</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Compact">Compact</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Nail-Polish">Nail Polish</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links4">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="/Skincare-Bath-Body "
                                  style={{ color: "#0db7af" }}
                                >
                                  Skincare, Bath & Body
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Face-Moisturiser">
                                Face Moisturiser
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Cleanser">Cleanser</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Masks-Peel">Masks & Peel</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Sunscreen">Sunscreen</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Serum">Serum</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Face-Wash">Face Wash</Link>
                            </li>

                            <li>
                              <Link to="search/category/beauty-Eye-Cream">Eye Cream</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Lip-Balm">Lip Balm</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Body-Lotion ">Body Lotion </Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Body-Wash">Body Wash</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Body-Scrup"> Body Scrub</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Hand-cream">Hand Cream </Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/beauty-Baby-Care"
                                  style={{ color: "#0db7af" }}
                                >
                                  Baby Care
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link to="search/category/beauty-Masks" style={{ color: "#0db7af" }}>
                                  Masks
                                </Link>{" "}
                              </h3>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links4">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/beauty-Haircare"
                                  style={{ color: "#0db7af" }}
                                >
                                  Haircare
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Shampoo">Shampoo</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Conditioner">Conditioners</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Hair-Cream">Hair Cream</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Hair-Oil">Hair Oil</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Hair-Gel">Hair Gel</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Hair-Color">Hair Color</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Hair-Serum">Hair Serum</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Hair-Accessory">Hair Accessory</Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/beauty-Fragrances"
                                  style={{ color: "#0db7af" }}
                                >
                                  Fragrances
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Perfume">Perfume</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Deodorant">Deodorant</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Body-Mist">Body Mist</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links4">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/beauty-Appliances"
                                  style={{ color: "#0db7af" }}
                                >
                                  Appliances
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Hair-Straightener">
                                Hair Straightener
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Hair-Dryer">Hair Dryer</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Epilator">Epilator</Link>
                            </li>

                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/beauty-Men-Grooming"
                                  style={{ color: "#0db7af" }}
                                >
                                  Men's Grooming
                                </Link>{" "}
                              </h3>
                            </li>

                            <li>
                              <Link to="search/category/beauty-Trimmers">Trimmers</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Beard-Oil">Beard Oil</Link>
                            </li>

                            <li>
                              <Link to="search/category/beauty-Hair-Wax">Hair Wax</Link>
                            </li>

                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/beauty-Beauty-Gift-Makeup"
                                  style={{ color: "#0db7af" }}
                                >
                                  Beauty Gift & Makeup Set
                                </Link>{" "}
                              </h3>
                            </li>

                            <li>
                              <Link to="search/category/beauty-Beauty-Gift">Beauty Gift</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Makeup-Kit">Makeup Kit</Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/beauty-Premium-Beauty"
                                  style={{ color: "#0db7af" }}
                                >
                                  Premium Beauty
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/category/beauty-Wellness-Hygiene"
                                  style={{ color: "#0db7af" }}
                                >
                                  Wellness & Hygiene
                                </Link>{" "}
                              </h3>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links4">
                            <li>
                              <h3>
                                <Link
                                  to="search/category/beauty-Top-Brands"
                                  style={{ color: "#0db7af" }}
                                >
                                  Top Brands
                                </Link>{" "}
                              </h3>
                            </li>

                            <li>
                              <Link to="search/category/beauty-Lakme">Lakme</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Maybelline">Maybelline</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Loreal">Loreal</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Philips">Philips</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Bath-Body-Works">
                                Bath & Body Works
                              </Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Body-Shop">The Body Shop</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Biotique">Biotique</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Mamaearth">Mamaearth</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-MCaffeine">MCaffeine</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Nivea">Nivea</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Loreal-Professionnel">
                                Loreal Professionnel
                              </Link>{" "}
                            </li>

                            <li>
                              <Link to="search/category/beauty-KAMA-AYURVEDA">Kama Ayerveda</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-m.a.c">M.A.C</Link>
                            </li>
                            <li>
                              <Link to="search/category/beauty-Forest-Essentials">
                                Forest Essentials
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
              {/* <label htmlFor="menu-btn" className="btn menu-btn">
                <i className="fa fa-bars"></i>
              </label> */}
            </div>
          </div>
          {/* <div className="row nav2">
            <input type="radio" name="slider" id="menu-btn" />
            <input type="radio" name="slider" id="close-btn" />
            <div className="sub-megamenu">
              <label htmlhtmlFor="close-btn" className="btn close-btn">
                <i className="fa fa-times"></i>
              </label>
              {userInfo && userInfo && (
                <div className="user">
                  <span className="nav-item is-active" active-color="orange">
                    <Link className="nav-men" to="#men">
                      MEN
                    </Link>
                  </span>
                  <input type="checkbox" id="showDrop" />
                  <label htmlFor="showDrop" className="mobile-item">
                    MEN
                  </label>
                  <ul className="dropdowns-contents">
                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3 className="btn success">
                            {" "}
                            <Link to="/Topwear" style={{ color: "#ee5f73" }}>
                              Topwear
                            </Link>
                          </h3>{" "}
                        </li>
                        <li>
                          <Link to="/Tshirt">T-shirts</Link>
                        </li>
                        <li>
                          <Link to="/casual">casual shirts</Link>
                        </li>
                        <li>
                          <Link to="/formal-shirts">formal shirts</Link>
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
                            <Link
                              to="/Indian-Festival-Wear"
                              style={{ color: "#ee5f73" }}
                            >
                              Indian festival wear
                            </Link>
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
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Bottom-Wear"
                              style={{ color: "#ee5f73" }}
                            >
                              Bottom Wear
                            </Link>{" "}
                          </h3>{" "}
                        </li>
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
                          <Link to="/trackpants-joggers">
                            trackpants&joggers
                          </Link>
                        </li>
                      </div>
                    

                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/InnearWear-Sleepe"
                              style={{ color: "#ee5f73" }}
                            >
                              Innear Wear&Sleepe Wear
                            </Link>{" "}
                          </h3>
                        </li>
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
                          <Link to="/sleepwear-loungewear">
                            sleepwear&loungewear
                          </Link>
                        </li>

                        <li>
                          <Link to="/thermals">thermals</Link>
                        </li>

                        <li>
                          <h3>
                            {" "}
                            <Link to="/Plus-Size" style={{ color: "#ee5f73" }}>
                              Plus Size
                            </Link>{" "}
                          </h3>
                        </li>
                      </div>
                    </li>

                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Foot-Wear" style={{ color: "#ee5f73" }}>
                              Foot Wear
                            </Link>{" "}
                          </h3>
                        </li>
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
                        <li>
                          <h6>
                            <Link
                              to="/Personal-Care-Grooming"
                              style={{ color: "#ee5f73" }}
                            >
                              personalCareGrooming
                            </Link>{" "}
                          </h6>
                        </li>
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Sunglasses-Frames"
                              style={{ color: "#ee5f73" }}
                            >
                              Sunglasses&Frames
                            </Link>{" "}
                          </h3>
                        </li>
                        <li>
                          {" "}
                          <h3>
                            {" "}
                            <Link to="/Watches" style={{ color: "#ee5f73" }}>
                              Watches
                            </Link>{" "}
                          </h3>
                        </li>
                      </div>
                    </li>
                    <li>
                      <div className="sub-menu">
                        <li>
                          <a>
                            {" "}
                            <h3>
                              {" "}
                              <Link
                                to="/Sports-activy-Wear"
                                style={{ color: "#ee5f73" }}
                              >
                                Sports activy Wear
                              </Link>{" "}
                            </h3>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/sports-shoes">sports shoes</Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/sandal-shoes">sandal shoes</Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/active-t-shirts">active t-shirts</Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/trackpants-shorts">
                              trackpants&shorts
                            </Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/tracksuits">tracksuits</Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/Jackets-sweetshirts">
                              Jackets&sweetshirts
                            </Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/active-t-shirts">active t-shirts</Link>
                          </a>
                        </li>

                        <li>
                          <a href="dffs">
                            <Link to="/sports-accessories">
                              sportsaccessories
                            </Link>
                          </a>
                        </li>

                        <li>
                          <a href="dffs">
                            <Link to="/swirm-wears">swirm wears</Link>
                          </a>
                        </li>
                      </div>

                      <div className="sub-menu">
                        <li>
                          <a>
                            <h3>
                              {" "}
                              <Link to="/gadgets" style={{ color: "#ee5f73" }}>
                                gadgets
                              </Link>{" "}
                            </h3>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/small-wearables">small wearables</Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/fitness-gadgets">fitness gadgets</Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/headphone">headphone</Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/speakers">speakers</Link>
                          </a>
                        </li>
                      </div>
                    </li>
                    <li>
                      <div className="sub-menu">
                        <li>
                          <a href="dffs">
                            <h3>
                              <Link
                                to="/Faschion-Accessories"
                                style={{ color: "#ee5f73" }}
                              >
                                Faschion Accessories
                              </Link>{" "}
                            </h3>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/wallets">wallets</Link>
                          </a>
                        </li>

                        <li>
                          <a href="dffs">
                            <Link to="/belts">belts</Link>
                          </a>
                        </li>

                        <li>
                          <a href="dffs">
                            <Link to="/perfume-bodymists">
                              perfume&bodymists
                            </Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/belts">helmets</Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/trimmers">trimmers</Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/Deodorants">Deodorants</Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/tiles-cuffkins-pocketsquares">
                              tiles,cuffkins&pocketsquares
                            </Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/accessory-gift-seat">
                              accessory gift seat
                            </Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/caps-hates">caps&hates</Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/muffalear-scarves-gloves">
                              muffalear,scarves&gloves
                            </Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/perfume-bodymists">
                              perfume&bodymists
                            </Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/phone-cases">phone cases</Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <Link to="/rings-wrist-wear">rings&wrist wear</Link>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <h5>
                              <Link
                                to="/Bags-Backpacks"
                                style={{ color: "#ee5f73" }}
                              >
                                Bags&Backpacks
                              </Link>{" "}
                            </h5>
                          </a>
                        </li>
                        <li>
                          <a href="dffs">
                            <h5>
                              <Link
                                to="/Luggages-trolleys"
                                style={{ color: "#ee5f73" }}
                              >
                                Luggages&trolleys
                              </Link>{" "}
                            </h5>{" "}
                          </a>
                        </li>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
              {userInfo && userInfo && (
                <div className="user1">
                  <span className="sware">
                    <Link className="nav-men" to="/women">
                      WOMEN
                    </Link>
                  </span>
                  <ul className="dropdowns-contents1">
                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            <Link
                              to="/Indian-fusion-wear"
                              style={{ color: "#fb56c1" }}
                            >
                              Indian&fusion wear
                            </Link>
                          </h3>
                        </li>
                        <li>
                          <Link to="/kurtas-suits">kurtas&suits</Link>
                        </li>
                        <li>
                          <Link to="/kurits-tunics&tops">
                            kurits,tunics&tops
                          </Link>
                        </li>
                        <li>
                          <Link to="/sarees">sarees</Link>
                        </li>

                        <li>
                          <Link to="/ethnic-wear">ethnic wear</Link>
                        </li>
                        <li>
                          <Link to="/laggins-salwars-chudidars">
                            laggins,salwars&chudidars
                          </Link>
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

                        <li>
                          <h3>
                            <Link
                              to="/Belts-Scarves-More"
                              style={{ color: "#fb56c1" }}
                            >
                              Belts, Scarves & More
                            </Link>
                          </h3>
                        </li>

                        <li>
                          {" "}
                          <h3>
                            <Link
                              to="/Watches-Wearables"
                              style={{ color: "#fb56c1" }}
                            >
                              Watches & Wearables
                            </Link>
                          </h3>
                        </li>
                      </div>
                    </li>
                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Western-Wear"
                              style={{ color: "#fb56c1" }}
                            >
                              Western Wear
                            </Link>{" "}
                          </h3>
                        </li>
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
                          <Link to="/Sweaters-Sweatshirts">
                            Sweaters&Sweatshirts
                          </Link>
                        </li>
                        <li>
                          <Link to="/Jackets-Coats">Jackets & Coats</Link>
                        </li>
                        <li>
                          <Link to="/Blazers-Waistcoats">
                            Blazers & Waistcoats
                          </Link>
                        </li>

                        <li>
                          <h3>
                            {" "}
                            <Link to="/Plus-Size" style={{ color: "#fb56c1" }}>
                              Plus Size
                            </Link>{" "}
                          </h3>{" "}
                        </li>
                      </div>
                     
                    </li>

                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Maternity" style={{ color: "#fb56c1" }}>
                              Maternity
                            </Link>{" "}
                          </h3>
                        </li>
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Sunglasses-Frames"
                              style={{ color: "#fb56c1" }}
                            >
                              Sunglasses & Frames
                            </Link>{" "}
                          </h3>
                        </li>
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Foot-Wear" style={{ color: "#fb56c1" }}>
                              Foot Wear
                            </Link>{" "}
                          </h3>
                        </li>
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
                          <Link to="/Sports-Shoes-Floaters">
                            SportsShoes&Floaters
                          </Link>
                        </li>
                      </div>
                    

                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Sports-activy-Wear"
                              style={{ color: "#fb56c1" }}
                            >
                              Sports &activy Wear
                            </Link>{" "}
                          </h3>
                        </li>
                        <li>
                          <Link to="/clothing">Clothing</Link>
                        </li>
                        <li>
                          <Link to="/Footwear">Footwear</Link>
                        </li>
                        <li>
                          <Link to="/Sports-Accessories">
                            Sports Accessories
                          </Link>
                        </li>
                        <li>
                          <Link to="/Sports-Equipment">Sports Equipment</Link>
                        </li>
                      </div>
                    </li>
                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Lingerie-Sleepwear"
                              style={{ color: "#fb56c1" }}
                            >
                              {" "}
                              Lingerie & Sleepwear
                            </Link>{" "}
                          </h3>
                        </li>
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
                          <Link to="/Sleepwear-Loungewear">
                            Sleepwear&Loungewear
                          </Link>
                        </li>
                        <li>
                          <Link to="/Swimwear">Swimwear</Link>
                        </li>
                        <li>
                          <Link to="/Camisoles-Thermals">
                            Camisoles & Thermals
                          </Link>
                        </li>
                      </div>
                     
                      <div className="sub-menu">
                        <li>
                          <h3>
                            <Link
                              to="/Beauty-Personal-Care"
                              style={{ color: "#fb56c1" }}
                            >
                              Beauty & Personal Care
                            </Link>{" "}
                          </h3>
                        </li>
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
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Gadgets" style={{ color: "#fb56c1" }}>
                              Gadgets
                            </Link>
                          </h3>
                        </li>
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
                    

                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Jewellery" style={{ color: "#fb56c1" }}>
                              Jewellery
                            </Link>
                          </h3>
                        </li>
                        <li>
                          <Link to="/Fashion-Jewellery">FashionJewellery</Link>
                        </li>
                        <li>
                          <Link to="/Fine-Jewellery">Fine Jewellery</Link>
                        </li>
                        <li>
                          <Link to="/Earrings">Earrings</Link>
                        </li>

                        <li>
                          <h3>
                            {" "}
                            <Link to="/Gadgets" style={{ color: "#fb56c1" }}>
                              Backpacks
                            </Link>
                          </h3>
                        </li>
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Handbags-Bags-Wallets"
                              style={{ color: "#fb56c1" }}
                            >
                              Handbags,Bags&Wallets
                            </Link>
                          </h3>
                        </li>
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Luggages-Trolleys"
                              style={{ color: "#fb56c1" }}
                            >
                              Luggages & Trolleys
                            </Link>
                          </h3>
                        </li>
                      </div>
                      
                    </li>
                  </ul>
                </div>
              )}
              {userInfo && userInfo && (
                <div className="user2">
                  <span className="activate is-active" active-color="orange">
                    <Link className="nav-men" to="\kids">
                      kIDS
                    </Link>
                  </span>
                  <ul className="dropdowns-contents2">
                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Boys-Clothing"
                              style={{ color: "#f26a10" }}
                            >
                              Boys Clothing
                            </Link>
                          </h3>
                        </li>
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
                          <Link to="/Track-Pants-Pyjamas">
                            Track Pants & Pyjamas
                          </Link>
                        </li>
                        <li>
                          <Link to="/Jacket-Sweater-Sweatshirts">
                            Jacket,Sweater&Sweatshirts
                          </Link>
                        </li>

                        <li>
                          <Link to="/Party-Wear">Party Wear</Link>
                        </li>
                        <li>
                          <Link to="/Innerwear-Thermals">
                            Innerwear & Thermals
                          </Link>
                        </li>
                        <li>
                          <Link to="/Nightwear-Loungewear">
                            Nightwear & Loungewear
                          </Link>
                        </li>

                        <li>
                          <Link to="/Value-Packs">Value Packs</Link>
                        </li>
                      </div>
                    </li>
                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Western-Wear"
                              style={{ color: "#f26a10" }}
                            >
                              Western-Wear
                            </Link>{" "}
                          </h3>
                        </li>
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
                          <Link to="/Dungarees-Jumpsuits">
                            Dungarees & Jumpsuits
                          </Link>
                        </li>
                        <li>
                          <Link to="/Skirts-shorts">Skirts & shorts</Link>
                        </li>
                        <li>
                          <Link to="/Tights-Leggings">Tights & Leggings</Link>
                        </li>
                        <li>
                          <Link to="/Jeans-Trousers-Capris">
                            Jeans,Trousers &Capris
                          </Link>
                        </li>
                        <li>
                          <Link to="/Jacket-Sweater-Sweatshirts">
                            Jacket,Sweater&Sweatshirts
                          </Link>
                        </li>
                        <li>
                          <Link to="/Innerwear-Thermals">
                            Innerwear & Thermals
                          </Link>
                        </li>
                        <li>
                          <Link to="/Nightwear-Loungewear">
                            Nightwear & Loungewear
                          </Link>
                        </li>
                        <li>
                          <Link to="/Value-Packs">Value Packs</Link>
                        </li>
                      </div>
                    </li>

                    <li>
                  

                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Foot-Wear" style={{ color: "#f26a10" }}>
                              Foot Wear
                            </Link>{" "}
                          </h3>
                        </li>
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
                    
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Toys" style={{ color: "#f26a10" }}>
                              Toys
                            </Link>{" "}
                          </h3>
                        </li>
                        <li>
                          <Link to="/Learning-Development">
                            Learning&Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/Activity-Toys">Activity Toys</Link>
                        </li>
                        <li>
                          <Link to="/Soft-Toys">Soft Toys</Link>
                        </li>
                        <li>
                          <Link to="/Action-Figure-Play">
                            Action Figure / Play set
                          </Link>
                        </li>
                      </div>
                    </li>

                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Infants" style={{ color: "#f26a10" }}>
                              Infants
                            </Link>{" "}
                          </h3>
                        </li>
                        <li>
                          <Link to="/Bodysuits">Bodysuits</Link>
                        </li>
                        <li>
                          <Link to="/Rompers-Sleepsuits">
                            Rompers&Sleepsuits
                          </Link>
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
                          <Link to="/Innerwear-Sleepwear">
                            Innerwear&Sleepwear
                          </Link>
                        </li>
                        <li>
                          <Link to="/Infant-Care">Infant Care</Link>
                        </li>
                        <li>
                          <h3>
                            <Link to="/Home-Bath" style={{ color: "#f26a10" }}>
                              Home & Bath
                            </Link>{" "}
                          </h3>
                        </li>
                        <li>
                          <h3>
                            <Link
                              to="/Personal-Care"
                              style={{ color: "#f26a10" }}
                            >
                              Personal Care
                            </Link>{" "}
                          </h3>
                        </li>
                      </div>
                    </li>
                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            <Link
                              to="/Kids-Accessories"
                              style={{ color: "#f26a10" }}
                            >
                              Kids Accessories
                            </Link>{" "}
                          </h3>
                        </li>
                        <li>
                          <Link to="/Bags-Backpacks">Bags&Backpacks</Link>
                        </li>
                        <li>
                          <Link to="/Watches">Watches</Link>
                        </li>
                        <li>
                          <Link to="/Jewellery-Hair-accessory">
                            Jewellery&Hairaccessory
                          </Link>
                        </li>
                        <li>
                          <Link to="/Sunglasses">Sunglasses</Link>
                        </li>
                        <li>
                          <Link to="/Masks-Protective-Gears">
                            Masks&ProtectiveGears
                          </Link>
                        </li>
                        <li>
                          <Link to="Caps-Hats">Caps & Hats</Link>
                        </li>
                      </div>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Brands" style={{ color: "#f26a10" }}>
                              Brands
                            </Link>
                          </h3>
                        </li>
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
                          <Link to="/United-Colors">
                            UnitedColorsofBenettonKids
                          </Link>
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
              )}
              {userInfo && userInfo && (
                <div className="user3">
                  <span className="living is-active" active-color="orange">
                    <Link className="nav-men" to="home">
                      HOME&LIVING
                    </Link>
                  </span>
                  <ul className="dropdowns-contents3">
                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Bed-Linen-Furnishing"
                              style={{ color: "#f2c210" }}
                            >
                              Bed Linen & Furnishing
                            </Link>
                          </h3>
                        </li>
                        <li>
                          <Link to="/Bed-Runners"> Bed Runners</Link>
                        </li>
                        <li>
                          <Link to="/Mattress-Protectors">
                            Mattress Protectors
                          </Link>
                        </li>
                        <li>
                          <Link to="/Bedsheets">Bedsheets</Link>
                        </li>

                        <li>
                          <Link to="/Bedding-Sets">Bedding Sets</Link>
                        </li>
                        <li>
                          <Link to="/Blankets-Quilts-Dohars">
                            Blankets,Quilts&Dohars
                          </Link>
                        </li>
                        <li>
                          <Link to="/Pillows-Pillow-Covers">
                            Pillows & Pillow Covers
                          </Link>
                        </li>

                        <li>
                          <Link to="/Bed-Covers">Bed Covers</Link>
                        </li>
                        <li>
                          <Link to="/Diwan-Sets">Diwan Sets</Link>
                        </li>
                        <li>
                          <Link to="/Chair-Pads-Covers">
                            Chair Pads & Covers
                          </Link>
                        </li>
                        <li>
                          <Link to="/Sofa-Covers">Sofa Covers</Link>
                        </li>
                      </div>

                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Flooring" style={{ color: "#f2c210" }}>
                              Flooring
                            </Link>{" "}
                          </h3>{" "}
                        </li>
                        <li>
                          <Link to="/Floor-Runners">Floor Runners</Link>
                        </li>
                        <li>
                          <Link to="/Carpets">Carpets</Link>
                        </li>

                        <li>
                          <Link to="/Floor-Mats-Dhurries">
                            Floor Mats& Dhurries
                          </Link>
                        </li>
                        <li>
                          <Link to="/Door-Mats">Door Mats</Link>
                        </li>
                      </div>
                    </li>

                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            <Link to="/Bath" style={{ color: "#f2c210" }}>
                              Bath
                            </Link>
                          </h3>{" "}
                        </li>
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
                          <Link to="/Bathroom-Accessories">
                            BathroomAccessories
                          </Link>
                        </li>
                        <li>
                          <Link to="/Shower-Curtains">ShowerCurtains</Link>
                        </li>
                      </div>

                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Lamps-Lighting"
                              style={{ color: "#f2c210" }}
                            >
                              Lamps&Lighting
                            </Link>{" "}
                          </h3>
                        </li>
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
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Home-Decor" style={{ color: "#f2c210" }}>
                              Home Decor
                            </Link>{" "}
                          </h3>
                        </li>
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

                        <li>
                          <h3>
                            <Link
                              to="/Cushions-Cushion-Covers"
                              style={{ color: "#f2c210" }}
                            >
                              Cushions&CushionCovers
                            </Link>{" "}
                          </h3>
                        </li>
                        <li>
                          <h3>
                            <Link to="/Curtains" style={{ color: "#f2c210" }}>
                              Curtains
                            </Link>{" "}
                          </h3>
                        </li>
                      </div>
                    </li>
                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            <Link
                              to="/Home-Gift-Sets"
                              style={{ color: "#f2c210" }}
                            >
                              Home Gift Sets
                            </Link>{" "}
                          </h3>
                        </li>
                        <li>
                          <h3>
                            <Link
                              to="/Kitchen-Table"
                              style={{ color: "#f2c210" }}
                            >
                              Kitchen & Table
                            </Link>{" "}
                          </h3>
                        </li>
                        <li>
                          <Link to="/Table-Runners">Table Runners</Link>
                        </li>
                        <li>
                          <Link to="/Dinnerware-Serveware">
                            Dinnerware & Serveware
                          </Link>
                        </li>
                        <li>
                          <Link to="/Cups-and-Mugs">Cups and Mugs</Link>
                        </li>
                        <li>
                          <Link to="/Bakeware-Cookware">
                            Bakeware & Cookware
                          </Link>
                        </li>
                        <li>
                          <Link to="/Kitchen-Storage-Tools">
                            Kitchen Storage & Tools
                          </Link>
                        </li>
                        <li>
                          <Link to="/Bar-Drinkware">Bar & Drinkware</Link>
                        </li>
                        <li>
                          <Link to="/Table-Covers-Furnishings">
                            TableCovers&Furnishings
                          </Link>
                        </li>
                      </div>
                      
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Gadgets" style={{ color: "#f2c210" }}>
                              Storage
                            </Link>
                          </h3>
                        </li>
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
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Brands" style={{ color: "#f2c210" }}>
                              Brands
                            </Link>
                          </h3>
                        </li>
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
              )}
              {userInfo && userInfo && (
                <div className="user4">
                  <span className="beauty is-active" active-color="orange">
                    <Link className="nav-men" to="beauty">
                      BEAUTY
                    </Link>
                  </span>
                  <ul className="dropdowns-contents4">
                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Makeup" style={{ color: "#0db7af" }}>
                              Makeup
                            </Link>
                          </h3>
                        </li>
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
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Skincare-Bath-Body "
                              style={{ color: "#0db7af" }}
                            >
                              Skincare, Bath & Body
                            </Link>{" "}
                          </h3>
                        </li>
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
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Baby-Care" style={{ color: "#0db7af" }}>
                              Baby Care
                            </Link>{" "}
                          </h3>
                        </li>
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Masks" style={{ color: "#0db7af" }}>
                              Masks
                            </Link>{" "}
                          </h3>
                        </li>
                      </div>
                    </li>

                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Haircare" style={{ color: "#0db7af" }}>
                              Haircare
                            </Link>{" "}
                          </h3>
                        </li>
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
                    

                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Fragrances" style={{ color: "#0db7af" }}>
                              Fragrances
                            </Link>{" "}
                          </h3>
                        </li>
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
                      <div className="sub-menu">
                        <li>
                          <h3>
                            {" "}
                            <Link to="/Appliances" style={{ color: "#0db7af" }}>
                              Appliances
                            </Link>{" "}
                          </h3>
                        </li>
                        <li>
                          <Link to="/Hair-Straightener">Hair Straightener</Link>
                        </li>
                        <li>
                          <Link to="/Hair-Dryer">Hair Dryer</Link>
                        </li>
                        <li>
                          <Link to="/Epilator">Epilator</Link>
                        </li>
                     
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Men-Grooming"
                              style={{ color: "#0db7af" }}
                            >
                              Men's Grooming
                            </Link>{" "}
                          </h3>
                        </li>

                        <li>
                          <Link to="/Trimmers">Trimmers</Link>
                        </li>
                        <li>
                          <Link to="/Beard-Oil">Beard Oil</Link>
                        </li>

                        <li>
                          <Link to="/Hair-Wax">Hair Wax</Link>
                        </li>

                    
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Beauty-Gift-Makeup"
                              style={{ color: "#0db7af" }}
                            >
                              Beauty Gift & Makeup Set
                            </Link>{" "}
                          </h3>
                        </li>

                        <li>
                          <Link to="/Beauty-Gift">Beauty Gift</Link>
                        </li>
                        <li>
                          <Link to="/Makeup-Kit">Makeup Kit</Link>
                        </li>
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Premium-Beauty"
                              style={{ color: "#0db7af" }}
                            >
                              Premium Beauty
                            </Link>{" "}
                          </h3>
                        </li>
                        <li>
                          <h3>
                            {" "}
                            <Link
                              to="/Wellness-Hygiene"
                              style={{ color: "#0db7af" }}
                            >
                              Wellness & Hygiene
                            </Link>{" "}
                          </h3>
                        </li>
                      </div>
                    
                    </li>
                    <li>
                      <div className="sub-menu">
                        <li>
                          <h3>
                            <Link to="/Top-Brands" style={{ color: "#0db7af" }}>
                              Top Brands
                            </Link>{" "}
                          </h3>
                        </li>

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
                          <Link to="/Loreal-Professionnel">
                            Loreal Professionnel
                          </Link>

                          <li>
                            <Link to="/KAMA-AYURVEDA">Kama Ayerveda</Link>
                          </li>
                          <li>
                            <Link to="/m.a.c">M.A.C</Link>
                          </li>
                          <li>
                            <Link to="/Forest-Essentials">
                              Forest Essentials
                            </Link>
                          </li>
                        </li>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <label htmlFor="menu-btn" className="btn menu-btn">
              <i className="fa fa-bars"></i>
            </label>
          </div> */}
        </header>
        <aside className={sidebarIsOpen ? "open" : ""}>
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
            <Route path="/search/name" element={<SearchScreen />} exact></Route>
            <Route
              path="/cartcasualshirt/:id"
              element={<CartCasualShirtScreen />}
            ></Route>
            <Route
              path="/cartformalshirt/:id"
              element={<CartFormalShirtScreen />}
            ></Route>
            <Route
              path="/cartsweater/:id"
              element={<CartSweaterScreen />}
            ></Route>
            <Route
              path="/cartjacket/:id"
              element={<CartJacketScreen />}
            ></Route>
            <Route path="/cartsuit/:id" element={<CartSuitScreen />}></Route>
            <Route path="/cartrainjacket/:id" element={<CartRainjacketScreen />}></Route>
            <Route path="/cartblazer/:id" element={<CartBlazerScreen />}></Route>

            <Route path="/cartdhotis/:id" element={<CartDhotisScreen />}></Route>
            <Route path="/cartkurtas/:id" element={<CartKurtasScreen />}></Route>
            <Route path="/cartnehru/:id" element={<CartNehruScreen />}></Route>
            <Route path="/cartindian/:id" element={<CartIndianScreen />}></Route>
            <Route path="/cartsherwani/:id" element={<CartSherwaniScreen />}></Route>

            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/cartwomen" element={<CartWomenScreen />}></Route>
            <Route path="/cartkid" element={<CartKidScreen />}></Route>
            <Route path="/cartTshirt" element={<CartTshirtScreen />}></Route>
            <Route
              path="/cartCasualShirt"
              element={<CartCasualShirtScreen />}
            ></Route>
            <Route
              path="/cartFormalShirt"
              element={<CartFormalShirtScreen />}
            ></Route>
            <Route path="/cartJacket" element={<CartJacketScreen />}></Route>
            <Route path="/cartSweater" element={<CartSweaterScreen />}></Route>
            <Route path="/cartSuit" element={<CartSuitScreen />}></Route>
            <Route
              path="/cartRainJacket"
              element={<CartRainjacketScreen />}
            ></Route>
            <Route path="/cartBlazer" element={<CartBlazerScreen />}></Route>
            <Route path="/cartsherwani" element={<CartSherwaniScreen />}></Route>
            <Route path="/cartkurtas" element={<CartKurtasScreen />}></Route>
            <Route path="/cartnehru" element={<CartNehruScreen />}></Route>
            <Route path="/cartindian" element={<CartIndianScreen />}></Route>
            <Route path="/cartdhotis" element={<CartDhotisScreen />}></Route>

            <Route path="/signin" element={<SigninScreen />}></Route>
            <Route path="/account" element={<AccountScreen />}></Route>
            <Route
              path="/accountcreation"
              element={<AccountCreation />}
            ></Route>
            <Route path="/adminin" element={<AdmininScreen />}></Route>
            <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
            <Route path="/payment" element={<PaymentMethodScreen />}></Route>
            <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
            <Route path="/order/:id" element={<OrderScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
            <Route path="/search/name" element={<SearchScreen />} exact></Route>
            <Route
              path="/productlist/seller"
              element={
                <SellerRoute>
                  <ProductListScreen />
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
                  <FormalShirtListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/jacketlist/seller"
              element={
                <SellerRoute>
                  <JacketListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/sweaterlist/seller"
              element={
                <SellerRoute>
                  <SweaterListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/suitlist/seller"
              element={
                <SellerRoute>
                  <SuitListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/rainjacketlist/seller"
              element={
                <SellerRoute>
                  <RainJacketListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/blazerlist/seller"
              element={
                <SellerRoute>
                  <BlazerListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
  <Route path="/kurtaslist/seller" element={<SellerRoute><KurtasListScreen /></SellerRoute>} exact></Route>
            <Route path="/nehrulist/seller" element={<SellerRoute><NehruListScreen /></SellerRoute>} exact></Route>
            <Route path="/indianlist/seller" element={<SellerRoute><IndianListScreen /></SellerRoute>} exact></Route>
            <Route path="/dhotislist/seller" element={<SellerRoute><DhotisListScreen /></SellerRoute>} exact></Route>
            <Route path="/sherwanilist/seller" element={<SellerRoute><SherwaniListScreen /></SellerRoute>} exact></Route>
            <Route
              path="/Sareelist/seller"
              element={
                <SellerRoute>
                  <SareeListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/OrderList/seller"
              element={
                <SellerRoute>
                  <OrderListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
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
              path="/jacketlist"
              element={
                <AdminRoute>
                  <JacketListScreen />
                </AdminRoute>
              }
              exact
            />

            <Route
              path="/sweaterlist"
              element={
                <AdminRoute>
                  <SweaterListScreen />
                </AdminRoute>
              }
              exact
            />
            <Route
              path="/suitlist"
              element={
                <AdminRoute>
                  <SuitListScreen />
                </AdminRoute>
              }
              exact
            />
            <Route
              path="/rainjacketlist"
              element={
                <AdminRoute>
                  <RainJacketListScreen />
                </AdminRoute>
              }
              exact
            />
            <Route
              path="/blazerlist"
              element={
                <AdminRoute>
                  <BlazerListScreen />
                </AdminRoute>
              }
              exact
            />

            <Route
              path="/kurtastlist"
              element={
                <AdminRoute>
                  <KurtasListScreen />
                </AdminRoute>
              }
              exact
            />


            <Route
              path="/nehrulist"
              element={
                <AdminRoute>
                  <NehruListScreen />
                </AdminRoute>
              }
              exact
            />



            <Route
              path="/dhotislist"
              element={
                <AdminRoute>
                  <DhotisListScreen />
                </AdminRoute>
              }
              exact
            />



            <Route
              path="/indianlist"
              element={
                <AdminRoute>
                  <IndianListScreen />
                </AdminRoute>
              }
              exact
            />


            <Route
              path="/dhotislist"
              element={
                <AdminRoute>
                  <DhotisListScreen />
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
              path="/search/categorygroup:categorygroup"
              element={<SearchScreen />}
              exact
            ></Route>
            <Route
              path="/search/categorytype:categorytype"
              element={<SearchScreen />}
              exact
            ></Route>
            {/* <Route
              path="/search/category/:category/name/:name"
              element={<SearchScreen />}
              exact
            ></Route> */}
            <Route
              path="/search/category:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
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
              path="/jacketlist/seller"
              element={
                <SellerRoute>
                  <jacketListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/sweaterlist/seller"
              element={
                <SellerRoute>
                  <SweaterListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/dhotislist/seller"
              element={
                <SellerRoute>
                  <DhotisListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/nehrulist/seller"
              element={
                <SellerRoute>
                  <NehruListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/sherwanilist/seller"
              element={
                <SellerRoute>
                  <SherwaniListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/indianlist/seller"
              element={
                <SellerRoute>
                  <IndianListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            <Route
              path="/kurtaslist/seller"
              element={
                <SellerRoute>
                  <KurtasListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            {/* <Route
              path="/blazerlist/seller"
              element={
                <SellerRoute>
                  <BlazerListScreen />
                </SellerRoute>
              }
              exact
            ></Route> */}
            <Route
              path="/suitlist/seller"
              element={
                <SellerRoute>
                  <SuitListScreen />
                </SellerRoute>
              }
              exact
            ></Route>
            {/* <Route
              path="/rainjacketlist/seller"
              element={
                <SellerRoute>
                  <RainJacketListScreen />
                </SellerRoute>
              }
              exact
            ></Route> */}
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
              path="/sweater/:id/edit"
              element={<SweaterEditScreen />}
              exact
            ></Route>

            <Route
              path="/jacket/:id/edit"
              element={<JacketEditScreen />}
              exact
            ></Route>

            <Route
              path="/blazer/:id/edit"
              element={<BlazerEditScreen />}
              exact
            ></Route>

            <Route
              path="/rainjacket/:id/edit"
              element={<RainJacketEditScreen />}
              exact
            ></Route>

            <Route
              path="/suit/:id/edit"
              element={<SuitEditScreen />}
              exact
            ></Route>
            <Route
              path="/dhotis/:id/edit"
              element={<DhotisEditScreen />}
              exact
            ></Route>
            <Route
              path="/nehru/:id/edit"
              element={<NehruEditScreen />}
              exact
            ></Route>
            <Route
              path="/sherwani/:id/edit"
              element={<SherwaniEditScreen />}
              exact
            ></Route>
            <Route
              path="/indian/:id/edit"
              element={<IndianEditScreen />}
              exact
            ></Route>
            <Route
              path="/kurtas/:id/edit"
              element={<KurtasEditScreen />}
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
                  <SareeScreen />
                  exact
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
              path="/suitlist/pageNumber/:pageNumber"
              element={
                <AdminRoute>
                  <SuitListScreen />
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
              path="/casual-shirt"
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
              path="/Formal-shirt"
              element={
                <AdminRoute>
                  <FormalshirtScreens />
                </AdminRoute>
              }
            />

            <Route
              path="/Sweater"
              element={
                <AdminRoute>
                  <SweaterScreens />
                </AdminRoute>
              }
            />

            <Route
              path="/Jacket"
              element={
                <AdminRoute>
                  <JacketScreens />
                </AdminRoute>
              }
            />
            <Route
              path="/suit"
              element={
                <AdminRoute>
                  <SuitScreens />
                </AdminRoute>
              }
            />
            <Route
              path="/Rain-Jacket"
              element={
                <AdminRoute>
                  <RainjacketScreens />
                </AdminRoute>
              }
            />
            <Route
              path="/Blazer"
              element={
                <AdminRoute>
                  <BlazerScreens />
                </AdminRoute>
              }
            />
            <Route
              path="/Dhotis"
              element={
                <AdminRoute>
                  <DhotisScreens />
                </AdminRoute>
              }
            />
            <Route
              path="/Kurtas"
              element={
                <AdminRoute>
                  <KurtasScreens />
                </AdminRoute>
              }
            />
            <Route
              path="/Indian"
              element={
                <AdminRoute>
                  <IndianScreens />
                </AdminRoute>
              }
            />
            <Route
              path="/Sherwani"
              element={
                <AdminRoute>
                  <SherwaniScreens />
                </AdminRoute>
              }
            />
            <Route
              path="/Nehru"
              element={
                <AdminRoute>
                  <NehruScreens />
                </AdminRoute>
              }
            />
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

            <Route path="/saree/:id" element={<SareeScreen />} exact></Route>
            <Route
              path="/product/:id"
              element={<ProductScreen />}
              exact
            ></Route>

            <Route path="/women/:id" element={<WomenScreen />} exact></Route>
            <Route path="/kid/:id" element={<KidScreen />} exact></Route>
            <Route path="/tshirt/:id" element={<TshirtScreen />} exact></Route>
            <Route
              path="/casualshirt/:id"
              element={<CasualShirtScreen />}
              exact
            ></Route>
            <Route
              path="/formalshirt/:id"
              element={<FormalshirtScreen />}
              exact
            ></Route>
            <Route path="/jacket/:id" element={<JacketScreen />} exact></Route>
            <Route
              path="/sweater/:id"
              element={<SweaterScreen />}
              exact
            ></Route>

            <Route path="/blazer/:id" element={<BlazerScreen />} exact></Route>
            <Route
              path="/rainjacket/:id"
              element={<RainjacketScreen />}
              exact
            ></Route>
            <Route path="/suit/:id" element={<SuitScreen />} exact></Route>
            <Route path="/sherwani/:id" element={<SherwaniScreen />} exact></Route>
            <Route path="/nehru/:id" element={<NehruScreen />} exact></Route>
            <Route path="/dhotis/:id" element={<DhotisScreen />} exact></Route>
            <Route path="/indian/:id" element={<IndianScreen />} exact></Route>
            <Route path="/kurtas/:id" element={<KurtasScreen />} exact></Route>
            <Route
              path="/orderhistory"
              element={<OrderHistoryScreen />}
            ></Route>
            <Route path="/" element={<HomeScreen />} exact></Route>
          </Routes>
        </main>
        <footer className="row center">
          {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
          <div>All right reserved</div>{" "}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

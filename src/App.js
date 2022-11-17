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
// import { listProductCategories, listProductCategorygroup, listProductCategorytype } from "./actions/productAction";
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
import CartWomenScreen from "./screens/CartWomenScreen";
import CartKidScreen from "./screens/CartKidScreen";
import WomenListScreen from "./screens/WomenListScreen";
import KidListScreen from "./screens/KidListScreen";
import WomenEditScreen from "./screens/WomenEditScreen";
import KidEditScreen from "./screens/KidEditScreen";
import WomenScreen from "./screens/WomenScreen";
import KidScreen from "./screens/KidsScreen";
import { listProductCategories, listProductCategorygroup, listProductCategorytype } from "./actions/productAction";


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

  // const productCategorygroupList = useSelector((state) => state.productCategorygroupList);
  // const {
  //   loadinggrp: loadingCategoriesGroup,
  //   errorcategrp: errorCategoriesGroup,
  //   categoriesGroup,
  // } = productCategorygroupList;

  // const productCategorytypeList = useSelector((state) => state.productCategorytypeList);
  // const {
  //   loadingtype: loadingCategoriesType,
  //   errorcategtype: errorCategoriesType,
  //   categoriesType,
  // } = productCategorytypeList;
  useEffect(() => {
    dispatch(listProductCategories());
    dispatch(listProductCategorygroup());
    dispatch(listProductCategorytype());
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
              <div className="search-Item">
                <SearchBox />
              </div>
            )}
            <div className="navigation-menu">
              <ul>
                <li>
                  {userInfo ? (
                    <div className="dropdown">
                      <Link className="home" to="/cart">
                        <i className="fa fa-shopping-cart"></i>&nbsp;Cart
                        {cartItems.length > 0 && (
                          <span className="badge">{cartItems.length}</span>
                        )}
                      </Link>
                    </div>
                  ) : (
                    <div className="dropdown">
                      <Link className="home" to="/cart">
                        <i className="fa fa-shopping-cart"></i>&nbsp;Cart
                        {cartItems.length > 0 && (
                          <span className="badge">{cartItems.length}</span>
                        )}
                      </Link>
                    </div>
                  )}
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
                    <Link className="home" to="/signin">
                      Sign In
                    </Link>
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

          {userInfo && (<div className="second-nav">
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
                                  to="search/categorygroup/topwear"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Topwear
                                </Link>
                              </h3>
                              {""}
                            </li>
                            <li>
                              <Link to="search/categorytype/t-shirt">T-shirts</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/casual">casual shirts</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/formal">formal shirts</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/sweater">sweater</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/jacket">Jackets</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/blazer">Blazer&coats</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/suit">suits</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/rain-jacket">Rain Jackets</Link>
                            </li>

                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/indian"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Indian festival wear
                                </Link>
                              </h3>
                            </li>

                            <li>
                              <Link to="search/categorytype/kurtas">
                                Kurtas&kurtaseats
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sherwani">Sherwanis</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/nehru">NehruJackets</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/dhotis">Dhotis</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links">
                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/bottom"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Bottom Wear
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/jean">Jeans</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/casual-trouser">Casual trousers</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/formal-trouser">formal trousers</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/short">shorts</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/trackpant">
                                trackpants&joggers
                              </Link>
                            </li>

                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/inner-wear"
                                  style={{ color: "#ee5f73" }}
                                >
                                  InnearWear&SleepeWear
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/brief">briefs&trunks</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/boxer">boxers</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/vest">vests</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sleep-wear">
                                sleepwear&loungewear
                              </Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/thermal">thermals</Link>
                            </li>

                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/plus"
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
                                  to="search/categorygroup/foot-wear"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Foot Wear
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/casual-shoe">casual shoes</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sport-shoe">sports shoes</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/formal-shoe">formal shoes</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sneaker">sneakers</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sandal">
                                sandals&floaters
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/flipfloap">flipfloaps</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sock">socks</Link>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/personal-care-grooming"
                                  style={{ color: "#ee5f73" }}
                                >
                                  personalCareGrooming
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link
                                to="search/categorygroup/sunglasses"
                                style={{ color: "#ee5f73" }}
                              >
                                Sunglasses&Frames
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorygroup/watch" style={{ color: "#ee5f73" }}>
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
                                  to="search/categorygroup/sports-activy-wear"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Sports activy Wear
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/sports-shoe">sports shoes</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sports-sandal">sports sandal</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/active-t-shirts">active t-shirts</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/trackpants">
                                trackpants&shorts
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/tracksuits">tracksuits</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sweatshirt">
                                Jackets&sweetshirts
                              </Link>
                            </li>


                            <li>
                              <Link to="search/categorytype/sports-accessories">
                                sportsaccessories
                              </Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/swirm-wear">swirm wears</Link>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/gadgets"
                                  style={{ color: "#ee5f73" }}
                                >
                                  gadgets
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/smart-wearble">small wearables</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/fitnes">fitness gadgets</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/headphone">headphone</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/speakers">speakers</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links">
                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/fashion"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Faschion Accessories
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/wallet">wallets</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/belt">belts</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/perfume">
                                perfume&bodymists
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/helmet">helmets</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/trimmers">trimmers</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/deodorant">Deodorants</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/tie">
                                tiles,cuffkins&pocketsquares

                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/accessory-gift-seat">
                                accessory gift seat
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/caps-hates">caps&hates</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/muffalear-scarves-gloves">
                                muffalear,scarves&gloves
                              </Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/phone-cases">phone cases</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/rings-wrist-wear">
                                rings&wrist wear
                              </Link>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/Bags-Backpacks"
                                  style={{ color: "#ee5f73" }}
                                >
                                  Bags&Backpacks
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/luggages-trolleys"
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
                                  to="search/categorygroup/indian-fusion-wear"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Indian&fusion wear
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/kurtas-suits">kurtas&suits</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/kurits-tunics">
                                kurits,tunics&tops
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sarees">sarees</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/ethnic-wear">ethnic wear</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/laggins-salwars-chudidars">
                                laggins,salwars&chudidars

                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/skirts-Palazzos">
                                Skirts & Palazzos
                              </Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/dress-materials">Dress Materials</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/lehenga-cholis">Lehenga Cholis</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/dupattas-shawls">
                                Dupattas & Shawls
                              </Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/jackets">Jackets</Link>
                            </li>

                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/belts-scarves"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Belts,Scarves & More
                                </Link>
                              </h3>
                            </li>

                            <li>
                              {" "}
                              <h3>
                                <Link
                                  to="search/categorygroup/watches-wearables"
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
                                  to="search/categorygroup/western-wear"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Western Wear
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/dresses">Dresses</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/tops">Tops</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/T-shirts">Tshirts</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/Jeans">Jeans</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/shorts-skirts">Shorts & Skirts</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/co-ords">Co-ords</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/playsuits">Playsuits</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/jumpsuits">Jumpsuits</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/shrugs">Shrugs</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sweaters-sweatshirts">
                                Sweaters&Sweatshirts
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/jackets-coats">Jackets & Coats</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/blazers-waistcoats">
                                Blazers & Waistcoats
                              </Link>
                            </li>

                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/plus-size"
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
                                  to="search/categorygroup/maternity"
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
                                  to="search/categorygroup/sunglasses-frames"
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
                                  to="search/categorygroup/Foot-wear"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Foot Wear
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/flats">Flats</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/casual-shoes">Casual Shoes</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/heels">Heels</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/boots">Boots</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sports-shoes-floaters">
                                SportsShoes&Floaters
                              </Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="/search/categorygroup/Sports-activy-wear"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Sports &activy Wear
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/clothing">Clothing</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/Footwear">Footwear</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sports-accessories">
                                Sports Accessories
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sports-equipment">
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
                                  to="search/categorygroup/lingerie-sleepwear"
                                  style={{ color: "#fb56c1" }}
                                >
                                  {" "}
                                  Lingerie
                                  & Sleepwear
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/bra">Bra</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/briefs">Briefs</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/shapewear">Shapewear</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sleepwear-loungewear">
                                Sleepwear
                                & Loungewear
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/swimwear">Swimwear</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/camisoles-thermals">
                                Camisoles & Thermals
                              </Link>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/beauty-personal-care"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Beauty & Personal Care
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/makeup">Makeup</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/skincare">Skincare</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/premium-beauty">Premium Beauty</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/lipsticks">Lipsticks</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/fragrances">Fragrances</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links1">
                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/gadgets"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Gadgets
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/smart-wearbles">SmartWearables</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/fitness-gadgets">FitnessGadgets</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/headphone">Headphones</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/speakers">Speakers</Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/jewellery"
                                  style={{ color: "#fb56c1" }}
                                >
                                  Jewellery
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/fashion-jewellery">
                                FashionJewellery
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/fine-jewellery">Fine Jewellery</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/earrings">Earrings</Link>
                            </li>

                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/backpacks"
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
                                  to="search/categorygroup/handbags-bags-wallets"
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
                                  to="search/categorygroup/luggages-trolleys"
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
                    <Link className="desktop-item2" to="#men">
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
                                  to="search/categorygroup/boys-clothing"
                                  style={{ color: "#f26a10" }}
                                >
                                  Boys Clothing
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/T-Shirts">T-Shirts</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/Shirts">Shirts</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/Shorts">Shorts</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/jeans">Jeans</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/Trousers">Trousers</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/clothing-sets">Clothing Sets</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/Ethnic-wear">Ethnic Wear</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/track-pants-pyjamas">
                                Track Pants& Pyjamas

                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/jacket-sweater-sweatshirts">
                                Jacket,Sweater&Sweatshirts

                              </Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/party-wear">Party Wear</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/innerwear-thermals">
                                Innerwear & Thermals
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/nightwear-loungewear">
                                Nightwear & Loungewear

                              </Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/value-packs">Value Packs</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links2">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/girls-clothing"
                                  style={{ color: "#f26a10" }}
                                >
                                  girls-clothing
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/dress">Dresses</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/top">Tops</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/T-shirt">Tshirts</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/clothing-set">Clothing Sets</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/lehenga-choli">Lehenga choli</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/kurta-sets">Kurta Sets</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/party-wears">Party wear</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/dungarees-jumpsuits">
                                Dungarees & Jumpsuits
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/skirts-shorts">Skirts & shorts</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/tights-leggings">
                                Tights & Leggings
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/jeans-trousers-capris">
                                Jeans,Trousers &Capris
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/jacket-sweater">
                                Jacket,Sweater&Sweatshirts
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/innerwear-thermal">
                                Innerwear & Thermals
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/nightwear-loungewears">
                                Nightwear & Loungewear
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/value-Pack">Value Packs</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links2">
                            <li>
                              <h3>
                                {" "}
                                <Link to="search/categorygroup/foot-wears"
                                  style={{ color: "#f26a10" }}
                                >
                                  Foot Wear
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/casual-shoes">Casual Shoes</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/flipflops">Flipflops</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/Sports-shoes">Sports Shoes</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/flat">Flats</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/Sandals">Sandals</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/school-shoes">School Shoes</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/Socks">Socks</Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link to="search/categorygroup/toys" style={{ color: "#f26a10" }}>
                                  Toys
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/learning-development">
                                Learning&Development
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/activity-toys">Activity Toys</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/soft-toys">Soft Toys</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/action-figure-play">
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
                                  to="search/categorygroup/infants"
                                  style={{ color: "#f26a10" }}
                                >
                                  Infants
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/bodysuits">Bodysuits</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/rompers-sleepsuits">
                                Rompers&Sleepsuits
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/clothing-sets">Clothing Sets</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/t-shirts-tops">Tshirts & Tops</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/dress">Dresses</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/bottom-wear">Bottom wear</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/winter-wear">Winter Wear</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/innerwear-sleepwear">
                                Innerwear& Sleepwear

                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/infant-care">Infant Care</Link>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/home-bath"
                                  style={{ color: "#f26a10" }}
                                >
                                  Home & Bath
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/personal-care"
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
                                  to="search/categorygroup/kids-accessories"
                                  style={{ color: "#f26a10" }}
                                >
                                  Kids Accessories
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/bags-backpacks">Bags&Backpacks</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/watches">Watches</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/jewellery-hair-accessory">
                                Jewellery&Hairaccessory

                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sunglass">Sunglasses</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/masks-protective-gears">
                                Masks
                                & ProtectiveGears
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/caps-hat">Caps & Hats</Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link to="search/categorygroup/brands" style={{ color: "#f26a10" }}>
                                  Brands
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/hm">H&M</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/max-kids">Max Kids</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/pantaloons">Pantaloons</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/united-Colors">
                                United col benettonKids

                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/yk">YK</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/us-kids">U.S. Polo Assn. Kids</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/mothercare">Mothercare</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/hrx">HRX</Link>
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
                                  to="search/categorygroup/bed-linen"
                                  style={{ color: "#f2c210" }}
                                >
                                  Bed Linen
                                  &Furnishing
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/bed-runners"> Bed Runners</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/mattress-protectors">
                                Mattress Protectors
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/bedsheets">Bedsheets</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/bedding-sets">Bedding Sets</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/blankets-quilts-dohars">
                                Blankets,Quilts
                                & Dohars
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/pillows-pillow-covers">
                                Pillows
                                & Pillow Covers
                              </Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/bed-covers">Bed Covers</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/diwan-sets">Diwan Sets</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/chair-pads-covers">
                                Chair Pads
                                & Covers
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sofa-covers">Sofa Covers</Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/flooring"
                                  style={{ color: "#f2c210" }}
                                >
                                  Flooring
                                </Link>{" "}
                              </h3>{" "}
                            </li>
                            <li>
                              <Link to="search/categorytype/floor-Runners">Floor Runners</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/carpets">Carpets</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/floor-mats-dhurries">
                                Floor Mats
                                & Dhurries
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/door-mats">Door Mats</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links3">
                            <li>
                              <h3>
                                <Link to="search/categorygroup/bath" style={{ color: "#f2c210" }}>
                                  Bath
                                </Link>
                              </h3>{" "}
                            </li>
                            <li>
                              <Link to="search/categorytype/bath-towels">Bath Towels</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/hand-face-towels">
                                Hand
                                & Face Towels
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/beach-towels">Beach Towels</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/towels-set">Towels Set</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/bath-rugs">Bath Rugs</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/bath-robes">Bath Robes</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/bathroom-accessories">
                                Bathroom
                                Accessories
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/shower-curtains">ShowerCurtains</Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/lamps-lighting"
                                  style={{ color: "#f2c210" }}
                                >
                                  Lamps&Lighting
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/floor-lamps">Floor Lamps</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/ceiling-lamps">Ceiling Lamps</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/table-lamps">Table Lamps</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/wall-lamps">Wall Lamps</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/outdoor-lamps">Outdoor Lamps</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/string-lights">String Lights</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links3">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/home-Decor"
                                  style={{ color: "#f2c210" }}
                                >
                                  Home Decor
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/plants">
                                Plants & Planters
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/aromas-candles">Aromas & Candles</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/clocks">Clocks</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/mirrors">Mirrors</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/wall-decor">Wall Decor</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/festive-decor">Festive Decor</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/pooja-essentials">
                                Pooja Essentials
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/wall-shelves">Wall Shelves</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/fountains">Fountains</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/showpieces-vases">
                                Show pieces& Vases
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/ottoman">Ottoman</Link>
                            </li>

                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/cushions-cushion-covers"
                                  style={{ color: "#f2c210" }}
                                >
                                  Cushions
                                  & CushionCovers
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/curtains"
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
                                  to="search/categorygroup/home-gift-sets"
                                  style={{ color: "#f2c210" }}
                                >
                                  Home Gift Sets
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <h3>
                                <Link
                                  to="search/categorygroup/kitchen-table"
                                  style={{ color: "#f2c210" }}
                                >
                                  Kitchen & Table
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/table-runners">Table Runners</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/dinnerware-serveware">
                                Dinnerware & Serveware
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/cups-mugs">Cups and Mugs</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/bakeware-cookware">
                                Bakeware & Cookware
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/kitchen-storage-tools">
                                Kitchen Storage & Tools
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/bar-drinkware">Bar & Drinkware</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/table-covers-furnishings">
                                TableCovers & Furnishings
                              </Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/storage"
                                  style={{ color: "#f2c210" }}
                                >
                                  Storage
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/bins">Bins</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/hangers">Hangers</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/organisers">Organisers</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/hooks-holders">Hooks & Holders</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/laundry-bags">Laundry Bags</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links3">
                            <li>
                              <h3>
                                {" "}
                                <Link to="search/categorygroup/brand" style={{ color: "#f2c210" }}>
                                  Brands
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/h-m">H&M</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/marks-spencer">Marks & Spencer</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/home-centre">Home Centre</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/spaces">Spaces</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/d-decor">D'Decor</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/story-home">Story@Home</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/pure-home-living">
                                PureHome&Living
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/swayam">Swayam</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/raymond-home">Raymond Home</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/maspar">Maspar</Link>{" "}
                            </li>

                            <li>
                              <Link to="search/categorytype/trident">Trident</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/cortina">Cortina</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/random">Random</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/ellementry">Ellementry</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/romee">ROMEE</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/nishagupta">SEJ by NishaGupta</Link>
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
                                <Link to="search/categorygroup/makeup" style={{ color: "#0db7af" }}>
                                  Makeup
                                </Link>
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/lipstick">Lipstick</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/lip-gloss">Lip Gloss</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/lip-liner">Lip Liner</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/mascara">Mascara</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/eyeliner">Eyeliner</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/kajal">Kajal</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/eyeshadow">Eyeshadow</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/foundation">Foundation</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/primer">Primer</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/concealer">Concealer</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/compact">Compact</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/nail-polish">Nail Polish</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links4">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/skincare-bath-body"
                                  style={{ color: "#0db7af" }}
                                >
                                  Skincare,Bath & Body
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/face-moisturiser">
                                Face Moisturiser
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/cleanser">Cleanser</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/masks-peel">Masks & Peel</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/sunscreen">Sunscreen</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/serum">Serum</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/face-wash">Face Wash</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/eye-cream">Eye Cream</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/lip-balm">Lip Balm</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/body-lotion">Body Lotion </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/body-wash">Body Wash</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/body-scrup"> Body Scrub</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/hand-cream">Hand Cream </Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/baby-care"
                                  style={{ color: "#0db7af" }}
                                >
                                  Baby Care
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link to="search/categorygroup/masks" style={{ color: "#0db7af" }}>
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
                                  to="search/categorygroup/haircare"
                                  style={{ color: "#0db7af" }}
                                >
                                  Haircare
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/shampoo">Shampoo</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/conditioner">Conditioners</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/hair-cream">Hair Cream</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/hair-oil">Hair Oil</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/hair-gel">Hair Gel</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/hair-color">Hair Color</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/hair-serum">Hair Serum</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/hair-accessory">Hair Accessory</Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/fragrances"
                                  style={{ color: "#0db7af" }}
                                >
                                  Fragrances
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/perfume">Perfume</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/deodorant">Deodorant</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/body-mist">Body Mist</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <ul className="mega-links4">
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/appliances"
                                  style={{ color: "#0db7af" }}
                                >
                                  Appliances
                                </Link>{" "}
                              </h3>
                            </li>
                            <li>
                              <Link to="search/categorytype/hair-straightener">
                                Hair Straightener
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/hair-dryer">Hair Dryer</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/epilator">Epilator</Link>
                            </li>

                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/men-grooming"
                                  style={{ color: "#0db7af" }}
                                >
                                  Men's Grooming
                                </Link>{" "}
                              </h3>
                            </li>

                            <li>
                              <Link to="search/categorytype/trimmers">Trimmers</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/beard-oil">Beard Oil</Link>
                            </li>

                            <li>
                              <Link to="search/categorytype/hair-wax">Hair Wax</Link>
                            </li>

                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/beauty-gift-makeup"
                                  style={{ color: "#0db7af" }}
                                >
                                  Beauty Gift & Makeup Set
                                </Link>{" "}
                              </h3>
                            </li>

                            <li>
                              <Link to="search/categorytype/beauty-gift">Beauty Gift</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/makeup-kit">Makeup Kit</Link>
                            </li>
                            <li>
                              <h3>
                                {" "}
                                <Link
                                  to="search/categorygroup/premium-beauty"
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
                                  to="search/categorygroup/wellness-hygiene"
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
                                  to="search/categorygroup/top-brands"
                                  style={{ color: "#0db7af" }}
                                >
                                  Top Brands
                                </Link>{" "}
                              </h3>
                            </li>

                            <li>
                              <Link to="search/categorytype/lakme">Lakme</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/maybelline">Maybelline</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/loreal">Loreal</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/philips">Philips</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/bath-body-works">
                                Bath & Body Works
                              </Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/body-shop">The Body Shop</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/biotique">Biotique</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/mamaearth">Mamaearth</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/mcaffeine">MCaffeine</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/nivea">Nivea</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/loreal-professionnel">
                                Loreal Professionnel
                              </Link>{" "}
                            </li>

                            <li>
                              <Link to="search/categorytype/kama-ayurveda">Kama Ayerveda</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/m-a-c">M.A.C</Link>
                            </li>
                            <li>
                              <Link to="search/categorytype/forest-essentials">
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
          </div>)}

        </header>
        <aside className={sidebarIsOpen ? "open" : ""}>
          <ul className="categories">
            <li>

              <button
                onClick={() => setSidebarIsOpen(false)}
                className="open"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            <div className="sides-menu">
              <strong>User Deatils</strong>
              <li>
                <div className="dropdown-side">
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
                  <div className="dropdown-side">
                    <Link className="home" to="#">
                      {userInfo.name}{" "}
                    </Link>
                    <ul className="dropdown-content-side1">
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
                  <div className="dropdown-side">
                    <Link className="home" to="#admin">
                      Seller
                    </Link>
                    <ul className="dropdown-content-side2">
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
                  <div className="dropdown-side">
                    <Link className="home" to="#admin">
                      Admin
                    </Link>
                    <ul className="dropdown-content-side3">
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
            </div>
            <strong>Categories</strong>
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

            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/cartwomen" element={<CartWomenScreen />}></Route>
            <Route path="/cartkid" element={<CartKidScreen />}></Route>


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
              path="/search/categorygroup/:categorygroup"
              element={<SearchScreen />}
              exact
            ></Route>
            <Route
              path="/search/categorytype/:categorytype"
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
              path="/products/new"
              element={<ProductEditScreen />}
              exact
            ></Route>
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
            {/* <Route
              path="/Home"
              element={
                <AdminRoute>
                  <HomeScreens />
                </AdminRoute>
              }
            /> */}

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

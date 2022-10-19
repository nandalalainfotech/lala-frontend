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
              {/* <img src="/image/logo8.png" alt="home" height="35px" width="30px"  margin-top="120px"/> */}
              <span className="nandalala">lala</span><span className="in"></span>
            </Link>
          </div>
          <div className="run">

            {
              userInfo && userInfo && (

                <div className="user">

                  <a href="dfs" className="nav-item is-active" active-color="orange">
                    <Link to="men">
                      {/* <strong> */}
                      MEN
                      {/* </strong> */}
                    </Link></a>

                  <ul className="dropdowns-contents">
                    <li>
                      <h3 className="btn success"> <Link to="/Topwear" style={{ color: "#20A020" }}>Topwear</Link></h3>
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/T-shirts">T-shirts</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/casual shirts">casual shirts</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/formal shirts">formal shirts</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/sweater">sweater</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Jackets">Jackets</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Blazer&coats">Blazer&coats</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/suits">suits</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Rain Jackets">Rain Jackets</Link></a>
                        </li>
                        {/* <hr /> */}
                        <li><a href="dffs">
                          <h4>
                            <Link to="/Indian Festival Wear" style={{ color: "#20A020" }}>Indian festival wear</Link>
                          </h4></a>
                        </li>

                        <li><a href="seats">
                          <Link to="/Kurtas&kurta seats">Kurtas&kurtaseats</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Sherwanis">Sherwanis</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Nehru Jackets">NehruJackets</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Dhotis">Dhotis</Link></a>
                        </li>

                      </div>
                    </li>
                    <li>
                      <h3 > <Link to="/Bottom Wear" style={{ color: "#20A020" }}>Bottom Wear</Link> </h3>
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Jeans">Jeans</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Casual trousers">Casual trousers</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/formal trousers">formal trousers</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/shorts">shorts</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/trackpants&joggers">trackpants&joggers</Link></a>
                        </li>
                      </div>
                      {/* <hr /> */}
                      {/* <li><a href="dffs"> */}
                      <h3> <Link to="/Innear Wear& Sleepe Wear" style={{ color: "#20A020" }}>Innear Wear&Sleepe Wear</Link> </h3>
                      {/* </a></li> */}
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/briefs&trunks">briefs&trunks</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/boxers">boxers</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/formal trousers">formal trousers</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/shorts">shorts</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/vests">vests</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/sleepwear&loungewear">sleepwear&loungewear</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/thermals">thermals</Link></a>
                        </li>
                        {/* <hr /> */}
                      </div>
                      {/* <li><a href="dffs"> */}
                      <h3> <Link to="/Plus Size" style={{ color: "#20A020" }}>Plus Size</Link> </h3>
                      {/* </a></li> */}
                    </li>

                    <li>
                      <h3> <Link to="/Foot Wear" style={{ color: "#20A020" }}>Foot Wear</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/casual shoes">casual shoes</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/sports shoes">sports shoes</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/formal shoes">formal shoes</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/sneakers">sneakers</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/sandals&floaters">sandals&floaters</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/flipfloaps">flipfloaps</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/socks">socks</Link></a>
                        </li>
                      </div>
                      {/* <hr /> */}
                      {/* <li><a href="dffs"> */}
                      <h6><Link to="/Personal Care Grooming" style={{ color: "#20A020" }}>personalCareGrooming</Link> </h6>
                      {/* </a></li> */}
                      {/* <li><a href="dffs"> */}
                      <h3> <Link to="/Sunglasses &Frames" style={{ color: "#20A020" }}>Sunglasses&Frames</Link> </h3>
                      {/* </a> </li> */}

                      {/* // <li><a href="dffs"> */}
                      <h3>  <Link to="/Watches" style={{ color: "#20A020" }}>Watches</Link> </h3>
                      {/* // </a></li> */}
                    </li>
                    <li>
                      <h3>  <Link to="/Sports activy Wear" style={{ color: "#20A020" }}>Sports activy Wear</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/sports shoes">sports shoes</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/sandal shoes">sandal shoes</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/active t-shirts">active t-shirts</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/trackpants&shorts">trackpants&shorts</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/tracksuits">tracksuits</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Jackets&sweetshirts">Jackets&sweetshirts</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/active t-shirts">active t-shirts</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/sportsaccessories">sportsaccessories</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/swirm wears">swirm wears</Link></a>
                        </li>
                      </div>
                      {/* <hr /> */}
                      {/* <li><a href="dffs"> */}
                      <h3> <Link to="/gadgets" style={{ color: "#20A020" }}>gadgets</Link> </h3>
                      {/* </a></li> */}


                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/small wearables">small wearables</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/fitness gadgets">fitness gadgets</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/headphone">headphone</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/speakers">speakers</Link></a>
                        </li>
                      </div>
                    </li>

                    <li>

                    </li>
                    <li>
                      <h3><Link to="/Faschion Accessories" style={{ color: "#20A020" }}>Faschion Accessories</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/wallets">wallets</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/belts">belts</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/perfume&bodymists">perfume&bodymists</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/belts">helmets</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/trimmers">trimmers</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Deodorants">Deodorants</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/tiles,cuffkins&pocketsquares">tiles,cuffkins&pocketsquares</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/accessory gift seat">accessory gift seat</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/caps&hates">caps&hates</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/muffalear,scarves&gloves">muffalear,scarves&gloves</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/perfume&bodymists">perfume&bodymists</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/phone cases">phone cases</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/rings&wrist wear">rings&wrist wear</Link></a>
                        </li>
                      </div>
                      <li><a href="dffs">
                        <h5><Link to="/Bags&Backpacks" style={{ color: "#20A020" }}>Bags&Backpacks</Link> </h5>
                      </a></li>
                      {/* <li><a href="dffs"> */}
                      <h5><Link to="/Luggages&trolleys" style={{ color: "#20A020" }}>Luggages&trolleys</Link> </h5>
                      {/* </a></li> */}

                    </li>


                  </ul>

                </div >

              )
            }
            {
              userInfo && userInfo && (
                <div className="user1">
                  <a href="dfs" className="sware"  >
                    <Link to="/">
                      {/* <strong> */}
                      WOMEN
                      {/* </strong> */}
                    </Link>
                  </a>
                  <ul className="dropdowns-contents1">
                    <li>

                      <h3><Link to="/Indian&fusion wear" style={{ color: "#3d4eac" }} >Indian&fusion wear</Link></h3>


                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/kurtas&suits">kurtas&suits</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/kurits,tunics&tops">kurits,tunics&tops</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/sarees">sarees</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/ethnic wear">ethnic wear</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/laggins,salwars&chudidars">laggins,salwars&chudidars</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Skirts & Palazzos">Skirts & Palazzos</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Dress Materials">Dress Materials</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Lehenga Cholis">Lehenga Cholis</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Dupattas & Shawls">Dupattas & Shawls</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Jackets">Jackets</Link></a>
                        </li>
                      </div>
                      {/* <hr /> */}
                      <div className="ok">
                        <h3><Link to="/Belts, Scarves & More" style={{ color: "#3d4eac" }}>Belts, Scarves & More</Link></h3>
                        <h3> <Link to="/Watches & Wearables" style={{ color: "#3d4eac" }}>Watches & Wearables</Link></h3>
                      </div>
                    </li>
                    <li>
                      <h3> <Link to="/Western Wear" style={{ color: "#3d4eac" }}>Western Wear</Link> </h3>
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Dresses">Dresses</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Tops">Tops</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Tshirts">Tshirts</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Jeans">Jeans</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Shorts & Skirts">Shorts & Skirts</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Co-ords">Co-ords</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Playsuits">Playsuits</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Jumpsuits">Jumpsuits</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Shrugs">Shrugs</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Sweaters & Sweatshirts">Sweaters&Sweatshirts</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Jackets & Coats">Jackets & Coats</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Blazers & Waistcoats">Blazers & Waistcoats</Link></a>
                        </li>

                      </div>
                      {/* <hr /> */}
                      <h3> <Link to="/Plus Size" style={{ color: "#3d4eac" }}>Plus Size</Link> </h3>
                    </li>

                    <li>
                      <h3> <Link to="/Maternity" style={{ color: "#3d4eac" }}>Maternity</Link> </h3>
                      <h3> <Link to="/Sunglasses & Frames" style={{ color: "#3d4eac" }}>Sunglasses & Frames</Link> </h3>
                      <h3> <Link to="/Foot Wear" style={{ color: "#3d4eac" }}>Foot Wear</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Flats">Flats</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Casual Shoes">Casual Shoes</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Heels">Heels</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Boots">Boots</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Sports Shoes & Floaters">SportsShoes&Floaters</Link></a>
                        </li>

                      </div>
                      {/* <hr /> */}
                      <h3>  <Link to="/Sports activy Wear" style={{ color: "#3d4eac" }}>Sports &activy Wear</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/clothing">Clothing</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Footwear">Footwear</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Sports Accessories">Sports Accessories</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Sports Equipment">Sports Equipment</Link></a>
                        </li>

                      </div>
                    </li>
                    <li>
                      <h3> <Link to="/Lingerie & Sleepwear" style={{ color: "#3d4eac" }}> Lingerie & Sleepwear</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Bra">Bra</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Briefs">Briefs</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Shapewear">Shapewear</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Sleepwear & Loungewear">Sleepwear&Loungewear</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Swimwear">Swimwear</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Camisoles & Thermals">Camisoles & Thermals</Link></a>
                        </li>
                      </div>
                      {/* <hr /> */}
                      <h3><Link to="/Beauty & Personal Care" style={{ color: "#3d4eac" }}>Beauty & Personal Care</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Makeup">Makeup</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Skincare">Skincare</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Premium Beauty">Premium Beauty</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Lipsticks">Lipsticks</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Fragrances">Fragrances</Link></a>
                        </li>

                      </div>
                    </li>
                    <li>
                      <h3> <Link to="/Gadgets" style={{ color: "#3d4eac" }}>Gadgets</Link></h3>
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Smart Wearables">SmartWearables</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Fitness Gadgets">FitnessGadgets</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Headphones">Headphones</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Speakers">Speakers</Link></a>
                        </li>
                      </div>
                      {/* <hr /> */}
                      <h3> <Link to="/Jewellery" style={{ color: "#3d4eac" }}>Jewellery</Link></h3>
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Fashion Jewellery">FashionJewellery</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Fine Jewellery">Fine Jewellery</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Earrings">Earrings</Link></a>
                        </li>

                        {/* <li><a href="dffs">
                          <Link to="/Speakers">Speakers</Link></a>
                        </li> */}
                      </div>
                      {/* <hr /> */}
                      <h3> <Link to="/Gadgets" style={{ color: "#3d4eac" }}>Backpacks</Link></h3>
                      <h3> <Link to="/Handbags,Bags&Wallets" style={{ color: "#3d4eac" }}>Handbags,Bags&Wallets</Link></h3>
                      <h3> <Link to="/Luggages & Trolleys" style={{ color: "#3d4eac" }}>Luggages & Trolleys</Link></h3>
                    </li>
                  </ul>
                </div>
              )
            }
            {
              userInfo && userInfo && (
                <div className="user2">
                  <a href="dfs" className="activate is-active" active-color="orange">
                    <Link to="\">
                      {/* <strong> */}
                      kIDS
                      {/* </strong> */}
                    </Link>
                  </a>
                  <ul className="dropdowns-contents2">
                    <li>
                      <h3> <Link to="/Boys Clothing" style={{ color: "#A02020" }}>Boys Clothing</Link></h3>
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/T-Shirts">T-Shirts</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Shirts">Shirts</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Shorts">Shorts</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Jeans">Jeans</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Trousers">Trousers</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Clothing Sets">Clothing Sets</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Ethnic Wear">Ethnic Wear</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Track Pants & Pyjamas">Track Pants & Pyjamas</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Jacket, Sweater & Sweatshirts">Jacket,Sweater&Sweatshirts</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Party Wear">Party Wear</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Innerwear & Thermals">Innerwear & Thermals</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Nightwear & Loungewear">Nightwear & Loungewear</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Value Packs">Value Packs</Link></a>
                        </li>
                      </div>
                    </li>
                    <li>
                      <h3> <Link to="/Western Wear" style={{ color: "#A02020" }}>Girls Clothing</Link> </h3>
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Dresses">Dresses</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Tops">Tops</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Tshirts">Tshirts</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Clothing Sets">Clothing Sets</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Lehenga choli">Lehenga choli</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Kurta Sets">Kurta Sets</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Party wear">Party wear</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Dungarees & Jumpsuits">Dungarees & Jumpsuits</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Skirts & shorts">Skirts & shorts</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Tights & Leggings">Tights & Leggings</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Jeans, Trousers & Capris">Jeans,Trousers &Capris</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Jacket, Sweater & Sweatshirts">Jacket,Sweater&Sweatshirts</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Innerwear & Thermals">Innerwear & Thermals</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Nightwear & Loungewear">Nightwear & Loungewear</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Value Packs">Value Packs</Link></a>
                        </li>

                      </div>

                    </li>

                    <li>
                      {/* <h3> <Link to="/Maternity">Maternity</Link> </h3>
                    <h3> <Link to="/Sunglasses & Frames">Sunglasses & Frames</Link> </h3> */}
                      <h3> <Link to="/Foot Wear" style={{ color: "#A02020" }}>Foot Wear</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Casual Shoes">Casual Shoes</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Flipflops">Flipflops</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Sports Shoes">Sports Shoes</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Flats">Flats</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Sandals">Sandals</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/School Shoes">School Shoes</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Socks">Socks</Link></a>
                        </li>


                      </div>
                      {/* <hr /> */}
                      <h3>  <Link to="/Toys" style={{ color: "#A02020" }}>Toys</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Learning & Development">Learning&Development</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Activity Toys">Activity Toys</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Soft Toys">Soft Toys</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Action Figure / Play set">Action Figure / Play set</Link></a>
                        </li>

                      </div>
                    </li>


                    <li>
                      <h3> <Link to="/Infants" style={{ color: "#A02020" }}>Infants</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Bodysuits">Bodysuits</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Rompers & Sleepsuits">Rompers&Sleepsuits</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Clothing Sets">Clothing Sets</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Tshirts & Tops">Tshirts & Tops</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Dresses">Dresses</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Bottom wear">Bottom wear</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Winter Wear">Winter Wear</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Innerwear & Sleepwear">Innerwear&Sleepwear</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Infant Care">Infant Care</Link></a>
                        </li>
                      </div>
                      {/* <hr /> */}

                      <h3><Link to="/Home & Bath" style={{ color: "#A02020" }}>Home & Bath</Link> </h3>
                      <h3><Link to="/Personal Care" style={{ color: "#A02020" }}>Personal Care</Link> </h3>
                    </li>
                    <li>
                      <h3><Link to="/Kids Accessories">Kids Accessories</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Bags & Backpacks">Bags&Backpacks</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Watches">Watches</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Jewellery & Hair accessory">Jewellery&Hairaccessory</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Sunglasses">Sunglasses</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Masks & Protective Gears">Masks&ProtectiveGears</Link></a>
                        </li>
                        <li><a href='dfddf'>
                          <Link to="Caps & Hats">Caps & Hats</Link>
                        </a></li>

                      </div>
                      {/* <hr /> */}

                      <h3> <Link to="/Brands" style={{ color: "#A02020" }}>Brands</Link></h3>
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/H&M">H&M</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Max Kids">Max Kids</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Pantaloons">Pantaloons</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/United Colors Of Benetton Kids">United Colors of BenettonKids</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/YK">YK</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/U.S. Polo Assn. Kids">U.S. Polo Assn. Kids</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Mothercare">Mothercare</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/HRX">HRX</Link></a>
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

                  <a href="dfs" className="living is-active" active-color="orange">
                    <Link to="#home">
                      {/* <strong> */}
                      HOME& LIVING
                      {/* </strong> */}
                    </Link>
                  </a>
                  <ul className="dropdowns-contents3">
                    <li>
                      <h3> <Link to="/Bed Linen & Furnishing" style={{ color: "#c59613" }}>Bed Linen & Furnishing</Link></h3>
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Bed Runners"> Bed Runners</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Mattress Protectors">Mattress Protectors</Link></a>
                        </li>
                        <li><a href="ds">
                          <Link to="/Bedsheets">Bedsheets</Link>
                        </a></li>

                        <li><a href="dffs">
                          <Link to="/Bedding Sets">Bedding Sets</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Blankets, Quilts & Dohars">Blankets,Quilts&Dohars</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Pillows & Pillow Covers">Pillows & Pillow Covers</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Bed Covers">Bed Covers</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Diwan Sets">Diwan Sets</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Chair Pads & Covers">Chair Pads & Covers</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Sofa Covers">Sofa Covers</Link></a>
                        </li>
                      </div>
                      {/* <hr /> */}
                      <h3> <Link to="/Flooring" style={{ color: "#c59613" }}>Flooring</Link> </h3>
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Floor Runners">Floor Runners</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Carpets">Carpets</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Floor Mats & Dhurries">Floor Mats& Dhurries</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Door Mats">Door Mats</Link></a>
                        </li>
                      </div>
                    </li>
                    <li>


                    </li>

                    <li>
                      <div className="menu" color="text-primary">
                        <h3><Link to="/Bath" style={{ color: "#c59613" }}>Bath</Link></h3>
                      </div>
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Bath Towels">Bath Towels</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Hand & Face Towels">Hand &Face Towels</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Beach Towels">Beach Towels</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Towels Set">Towels Set</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Bath Rugs">Bath Rugs</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Bath Robes">Bath Robes</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Bathroom Accessories">BathroomAccessories</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Shower Curtains">ShowerCurtains</Link></a>
                        </li>
                        {/* <li><a href="dffs">
                          <Link to="/Sports Shoes & Floaters">Sports shoes&Floaters</Link></a>
                        </li> */}

                      </div>
                      {/* <hr /> */}
                      <h3>  <Link to="/Lamps & Lighting" style={{ color: "#c59613" }}>Lamps&Lighting</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Floor Lamps">Floor Lamps</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Ceiling Lamps">CeilingLamps</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Table Lamps">Table Lamps</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Wall Lamps">Wall Lamps</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Outdoor Lamps">Outdoor Lamps</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/String Lights">String Lights</Link></a>
                        </li>

                      </div>

                    </li>
                    <li>

                    </li>

                    <li>
                      <h3> <Link to="/Home Decor" style={{ color: "#c59613" }}>Home Decor</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Plants & Planters">Plants & Planters</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Aromas & Candles">Aromas & Candles</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Clocks">Clocks</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Mirrors">Mirrors</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Wall Decor">Wall Decor</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Festive Decor">Festive Decor</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Pooja Essentials">Pooja Essentials</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Wall Shelves">Wall Shelves</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Fountains">Fountains</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Showpieces & Vases">Show pieces& Vases</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Ottoman">Ottoman</Link></a>
                        </li>
                      </div>
                      {/* <hr /> */}
                      <h3><Link to="/Cushions & Cushion Covers" style={{ color: "#c59613" }}>Cushions&CushionCovers</Link> </h3>
                      <h3><Link to="/Curtains" style={{ color: "#c59613" }}>Curtains</Link> </h3>
                    </li>
                    <li>
                      <h3><Link to="/Home Gift Sets" style={{ color: "#c59613" }}>Home Gift Sets</Link> </h3>
                      <h3><Link to="/Kitchen & Table" style={{ color: "#c59613" }}>Kitchen & Table</Link> </h3>

                      <div className="sub-menu">

                        <li><a href="dffs">
                          <Link to="/Table Runners">Table Runners</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Dinnerware & Serveware">Dinnerware & Serveware</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Cups and Mugs">Cups and Mugs</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Bakeware & Cookware">Bakeware & Cookware</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Kitchen Storage & Tools">Kitchen Storage & Tools</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Bar & Drinkware">Bar & Drinkware</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Table Covers & Furnishings">TableCovers&Furnishings</Link></a>
                        </li>
                      </div>
                      {/* <hr /> */}
                      <h3> <Link to="/Gadgets" style={{ color: "#c59613" }}>Storage</Link></h3>
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Bins">Bins</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Hangers">Hangers</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Organisers">Organisers</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Hooks & Holders">Hooks & Holders</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Laundry Bags">Laundry Bags</Link></a>
                        </li>

                      </div>
                    </li>
                    <li>

                    </li>
                    <li>
                      <h3> <Link to="/Brands" style={{ color: "#c59613" }}>Brands</Link></h3>
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/H&M">H&M</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Marks & Spencer">Marks & Spencer</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Home Centre">Home Centre</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Spaces">Spaces</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/D'Decor">D'Decor</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Story@Home">Story@Home</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Pure Home & Living">PureHome&Living</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Swayam">Swayam</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Raymond Home">Raymond Home</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Maspar">Maspar</Link></a>

                          <li><a href="dffs">
                            <Link to="/Trident">Trident</Link></a>
                          </li>
                          <li><a href="dffs">
                            <Link to="/Cortina">Cortina</Link></a>
                          </li>
                          <li><a href="dffs">
                            <Link to="/Random">Random</Link></a>
                          </li>
                          <li><a href="dffs">
                            <Link to="/Ellementry">Ellementry</Link></a>
                          </li>
                          <li><a href="dffs">
                            <Link to="/ROMEE">ROMEE</Link></a>
                          </li>
                          <li><a href="dffs">
                            <Link to="/Story@Home">SEJby NishaGupta</Link></a>
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

                  <a href="dfs" className="beauty is-active" active-color="orange">
                    <Link to="beautymen">
                      {/* <strong> */}
                      BEAUTY
                      {/* </strong> */}
                    </Link>
                  </a>
                  <ul className="dropdowns-contents4">
                    <li>
                      <h3> <Link to="/Makeup" style={{ color: "#13a1c5" }}>Makeup</Link></h3>
                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Lipstick">Lipstick</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Lip Gloss">Lip Gloss</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Lip Liner">Lip Liner</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Mascara">Mascara</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Eyeliner">Eyeliner</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Kajal">Kajal</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Eyeshadow">Eyeshadow</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Foundation">Foundation</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Primer">Primer</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Concealer">Concealer</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Compact">Compact</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Nail Polish">Nail Polish</Link></a>
                        </li>

                      </div>
                    </li>
                    <li>
                      <h3> <Link to="/Skincare, Bath & Body " style={{ color: "#13a1c5" }}>Skincare, Bath & Body</Link> </h3>
                      <div className="sub-menu">

                        <li><a href="dffs">
                          <Link to="/Face Moisturiser">Face Moisturiser</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Cleanser">Cleanser</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Masks & Peel">Masks & Peel</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Sunscreen">Sunscreen</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Serum">Serum</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Face Wash">Face Wash</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Eye Cream">Eye Cream</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Lip Balm">Lip Balm</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Body Lotion ">Body Lotion </Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Body Wash">Body Wash</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Body Wash"> Body Scrub</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Body Wash">Hand Cream </Link></a>
                        </li>
                      </div>
                      {/* <hr /> */}
                      <h3> <Link to="/Baby Care" style={{ color: "#13a1c5" }}>Baby Care</Link> </h3>
                      <h3> <Link to="/Masks" style={{ color: "#13a1c5" }}>Masks</Link> </h3>
                    </li>

                    <li>
                      <h3> <Link to="/Haircare" style={{ color: "#13a1c5" }}>Haircare</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Shampoo">Shampoo</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Conditioner">Conditioners</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Hair Cream">Hair Cream</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Hair Oil">Hair Oil</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Hair Gel">Hair Gel</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Hair Color">Hair Color</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Hair Serum">Hair Serum</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Hair Accessory">Hair Accessory</Link></a>
                        </li>

                      </div>
                      {/* <hr /> */}

                      <h3>  <Link to="/Fragrances" style={{ color: "#13a1c5" }}>Fragrances</Link> </h3>

                      <div className="sub-menu">
                        <li><a href="dffs">
                          <Link to="/Perfume">Perfume</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Deodorant">Deodorant</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Body Mist">Body Mist</Link></a>
                        </li>

                      </div>
                    </li>
                    <li>

                    </li>

                    <li>
                      <h3> <Link to="/Appliances" style={{ color: "#13a1c5" }}>Appliances</Link> </h3>

                      <div className="sub-menu">


                        <li><a href="dffs">
                          <Link to="/Hair Straightener">Hair Straightener</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Hair Dryer">Hair Dryer</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Epilator">Epilator</Link></a>
                        </li>
                        {/* <hr /> */}
                        <h3> <Link to="/Men's Grooming" style={{ color: "#13a1c5" }}>Men's Grooming</Link> </h3>


                        <li><a href="dffs">
                          <Link to="/Trimmers">Trimmers</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Beard Oil">Beard Oil</Link></a>
                        </li>

                        <li><a href="dffs">
                          <Link to="/Hair Wax">Hair Wax</Link></a>
                        </li>

                        {/* <hr /> */}
                        <h3> <Link to="/Beauty Gift & Makeup Set" style={{ color: "#13a1c5" }}>Beauty Gift & Makeup Set</Link> </h3>

                        <li><a href="dffs">
                          <Link to="/Beauty Gift">Beauty Gift</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Makeup Kit">Makeup Kit</Link></a>
                        </li>


                      </div>
                      {/* <hr /> */}
                      <h3> <Link to="/Premium Beauty" style={{ color: "#13a1c5" }} >Premium Beauty</Link> </h3>
                      <h3> <Link to="/Wellness & Hygiene" style={{ color: "#13a1c5" }}>Wellness & Hygiene</Link> </h3>

                    </li>
                    <li>
                      <h3><Link to="/Top Brands" style={{ color: "#13a1c5" }} s>Top Brands</Link> </h3>


                      <div className="sub-menu">

                        <li><a href="dffs">
                          <Link to="/Lakme">Lakme</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Maybelline">Maybelline</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/LOreal">Loreal</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Philips">Philips</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Bath & Body Works">Bath & Body Works</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/THE BODY SHOP">The Body Shop</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Biotique">Biotique</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Mamaearth">Mamaearth</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/MCaffeine">MCaffeine</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/Nivea">Nivea</Link></a>
                        </li>
                        <li><a href="dffs">
                          <Link to="/LOreal Professionnel">Loreal Professionnel</Link></a>
                          <li><a href="dffs">
                            <Link to="/KAMA AYURVEDA">Kama Ayerveda</Link></a>
                          </li>
                          <li><a href="dffs">
                            <Link to="/M.A.C">M.A.C</Link></a>
                          </li>
                          <li><a href="dffs">
                            <Link to="/Forest Essentials">Forest Essentials</Link></a>
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
                <Link to="#" className="link">
                  {userInfo.name} {" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
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
                <Link to="#admin" className="link">
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
                <Link to="#admin" className="link">
                  Admin
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <br />
                  <li>
                    <Link to="/productlist">Products</Link>
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

            {userInfo && userInfo.isAdmin && (

              <div className="dropdown">
                <Link to="#menu" className="link">
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


            )}
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
            <Route path="/cart" element={<CartScreen />}></Route>
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

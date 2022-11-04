import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { addressListReducer } from './reducers/addressReducers';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer, orderDeleteReducer, orderDeliverReducer, orderDetailsReducer, orderListReducer, orderMineListReducer, orderPayReducer, orderSummaryReducer } from './reducers/orderReducers';
import { productCategoryListReducer, productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productReviewCreateReducer, productUpdateReducer } from './reducers/productReducers';
import { userAddressMapReducer, userDeleteReducer, userDetailsReducer, userListReducer, userRegisterReducer, userSigninReducer, userAccountReducer, userAccountcreationReducer, userAdmininReducer, userTopSellerListReducer, userUpdateProfileReducer, userUpdateReducer } from './reducers/userReducers';
import { SareeListReducer, SareeDetailsReducer } from './reducers/sareeReducer';
import { womenCategoryListReducer, womenCreateReducer, womenDeleteReducer, womenDetailsReducer, womenListReducer, womenReviewCreateReducer, womenUpdateReducer } from './reducers/womenReducers';
// import { cartWomenReducer } from './reducers/cartWomenReducers';
import { kidCategoryListReducer, kidCreateReducer, kidDeleteReducer, kidDetailsReducer, kidListReducer, kidReviewCreateReducer, kidUpdateReducer } from './reducers/kidReducer';
// import { cartKidReducer } from './reducers/cartKidReducers';
import { tshirtDetailsReducer, tshirtListReducer, tshirtReviewCreateReducer } from './reducers/tshirtReducers';
import { casualshirtDetailsReducer, casualshirtListReducer, casualshirtReviewCreateReducer } from './reducers/casualshirtReducers';
import { cartTshirtReducer } from './reducers/cartTshirtReducers';
import { cartcasualshirtReducer } from './reducers/cartCasualShirtReducers';
import { cartformalshirtReducer } from './reducers/cartFormalShirtReducers';
import { cartjacketReducer } from './reducers/cartJacketReducers';
import { cartsweaterReducer } from './reducers/cartSweaterReducers';

import { cartRainjacketReducer } from './reducers/cartRainjacketReducers';
import { cartSuitReducer } from './reducers/cartSuitReducers';
import { cartBlazerReducer } from './reducers/cartBlazerReducers';
import { formalshirtDetailsReducer, formalshirtListReducer, formalshirtReviewCreateReducer } from './reducers/formalshirtReducers';

import { jacketDetailsReducer, jacketListReducer, jacketReviewCreateReducer } from './reducers/jacketReducers';
import { sweaterDetailsReducer, sweaterListReducer, sweaterReviewCreateReducer } from './reducers/sweaterReducers';
import { suitDetailsReducer, suitListReducer, suitReviewCreateReducer } from './reducers/suitReducers';
import { blazerDetailsReducer, blazerListReducer, blazerReviewCreateReducer } from './reducers/blazerReducers';
import { rainjacketDetailsReducer, rainjacketListReducer, rainjacketReviewCreateReducer } from './reducers/rainjacketReducers';
// import { suitDetailsReducer, suitListReducer, suitReviewCreateReducer } from './reducers/suitReducers';
// import { cartKidReducer } from './reducers/cartKidReducers';
// import { cartWomenReducer } from './reducers/cartWomenReducers';




const initialState = {


  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },


  userAccount: {
    accountInfo: localStorage.getItem('data')
      ? JSON.parse(localStorage.getItem('data'))
      : null,
  },
  userAccountCreation: {
    accountcreationInfo: localStorage.getItem('accountcreationInfo')
      ? JSON.parse(localStorage.getItem('accountcreationInfo'))
      : null,
  },
  userAdminin: {
    adminInfo: localStorage.getItem('adminInfo')
      ? JSON.parse(localStorage.getItem('adminInfo'))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'PayPal',
  },
  cartTshirt: {
    cartTshirtItem: localStorage.getItem('cartTshirtItem')
      ? JSON.parse(localStorage.getItem('cartTshirtItem'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'PayPal',
  },
  cartCasualshirt: {
    cartCasualshirtItem: localStorage.getItem('cartCasualshirtItem')
      ? JSON.parse(localStorage.getItem('cartCasualshirtItem'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'PayPal',
  },
  cartFormalshirt: {
    cartFormalshirtItem: localStorage.getItem('cartFormalshirtItem')
      ? JSON.parse(localStorage.getItem('cartFormalshirtItem'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'PayPal',
  },

  cartSweater: {
    cartSweaterItem: localStorage.getItem('cartSweaterItem')
      ? JSON.parse(localStorage.getItem('cartSweaterItem'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'PayPal',
  },
  
  
  cartJacket: {
    cartJacketItem: localStorage.getItem('cartJacketItem')
      ? JSON.parse(localStorage.getItem('cartJacketItem'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'PayPal',
  },
  cartSuit: {
    cartSuitItem: localStorage.getItem(' cartSuitItem')
      ? JSON.parse(localStorage.getItem(' cartSuitItem'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'PayPal',
  },
  cartBlazer: {
    cartBlazerItem: localStorage.getItem('cartBlazerItem')
      ? JSON.parse(localStorage.getItem('cartBlazerItem'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'PayPal',
  },
  cartRainjacket: {
    cartRainjacketItem: localStorage.getItem('cartRainjacketItem')
      ? JSON.parse(localStorage.getItem('cartRainjacketItem'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'PayPal',
  },
  
};



const reducer = combineReducers({
  addressesList: addressListReducer,
  productList: productListReducer,
  womenList: womenListReducer,
  tshirtList: tshirtListReducer,
  casualshirtList: casualshirtListReducer,
  formalshirtList: formalshirtListReducer,
  jacketList: jacketListReducer,
  suitList: suitListReducer,
  rainjacketList: rainjacketListReducer,
  blazerList: blazerListReducer,
  sweaterList: sweaterListReducer,
  kidList: kidListReducer,

  productDetails: productDetailsReducer,
  womenDetails: womenDetailsReducer,
  tshirtDetails: tshirtDetailsReducer,
  casualshirtDetails: casualshirtDetailsReducer,
  formalshirtDetails: formalshirtDetailsReducer,
  sweaterDetails: sweaterDetailsReducer,
  jacketDetails: jacketDetailsReducer,
  suitDetails: suitDetailsReducer,
  rainjacketDetails: rainjacketDetailsReducer,
  blazerDetails: blazerDetailsReducer,
  
  kidDetails: kidDetailsReducer,
  cart: cartReducer,
  
  // cart: cartWomenReducer,

  // cart: cartKidReducer,
  cartTshirt: cartTshirtReducer,
  cartCasualshirt: cartcasualshirtReducer,
  cartFormalshirt: cartformalshirtReducer,

  cartJacket: cartjacketReducer,
  cartSweater: cartsweaterReducer,
  cartSuit: cartSuitReducer,
  cartRainjacket: cartRainjacketReducer,
  cartBlazer: cartBlazerReducer,

  userSignin: userSigninReducer,
  userAccount: userAccountReducer,

  userAccountCreation: userAccountcreationReducer,
  userAdminin: userAdmininReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  productCreate: productCreateReducer,
  womenCreate: womenCreateReducer,
  kidCreate: kidCreateReducer,
  productUpdate: productUpdateReducer,
  womenUpdate: womenUpdateReducer,
  kidUpdate: kidUpdateReducer,
  productDelete: productDeleteReducer,
  womenDelete: womenDeleteReducer,
  kidDelete: kidDeleteReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
  orderDeliver: orderDeliverReducer,
  userList: userListReducer,
  userUpdate: userUpdateReducer,
  userDelete: userDeleteReducer,
  userTopSellersList: userTopSellerListReducer,
  productCategoryList: productCategoryListReducer,
  womenCategoryList: womenCategoryListReducer,
  kidCategoryList: kidCategoryListReducer,
  productReviewCreate: productReviewCreateReducer,
  womenReviewCreate: womenReviewCreateReducer,
  tshirtReviewCreate: tshirtReviewCreateReducer,
  casualshirtReviewCreate: casualshirtReviewCreateReducer,
  formalshirtReviewCreate: formalshirtReviewCreateReducer,

  sweaterReviewCreate: sweaterReviewCreateReducer,
 jacketReviewCreate: jacketReviewCreateReducer,
 suitReviewCreate: suitReviewCreateReducer,
 rainjacketReviewCreate: rainjacketReviewCreateReducer,
 blazerReviewCreate: blazerReviewCreateReducer,
  kidReviewCreate: kidReviewCreateReducer,
  userAddressMap: userAddressMapReducer,
  orderSummary: orderSummaryReducer,
  sareeReducer: SareeListReducer,
  sareeDetails: SareeDetailsReducer,

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
document.cookie = 'name=sri'
export default store;
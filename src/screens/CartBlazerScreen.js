import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { addToCart, removeFromCartBlazer } from "../actions/cartBlazerAction";
import MessageBox from "../components/MessageBox";


export default function CartBlazerScreen(props) {
  const navigate = useNavigate();
  const params = useParams();
  const blazerId = params.id;
  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get("qty");
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;
  const dispatch = useDispatch();
  const cartBlazer= useSelector((state) => state.cartBlazer);
  const { cartBlazerItem, error } = cartBlazer;
  console.log("called--->cartBlazer",cartBlazer);
  useEffect(() => {
    if (blazerId) {
      dispatch(addToCart(blazerId, qty));
    }
  }, [dispatch, blazerId, qty]);
  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCartBlazer(id));
  };

  const checkoutHandler = () => {
    navigate('/shipping');
  };
  return (
    <div className="row top">

      <p>cart is empty</p>
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {cartBlazerItem.length === 0 ? (
          <MessageBox>
            Cart is  the empty. <Link to="/tshirt">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartBlazerItem.map((item) => (
              <li key={item.blazer}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/blazer/${item.blazer}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.blazer, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.blazer)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartBlazer.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartBlazer.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartBlazer.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

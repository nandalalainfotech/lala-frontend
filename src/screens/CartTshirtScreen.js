import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/carttshirtAction";
import MessageBox from "../components/MessageBox";


export default function CartTshirtScreen(props) {
  const navigate = useNavigate();
  const params = useParams();
  const tshirtId = params.id;
  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get("qty");
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;
  const dispatch = useDispatch();
  const cartTshirt= useSelector((state) => state.cartTshirt);
  const { cartTshirtItem, error } = cartTshirt;
  console.log("called--->cartTshirts",cartTshirt);
  useEffect(() => {
    if (tshirtId) {
      dispatch(addToCart(tshirtId, qty));
    }
  }, [dispatch, tshirtId, qty]);
  const removeFromCartHandler = (tshirt_id) => {
    // delete action
    dispatch(removeFromCart(tshirt_id));
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
        {cartTshirtItem.length === 0 ? (
          <MessageBox>
            Cart is  the empty. <Link to="/tshirt">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartTshirtItem.map((item) => (
              <li key={item.tshirt}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/tshirt/${item.tshirt}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.tshirt, Number(e.target.value))
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
                      onClick={() => removeFromCartHandler(item.tshirt)}
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
                Subtotal ({cartTshirtItem.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartTshirtItem.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartTshirtItem.length === 0}
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

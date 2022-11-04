import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { addToCart, removeFromCartSweater } from "../actions/cartSweaterAction";
import MessageBox from "../components/MessageBox";


export default function CartSweaterScreen(props) {
  const navigate = useNavigate();
  const params = useParams();
  const sweaterId = params.id;
  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get("qty");
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;
  const dispatch = useDispatch();
  const cartSweater= useSelector((state) => state.cartSweater);
  const { cartSweaterItem, error } = cartSweater;
  console.log("called--->cartSweaters",cartSweater);
  useEffect(() => {
    if (sweaterId) {
      dispatch(addToCart(sweaterId, qty));
    }
  }, [dispatch, sweaterId, qty]);
  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCartSweater(id));
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
        {cartSweaterItem.length === 0 ? (
          <MessageBox>
            Cart is  the empty. <Link to="/sweater">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartSweaterItem.map((item) => (
              <li key={item.sweater}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/sweater/${item.sweater}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.sweater, Number(e.target.value))
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
                      onClick={() => removeFromCartHandler(item.sweater)}
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
                Subtotal ({cartSweater.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartSweater.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartSweater.length === 0}
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

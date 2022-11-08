import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { addToCart, removeFromCartNehru } from "../actions/cartNehruAction";
import MessageBox from "../components/MessageBox";


export default function CartNehruScreen(props) {
  const navigate = useNavigate();
  const params = useParams();
  const nehruId = params.id;
  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get("qty");
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;
  const dispatch = useDispatch();
  const cartNehru= useSelector((state) => state.cartNehru);
  const { cartNehruItem, error } = cartNehru;
  console.log("called--->cartNehrus",cartNehru);
  useEffect(() => {
    if (nehruId) {
      dispatch(addToCart(nehruId, qty));
    }
  }, [dispatch, nehruId, qty]);
  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCartNehru(id));
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
        {cartNehruItem.length === 0 ? (
          <MessageBox>
            Cart is  the empty. <Link to="/nehru">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartNehruItem.map((item) => (
              <li key={item.nehru}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/nehru/${item.nehru}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.nehru, Number(e.target.value))
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
                      onClick={() => removeFromCartHandler(item.nehru)}
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
                Subtotal ({cartNehru.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartNehru.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartNehru.length === 0}
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

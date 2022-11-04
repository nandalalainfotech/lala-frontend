import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { addToCart, removeFromCartRainjacket } from "../actions/cartRainJacketAction";
import MessageBox from "../components/MessageBox";


export default function CartRainjacketScreen(props) {
  const navigate = useNavigate();
  const params = useParams();
  const rainjacketId = params.id;
  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get("qty");
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;
  const dispatch = useDispatch();
  const cartRainjacket= useSelector((state) => state.cartRainjacket);
  const { cartRainjacketItem, error } = cartRainjacket;
  console.log("called--->cartRainjackets",cartRainjacket);
  useEffect(() => {
    if (rainjacketId) {
      dispatch(addToCart(rainjacketId, qty));
    }
  }, [dispatch, rainjacketId, qty]);
  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCartRainjacket(id));
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
        {cartRainjacketItem.length === 0 ? (
          <MessageBox>
            Cart is  the empty. <Link to="/tshirt">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartRainjacketItem.map((item) => (
              <li key={item.rainjacket}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/rainjacket/${item.rainjacket}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.rainjacket, Number(e.target.value))
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
                      onClick={() => removeFromCartHandler(item.rainjacket)}
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
                Subtotal ({cartRainjacket.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartRainjacket.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartRainjacket.length === 0}
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

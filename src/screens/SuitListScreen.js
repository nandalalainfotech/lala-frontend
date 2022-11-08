import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createSuit,
  deleteSuit,
  listSuits,
} from "../actions/suitAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Link } from "react-router-dom";
import { SUIT_CREATE_RESET, SUIT_DELETE_RESET } from "../constants/suitConstants";

export default function SuitListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const suitList = useSelector((state) => state.suitList);
  const { loading, error, suits, page, pages } = suitList;
  const suitCreate = useSelector((state) => state.suitCreate);
  console.log("called----->suitCreate",suitCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    suit: createdSuit,
  } = suitCreate;
  const suitDelete = useSelector((state) => state.suitDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = suitDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: SUIT_CREATE_RESET });
      navigate(`/suit/${createdSuit._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: SUIT_DELETE_RESET });
    }
    dispatch(
      listSuits({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdSuit,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (suit) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteSuit(suit._id));
    }
  };
  console.log("called----->createSuit",createSuit);
  const createHandler = () => {
    dispatch(createSuit());
  };
  return (
    <div>
      <div className="row">
        <h1>suits</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create suit
        </button>
      </div>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {suits.map((suit) => (
                <tr key={suit._id}>
                  <td>{suit._id}</td>
                  <td>{suit.name}</td>
                  <td>{suit.price}</td>
                  <td>{suit.category}</td>
                  <td>{suit.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/suit/${suit._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(suit)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}


              {/* {sarees.map((saree) => (
                <tr key={saree._id}>
                  <td>{saree._id}</td>
                  <td>{saree.name}</td>
                  <td>{saree.price}</td>
                  <td>{saree.category}</td>
                  <td>{saree.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/saree/${saree._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(saree)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
          <div className="row center pagination">
            {[...Array(pages).keys()].map((x) => (
              <Link
                className={x + 1 === page ? 'active' : ''}
                key={x + 1}
                to={`/suitlist/pageNumber/${x + 1}`}
              >
                {x + 1}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

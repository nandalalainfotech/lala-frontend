import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createTshirt,
  deleteTshirt,
  listTshirts,
} from "../actions/tshirtAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { Link } from "react-router-dom";

import { TSHIRT_CREATE_RESET, TSHIRT_DELETE_RESET } from "../constants/tshirtConstants";

export default function TshirtListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const tshirtList = useSelector((state) => state.tshirtList);
  const { loading, error, tshirts, page, pages } = tshirtList;
  const tshirtCreate = useSelector((state) => state.tshirtCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    tshirt: createdTshirt,
  } = tshirtCreate;
  const tshirtDelete = useSelector((state) => state.tshirtDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = tshirtDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: TSHIRT_CREATE_RESET });
      navigate(`/tshirt/${createdTshirt._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: TSHIRT_DELETE_RESET });
    }
    dispatch(
      listTshirts({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdTshirt,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (tshirt) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteTshirt(tshirt._id));
    }
  };
  const createHandler = () => {
    dispatch(createTshirt());
  };
  return (
    <div>
      <div className="row">
        <h1>Products</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create Product
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
              {tshirts.map((tshirt) => (
                <tr key={tshirt._id}>
                  <td>{tshirt._id}</td>
                  <td>{tshirt.name}</td>
                  <td>{tshirt.price}</td>
                  <td>{tshirt.category}</td>
                  <td>{tshirt.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/tshirt/${tshirt._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(tshirt)}
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
                to={`/tshirtlist/pageNumber/${x + 1}`}
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

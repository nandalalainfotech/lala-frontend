import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createNehru,
  deleteNehru,
  listNehrus,
} from "../actions/nehruAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { Link } from "react-router-dom";

import { NEHRU_CREATE_RESET, NEHRU_DELETE_RESET } from "../constants/nehruConstants";

export default function NehruListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const nehruList = useSelector((state) => state.nehruList);
  const { loading, error, nehrus, page, pages } = nehruList;
  const nehruCreate = useSelector((state) => state.nehruCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    nehru: createdNehru,
  } = nehruCreate;
  const nehruDelete = useSelector((state) => state.nehruDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = nehruDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: NEHRU_CREATE_RESET });
      navigate(`/nehru/${createdNehru._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: NEHRU_DELETE_RESET });
    }
    dispatch(
      listNehrus({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdNehru,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (nehru) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteNehru(nehru._id));
    }
  };
  const createHandler = () => {
    dispatch(createNehru());
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
              {nehrus.map((nehru) => (
                <tr key={nehru._id}>
                  <td>{nehru._id}</td>
                  <td>{nehru.name}</td>
                  <td>{nehru.price}</td>
                  <td>{nehru.category}</td>
                  <td>{nehru.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/nehru/${nehru._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(nehru)}
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
                to={`/nehrulist/pageNumber/${x + 1}`}
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

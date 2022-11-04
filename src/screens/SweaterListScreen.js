import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createSweater,
  deleteSweater,
  listSweaters,
} from "../actions/sweaterAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { Link } from "react-router-dom";

import {SWEATER_CREATE_RESET,SWEATER_DELETE_RESET } from "../constants/sweaterConstants";

export default function SweateristScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const sweaterList = useSelector((state) => state.sweaterList);
  const { loading, error, sweaters, page, pages } = sweaterList;
  const sweaterCreate = useSelector((state) => state.sweaterCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    sweater: createdSweater,
  } = sweaterCreate;
  const sweaterDelete = useSelector((state) => state.sweaterDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = sweaterDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type:SWEATER_CREATE_RESET });
      navigate(`/sweater/${createdSweater._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type:SWEATER_DELETE_RESET });
    }
    dispatch(
      listSweaters({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdSweater,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (sweater) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteSweater(sweater._id));
    }
  };
  const createHandler = () => {
    dispatch(createSweater());
  };
  return (
    <div>
      <div className="row">
        <h1>sweaters</h1>
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
              {sweaters.map((sweater) => (
                <tr key={sweater._id}>
                  <td>{sweater._id}</td>
                  <td>{sweater.name}</td>
                  <td>{sweater.price}</td>
                  <td>{sweater.category}</td>
                  <td>{sweater.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/sweater/${sweater._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(sweater)}
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
                to={`/sweaterlist/pageNumber/${x + 1}`}
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

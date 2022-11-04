import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createJacket,
  deleteJacket,
  listJackets,
} from "../actions/jacketAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { Link } from "react-router-dom";

import {JACKET_CREATE_RESET, JACKET_DELETE_RESET } from "../constants/jacketConstants";

export default function JacketListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const jacketList = useSelector((state) => state.jacketList);
  const { loading, error, jackets, page, pages } = jacketList;
  const jacketCreate = useSelector((state) => state.jacketCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    jacket: createdJacket,
  } = jacketCreate;
  const jacketDelete = useSelector((state) => state.jacketDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = jacketDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: JACKET_CREATE_RESET });
      navigate(`/jacket/${createdJacket._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: JACKET_DELETE_RESET });
    }
    dispatch(
      listJackets({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdJacket,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (jacket) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteJacket(jacket._id));
    }
  };
  const createHandler = () => {
    dispatch(createJacket());
  };
  return (
    <div>
      <div className="row">
        <h1>casual shirts</h1>
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
              {jackets.map((jacket) => (
                <tr key={jacket._id}>
                  <td>{jacket._id}</td>
                  <td>{jacket.name}</td>
                  <td>{jacket.price}</td>
                  <td>{jacket.category}</td>
                  <td>{jacket.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/jacket/${jacket._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(jacket)}
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
                to={`/jacketlist/pageNumber/${x + 1}`}
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

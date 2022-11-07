import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createSherwani,
  deleteSherwani,
  listSherwanis,
} from "../actions/sherwaniAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { Link } from "react-router-dom";

import {SHERWANI_CREATE_RESET,SHERWANI_DELETE_RESET } from "../constants/sherwaniConstants";

export default function SherwaniListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const sherwaniList = useSelector((state) => state.sherwaniList);
  const { loading, error, sherwanis, page, pages } = sherwaniList;
  const sherwaniCreate = useSelector((state) => state.sherwaniCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    sherwani: createdSherwani,
  } = sherwaniCreate;
  const sherwaniDelete = useSelector((state) => state.sherwaniDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = sherwaniDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type:SHERWANI_CREATE_RESET });
      navigate(`/sherwani/${createdSherwani._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type:SHERWANI_DELETE_RESET });
    }
    dispatch(
      listSherwanis({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdSherwani,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (sherwani) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteSherwani(sherwani._id));
    }
  };
  const createHandler = () => {
    dispatch(createSherwani());
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
              {sherwanis.map((sherwani) => (
                <tr key={sherwani._id}>
                  <td>{sherwani._id}</td>
                  <td>{sherwani.name}</td>
                  <td>{sherwani.price}</td>
                  <td>{sherwani.category}</td>
                  <td>{sherwani.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/sherwani/${sherwani._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(sherwani)}
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
                to={`/sherwanilist/pageNumber/${x + 1}`}
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

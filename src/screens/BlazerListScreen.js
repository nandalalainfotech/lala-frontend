import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createBlazer,
  deleteBlazer,
  listBlazers,
} from "../actions/blazerAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { Link } from "react-router-dom";

import { BLAZER_CREATE_RESET, BLAZER_DELETE_RESET } from "../constants/blazerConstants";

export default function BlazerListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const blazerList = useSelector((state) => state.blazerList);
  const { loading, error, blazers, page, pages } = blazerList;
  const blazerCreate = useSelector((state) => state.blazerCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    blazer: createdBlazer,
  } = blazerCreate;
  const blazerDelete = useSelector((state) => state.blazerDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = blazerDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: BLAZER_CREATE_RESET });
      navigate(`/blazer/${createdBlazer._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: BLAZER_DELETE_RESET });
    }
    dispatch(
      listBlazers({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdBlazer,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (blazer) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteBlazer(blazer._id));
    }
  };
  const createHandler = () => {
    dispatch(createBlazer());
  };
  return (
    <div>
      <div className="row">
        <h1>formal shirts</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create blazer
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
              {blazers.map((blazer) => (
                <tr key={blazer._id}>
                  <td>{blazer._id}</td>
                  <td>{blazer.name}</td>
                  <td>{blazer.price}</td>
                  <td>{blazer.category}</td>
                  <td>{blazer.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/blazer/${blazer._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(blazer)}
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
                to={`/blazerlist/pageNumber/${x + 1}`}
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

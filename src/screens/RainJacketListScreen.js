import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createRainjacket,
  deleteRainjacket,
  listRainjackets,
} from "../actions/rainjacketAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { Link } from "react-router-dom";

import { RAINJACKET_CREATE_RESET, RAINJACKET_DELETE_RESET } from "../constants/rainjacketConstants";

export default function RainjacketListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const rainjacketList = useSelector((state) => state.rainjacketList);
  const { loading, error, rainjackets, page, pages } = rainjacketList;
  const rainjacketCreate = useSelector((state) => state.rainjacketCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    rainjacket: createdRainjacket,
  } = rainjacketCreate;
  const rainjacketDelete = useSelector((state) => state.rainjacketDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = rainjacketDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: RAINJACKET_CREATE_RESET });
      navigate(`/rainjacket/${createdRainjacket._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: RAINJACKET_DELETE_RESET });
    }
    dispatch(
      listRainjackets({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdRainjacket,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (rainjacket) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteRainjacket(rainjacket._id));
    }
  };
  const createHandler = () => {
    dispatch(createRainjacket());
  };
  return (
    <div>
      <div className="row">
        <h1>rain jackets</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create rainjacket
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
              {rainjackets.map((rainjacket) => (
                <tr key={rainjacket._id}>
                  <td>{rainjacket._id}</td>
                  <td>{rainjacket.name}</td>
                  <td>{rainjacket.price}</td>
                  <td>{rainjacket.category}</td>
                  <td>{rainjacket.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/rainjacket/${rainjacket._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(rainjacket)}
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
                to={`/rainjacketlist/pageNumber/${x + 1}`}
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

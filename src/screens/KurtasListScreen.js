import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createKurtas,
  deleteKurtas,
  listKurtas,
} from "../actions/kurtasAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { Link } from "react-router-dom";

import { KURTAS_CREATE_RESET, KURTAS_DELETE_RESET } from "../constants/kurtasConstants";

export default function KurtasListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const kurtasList = useSelector((state) => state.kurtasList);
  const { loading, error, kurtass, page, pages } = kurtasList;
  const kurtasCreate = useSelector((state) => state.kurtasCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    kurtas: createdKurtas,
  } = kurtasCreate;
  const kurtasDelete = useSelector((state) => state.kurtasDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = kurtasDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: KURTAS_CREATE_RESET });
      navigate(`/kurtas/${createdKurtas._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: KURTAS_DELETE_RESET });
    }
    dispatch(
      listKurtas({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdKurtas,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (kurtas) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteKurtas(kurtas._id));
    }
  };
  const createHandler = () => {
    dispatch(createKurtas());
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
              {kurtass.map((kurtas) => (
                <tr key={kurtas._id}>
                  <td>{kurtas._id}</td>
                  <td>{kurtas.name}</td>
                  <td>{kurtas.price}</td>
                  <td>{kurtas.category}</td>
                  <td>{kurtas.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/kurtas/${kurtas._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(kurtas)}
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
                to={`/kurtaslist/pageNumber/${x + 1}`}
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

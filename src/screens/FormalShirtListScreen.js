import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createFormalshirt,
  deleteFormalshirt,
  listFormalshirts,
} from "../actions/formalshirtAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { Link } from "react-router-dom";

import { FORMALSHIRT_CREATE_RESET, FORMALSHIRT_DELETE_RESET } from "../constants/formalshirtConstants";

export default function FormalShirtListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const formalshirtList = useSelector((state) => state.formalshirtList);
  const { loading, error, formalshirts, page, pages } = formalshirtList;
  const formalshirtCreate = useSelector((state) => state.formalshirtCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    formalshirt: createdFormalshirt,
  } = formalshirtCreate;
  const formalshirtDelete = useSelector((state) => state.formalshirtDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = formalshirtDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: FORMALSHIRT_CREATE_RESET });
      navigate(`/formalshirt/${createdFormalshirt._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: FORMALSHIRT_DELETE_RESET });
    }
    dispatch(
      listFormalshirts({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdFormalshirt,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (formalshirt) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteFormalshirt(formalshirt._id));
    }
  };
  const createHandler = () => {
    dispatch(createFormalshirt());
  };
  return (
    <div>
      <div className="row">
        <h1>formal shirts</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create Formal
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
              {formalshirts.map((formalshirt) => (
                <tr key={formalshirt._id}>
                  <td>{formalshirt._id}</td>
                  <td>{formalshirt.name}</td>
                  <td>{formalshirt.price}</td>
                  <td>{formalshirt.category}</td>
                  <td>{formalshirt.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/formalshirt/${formalshirt._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(formalshirt)}
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
                to={`/formalshirtlist/pageNumber/${x + 1}`}
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

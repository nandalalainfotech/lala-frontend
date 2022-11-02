import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createCasualshirt,
  deleteCasualshirt,
  listCasualshirts,
} from "../actions/casualshirtAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { Link } from "react-router-dom";

import { CASUALSHIRT_CREATE_RESET, CASUALSHIRT_DELETE_RESET } from "../constants/casualshirtConstants";

export default function CasualShirtListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const casualshirtList = useSelector((state) => state.casualshirtList);
  const { loading, error, casualshirts, page, pages } = casualshirtList;
  const casualshirtCreate = useSelector((state) => state.casualshirtCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    casualshirt: createdCasualshirt,
  } = casualshirtCreate;
  const casualshirtDelete = useSelector((state) => state.casualshirtDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = casualshirtDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: CASUALSHIRT_CREATE_RESET });
      navigate(`/casualshirt/${createdCasualshirt._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: CASUALSHIRT_DELETE_RESET });
    }
    dispatch(
      listCasualshirts({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdCasualshirt,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (casualshirt) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteCasualshirt(casualshirt._id));
    }
  };
  const createHandler = () => {
    dispatch(createCasualshirt());
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
              {casualshirts.map((casualshirt) => (
                <tr key={casualshirt._id}>
                  <td>{casualshirt._id}</td>
                  <td>{casualshirt.name}</td>
                  <td>{casualshirt.price}</td>
                  <td>{casualshirt.category}</td>
                  <td>{casualshirt.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/casualshirt/${casualshirt._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(casualshirt)}
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
                to={`/casualshirtlist/pageNumber/${x + 1}`}
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

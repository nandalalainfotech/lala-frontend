import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createIndian,
  deleteIndian,
  listIndians,
} from "../actions/indianAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
  INDIAN_CREATE_RESET,
  INDIAN_DELETE_RESET,
} from "../constants/indianConstants";
import { Link } from "react-router-dom";

export default function IndianListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const indianList = useSelector((state) => state.indianList);
  const { loading, error, indians, page, pages } = indianList;
  const indianCreate = useSelector((state) => state.indianCreate);
  console.log("called----->indianCreate",indianCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    indian: createdIndian,
  } = indianCreate;
  const indianDelete = useSelector((state) => state.indianDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = indianDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: INDIAN_CREATE_RESET });
      navigate(`/indian/${createdIndian._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: INDIAN_DELETE_RESET });
    }
    dispatch(
      listIndians({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdIndian,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (indian) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteIndian(indian._id));
    }
  };
  console.log("called----->createindian",createIndian);
  const createHandler = () => {
        dispatch(createIndian());
  };
  return (
    <div>
      <div className="row">
        <h1>indians</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create indian
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
              {indians.map((indian) => (
                <tr key={indian._id}>
                  <td>{indian._id}</td>
                  <td>{indian.name}</td>
                  <td>{indian.price}</td>
                  <td>{indian.category}</td>
                  <td>{indian.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/indian/${indian._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(indian)}
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
                to={`/indianlist/pageNumber/${x + 1}`}
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

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createDhotis,
  deleteDhotis,
  listDhotiss,
} from "../actions/dhotisAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
  DHOTIS_CREATE_RESET,
  DHOTIS_DELETE_RESET,
} from "../constants/dhotisConstants";
import { Link } from "react-router-dom";

export default function DhotisListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const dhotisList = useSelector((state) => state.dhotisList);
  const { loading, error, dhotiss, page, pages } = dhotisList;
  const dhotisCreate = useSelector((state) => state.dhotisCreate);
  console.log("called----->dhotisCreate",dhotisCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    dhotis: createdDhotis,
  } = dhotisCreate;
  const dhotisDelete = useSelector((state) => state.dhotisDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = dhotisDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: DHOTIS_CREATE_RESET });
      navigate(`/dhotis/${createdDhotis._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: DHOTIS_DELETE_RESET });
    }
    dispatch(
      listDhotiss({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdDhotis,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (dhotis) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteDhotis(dhotis._id));
    }
  };
  console.log("called----->createDhotis",createDhotis);
  const createHandler = () => {
        dispatch(createDhotis());
  };
  return (
    <div>
      <div className="row">
        <h1>dhotiss</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create dhotis
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
              {dhotiss.map((dhotis) => (
                <tr key={dhotis._id}>
                  <td>{dhotis._id}</td>
                  <td>{dhotis.name}</td>
                  <td>{dhotis.price}</td>
                  <td>{dhotis.category}</td>
                  <td>{dhotis.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/dhotis/${dhotis._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(dhotis)}
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
                to={`/dhotislist/pageNumber/${x + 1}`}
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

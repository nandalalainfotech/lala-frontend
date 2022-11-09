import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createProduct,
  deleteProduct,
  listProducts,
} from "../actions/productAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
  PRODUCT_CREATE_RESET,
  PRODUCT_DELETE_RESET,
} from "../constants/productConstants";
import { Link } from "react-router-dom";

export default function ProductListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const pageSize = 15;
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const productCreate = useSelector((state) => state.productCreate);
  console.log("called----->productCreate",productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      navigate(`/product/${createdProduct._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(
      listProducts({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdProduct,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (product) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteProduct(product._id));
    }
  };
  console.log("called----->createProduct",createProduct);
  const createHandler = () => {
        dispatch(createProduct());
  };
  return (
    <div>
      <div className="row productsLists">
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
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  {/* <td>{product.categorygroup}</td>
                  <td>{product.categorytext}</td> */}
                  <td>{product.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        navigate(`/product/${product._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(product)}
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
            {[...Array(pages,pageSize).keys()].map((x) => (
              <Link
                className={x + 1 === page ? 'active' : ''}
                key={x + 1}
                to={`/productlist/pageNumber/${x + 1}`}
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

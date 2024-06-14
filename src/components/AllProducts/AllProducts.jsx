import { useDispatch, useSelector } from "react-redux";
import "./AllProducts.css";
import { useEffect } from "react";
import { deleteProduct, getAllProductsShop } from "../../redux/actions/product.action";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import { CiEdit } from "react-icons/ci";

function AllProducts() {
  const { products } = useSelector((state) => state.products);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProductsShop(seller._id));
  }, [dispatch, seller._id]);

  function handleDelete(id) {
    dispatch(deleteProduct(id));
    toast.success("Product deleted!")
    window.location.reload();
  }

  function handleEdit(id) {
    navigate(`/product/edit/${id}`);
  }


  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        const productId = params.row.id;
        return (
          <>
            <Link to={`/product/${productId}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "Edit",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleEdit(params.id)}>
              <CiEdit size={20} />
            </Button>
          </>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];
  products &&
    products.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "SGD " + item.price,
      });
    });

  return ( 
  <div className="allProductsGridSection">
    <DataGrid
    rows={row}
    columns={columns}
    pageSize={10}
    disableSelectionOnClick
    autoHeight
        />
    </div>
    );
}

export default AllProducts;

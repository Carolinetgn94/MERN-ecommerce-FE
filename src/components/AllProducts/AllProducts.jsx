import { useDispatch, useSelector } from "react-redux";
import "./AllProducts.css";
import { useEffect } from "react";
import { deleteProduct, getAllProductsShop } from "../../redux/actions/product.action";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { toast } from "react-toastify";

function AllProducts() {
  const { products } = useSelector((state) => state.products);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(seller._id));
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(deleteProduct(id));
    toast.success("Product deleted!")
    window.location.reload();
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
        const d = params.row.name;
        // const product_name = d.replace(/\s+/g, "-");
        return (
          <>
            <Link to={`/product/${d}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
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

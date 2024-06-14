import "./EditProduct.css";
import { useParams } from "react-router-dom";
import { Button, TextField, Select, MenuItem } from "@mui/material";
import { toast } from "react-toastify";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { categoriesData } from "../../seedData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  editProduct,
  getProductDetails,
} from "../../redux/actions/product.action";

function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, success, error } = useSelector((state) => state.product);

  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [originalImages, setOriginalImages] = useState([]);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setCategory(product.category);
      setPrice(product.price);
      setOriginalImages(product.images);
    }
  }, [product]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Product updated successfully!");
      setName("");
      setDescription("");
      setCategory("");
      setPrice("");
      setImages([]);
      setOriginalImages([]);
    }
  }, [dispatch, error, success]);

  const handleImageChange = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedForm = new FormData();
    images.forEach((image) => {
      updatedForm.append("images", image);
    });
    updatedForm.append("name", name);
    updatedForm.append("description", description);
    updatedForm.append("category", category);
    updatedForm.append("price", price);
    dispatch(editProduct(id, updatedForm));
  };

  return (
    <div className="editProductFormContainer">
      <div className="formTitle">
        <h4>Edit Product</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name<span className="required-asterisk">*</span>
        </label>
        <TextField
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />

        <label>Description</label>
        <TextField
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={4}
          margin="normal"
          placeholder="Enter your product description..."
        />

        <label>Category</label>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          margin="normal"
        >
          <MenuItem value="Choose a category">Choose Category</MenuItem>
          {categoriesData &&
            categoriesData.map((i) => (
              <MenuItem value={i.title} key={i.title}>
                {i.title}
              </MenuItem>
            ))}
        </Select>

        <label>
          Price<span className="required-asterisk">*</span>
        </label>
        <TextField
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          margin="normal"
          required
        />

        <div className="originalImages">
          {originalImages &&
            originalImages.map((image) => (
              <img src={image} key={image} alt="" className="previewImage" />
            ))}
        </div>

        <label>
          Upload Image<span className="required-asterisk">*</span>
        </label>
        <input
          type="file"
          id="upload"
          className="hidden"
          multiple
          onChange={handleImageChange}
        />
        <label htmlFor="upload" className="uploadIcon">
          <AiOutlinePlusCircle size={30} />
        </label>

        {images &&
          images.map((image) => (
            <img
              src={URL.createObjectURL(image)}
              key={image.name}
              alt=""
              className="previewImage"
            />
          ))}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="submitButton"
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default EditProduct;

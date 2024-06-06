import { useDispatch, useSelector } from "react-redux";
import "./CreateProduct.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { categoriesData } from "../../seedData";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { createProduct } from "../../redux/actions/product.action";
import { toast } from "react-toastify";

function CreateProduct() {
  const { seller } = useSelector((state) => state.seller);
  const { success = false, error = null } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();

  useEffect(() => {
    if (error) {
        toast.error(error);
      }
      if (success) {
        toast.success("Product created successfully!");
        navigate("/dashboard");
        window.location.reload();
      }
  }, [dispatch, error, success, navigate])

  function handleImageChange(e) {
    e.preventDefault();
    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newForm = new FormData();
    images.forEach((image) => {
        newForm.append("images", image);
    });
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", category);
    newForm.append("price", price);
    newForm.append("shopId", seller._id);
    dispatch(createProduct(newForm));
  }

  return (
    <div className="createProductformContainer">
      <div className="formTitle">
        <h4>Create Product listing</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputFields">
          <label>
            Product Name<span className="required-asterisk">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputFields">
          <label>Description</label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your product description..."
          ></textarea>
        </div>
        <div className="inputFields">
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Choose a category">Choose Category</option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <div className="inputFields">
          <label>
            Price<span className="required-asterisk">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="inputFields">
          <label>
            Upload Image<span className="required-asterisk">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <label htmlFor="upload">
            <AiOutlinePlusCircle size={30} />
          </label>
          {images &&
            images.map((i) => (
              <img src={URL.createObjectURL(i)} key={i} alt="" />
            ))}
        </div>
        <div>
          <button type="submit" className="submitButton">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;

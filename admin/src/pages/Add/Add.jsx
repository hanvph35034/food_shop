import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
const Add = ({url}) => {
 
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const fromData = new FormData();
    fromData.append("name", data.name);
    fromData.append("description", data.description);
    fromData.append("price", data.price);
    fromData.append("category", data.category);
    fromData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, fromData);
    if (response.data.succsess) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } 
    else {
      toast.error(response.data.message);
    }
  };
  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Up load Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </label>
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            name="name"
            type="text"
            placeholder="type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            type="text"
            name="description"
            rows="6"
            placeholder="type here"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category" id="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>

              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product - price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="20$"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;

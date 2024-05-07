import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
const List = ({url}) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.succsess) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.succsess) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };
  return (
    <div className="list add flex-col">
      <p>All food list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((i, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + i.image} alt="" />
              <p>{i.name}</p>
              <p>{i.category}</p>
              <p>{i.price}</p>
              <p className="cursor" onClick={() => removeFood(i._id)}>
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;

import React, { useEffect, useState } from "react";
import "./First.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Edit({ editData }) {
  const dating = useLocation;
  const getting_data = dating.state;
  const [data, setData] = useState({
    title: editData.title,
    body: editData.body,
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
    console.log(values);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3030/posts`)
      .then((response) => {
        console.log(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  });
  const clicking = () => {
    console.log(getting_data);
  };

  return (
    <div className="window-box">
      TITLE:
      <input
        type="text"
        placeholder="TITLE"
        className="text-field"
        name="title"
        value={data.title}
        onChange={handleInput}
      />
      <br />
      BODY:
      <input
        type="text"
        placeholder="BODY"
        className="text-field"
        name="body"
        value={data.body}
        onChange={handleInput}
      />
      <br />
      <button className="button-1" onClick={clicking}>
        UPDATE
      </button>
    </div>
  );
}

export default Edit;

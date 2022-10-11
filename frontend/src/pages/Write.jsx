import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import moment from "moment";

export default function Write() {
  const state = useLocation().state;

  const [title, setTitle] = useState(state?.title || "");
  const [description, setDescription] = useState(state?.description || "");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(state?.category || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        `${import.meta.env.VITE_API}/upload`,
        formData
      );
      // console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(res.err);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.patch(
            `${import.meta.env.VITE_API}/posts/${state.id}`,
            {
              title,
              description,
              category,
              img: file ? imgUrl : "",
            },
            {
              withCredentials: true,
              credentials: "include",
            }
          )
        : await axios.post(
            `${import.meta.env.VITE_API}/posts`,
            {
              title,
              description,
              category,
              img: file ? imgUrl : "",
              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            },
            {
              withCredentials: true,
              credentials: "include",
            }
          );
          navigate("/");
    } catch (err) {
      console.log(res.err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            className="editor"
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            type="file"
            id="file"
            className="upload"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file" className="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="category">
            <input
              type="radio"
              name="category"
              value="art"
              checked={category === "art"}
              id="art"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="art">ART</label>
          </div>
          <div className="category">
            <input
              type="radio"
              name="category"
              value="science"
              checked={category === "science"}
              id="science"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="category">
            <input
              type="radio"
              name="category"
              value="technology"
              checked={category === "technology"}
              id="technology"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="category">
            <input
              type="radio"
              name="category"
              value="cinema"
              checked={category === "cinema"}
              id="cinema"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="category">
            <input
              type="radio"
              name="category"
              value="design"
              checked={category === "design"}
              id="design"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="category">
            <input
              type="radio"
              name="category"
              value="food"
              checked={category === "food"}
              id="food"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
}

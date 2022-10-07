import React, { useState, useEffect, useContext } from "react";
import Menu from "../components/Menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

export default function Single() {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postsId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API}/posts/${postsId}`
        );
        setPost(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postsId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_API}/posts/${postsId}`, {
        withCredentials: true,
        credentials: "include",
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="postImg" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="imgUser" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=1`}>
                <img src={Edit} alt="imgEdit" />
              </Link>
              <img src={Delete} alt="imgDelete" onClick={handleDelete} />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.description}
      </div>
      <Menu category={post.category} />
    </div>
  );
}

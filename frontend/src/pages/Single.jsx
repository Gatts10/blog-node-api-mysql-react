import React from "react";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";

export default function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="postImg"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="imgUser"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=1`}>
              <img src={Edit} alt="imgEdit" />
            </Link>
            <img src={Delete} alt="imgDelete" />
          </div>
        </div>
        <h1>Magna velit cillum aute eu consequat sunt nostrud.</h1>
        <p>
          Cillum laboris reprehenderit ea sint quis ut commodo cillum mollit
          occaecat est sit. Quis nulla et minim reprehenderit anim ad Lorem
          ullamco duis dolore. Eu consequat occaecat nostrud aliquip id magna
          dolor consectetur cupidatat. Reprehenderit sit enim et laboris cillum.
          Nulla incididunt ut enim magna in anim voluptate voluptate anim.
          <br />
          <br />
          Aliquip Lorem laboris qui fugiat. Cillum elit nostrud id deserunt
          incididunt sit deserunt esse veniam aliquip. Eiusmod nostrud deserunt
          elit minim consequat deserunt est ad deserunt. Reprehenderit fugiat
          sint est nisi veniam veniam laborum irure ut Lorem reprehenderit est
          non id.
          <br />
          <br />
          Commodo deserunt incididunt excepteur occaecat esse cupidatat Lorem
          cillum sit eiusmod. Ipsum labore ex anim reprehenderit qui labore.
          Officia proident esse enim in in amet.
          <br />
          <br />
          Dolore aute culpa aute et enim do deserunt consequat. Quis ipsum ad
          nostrud mollit est. Reprehenderit veniam excepteur in nisi ad deserunt
          ad esse. Dolore laborum sit qui enim ipsum commodo occaecat.
        </p>
      </div>
      <Menu />
    </div>
  );
}

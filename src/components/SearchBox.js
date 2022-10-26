import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBox(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler} >
      <div className="row">
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input type="text" class="form-control" placeholder="Search for Products,brands and more" onChange={(e)=>setName(e.target.value)}></input>
        </div>


        {/* <input
          type="text"
          placeholder="Search for Products,brands and more"
          onChange={(e) => setName(e.target.value)}

        ></input> */}
        {/* <button className="primary" type="submit">
          <i className="fa fa-search"></i>
        </button> */}
      </div>
    </form>
  );
}

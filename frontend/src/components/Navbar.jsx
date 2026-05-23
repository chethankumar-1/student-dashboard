import React from "react";

import "../styles/navbar.scss";

function Navbar({ title }) {

  return (

    <div className="navbar">

      <h1>{title}</h1>

    </div>
  );
}

export default Navbar;
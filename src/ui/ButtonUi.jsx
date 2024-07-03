"use client";
import React from "react";
import { Link } from "react-scroll";

function ButtonUi() {
  function handleSetActive(to) {
    console.log(`Link to ${to} is now active`);
  }
  return (
    <div>
      {" "}
      <Link
        activeClass="active"
        to="test1"
        spy={true}
        smooth={true}
        offset={50}
        duration={1000}
        onSetActive={handleSetActive}
      >
        Купить билет
      </Link>
    </div>
  );
}

export default ButtonUi;

import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from './logo.png'

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav>
      <img className="logo" src={logo}alt="" srcset="" />

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
        <FaShoppingCart />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;

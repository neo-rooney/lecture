import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { login } from "../api/firebase";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b border-gray-300 p-4">
      <Link className="flex items-center text-4xl text-brand" to="/">
        <FiShoppingBag />
        <h1 className="font-semibold">Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <BsFillPencilFill />
        </Link>
        <button onClick={login}>Login</button>
      </nav>
    </header>
  );
}

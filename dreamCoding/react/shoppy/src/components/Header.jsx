import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b border-zinc-200 py-3">
      <Link className="flex items-center text-4xl" to="/">
        <FiShoppingBag />
        <h1 className="font-semibold">Shoppy</h1>
      </Link>
      <div className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new">
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </div>
    </header>
  );
}

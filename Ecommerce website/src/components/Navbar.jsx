// src/components/Navbar.jsx

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from "./cartContext";
import { useWishlist } from "./wishlistContext";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

          .navbar-custom {
            background: #fff;
            box-shadow: none;
            border: none;
            padding: 0.5rem 0;
          }
          .navbar-section {
            display: flex;
            align-items: center;
          }
          .navbar-brand-custom {
            font-family: 'Playfair Display', serif;
            font-size: 1.4rem;
            font-weight: bold;
            color: #000;
            margin-right: 2rem;
            letter-spacing: 1px;
            text-decoration: none;
          }
          .navbar-center {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2.5rem;
          }
          .navbar-menu {
            display: flex;
            gap: 2rem;
            align-items: center;
          }
          .nav-link-custom {
            color: #222;
            font-size: 1rem;
            font-weight: 400;
            text-decoration: none;
            transition: color 0.2s;
          }
          .nav-link-custom.active, .nav-link-custom:hover {
            text-decoration: underline;
            color: #000;
          }
          .navbar-search {
            display: flex;
            align-items: center;
            background: #f5f5f5;
            border-radius: 6px;
            padding: 0.3rem 0.8rem;
            margin-left: 2rem;
          }
          .navbar-search input {
            border: none;
            background: transparent;
            outline: none;
            font-size: 0.95rem;
            width: 180px;
            padding: 0.2rem 0.5rem;
          }
          .navbar-search i {
            color: #888;
            font-size: 1rem;
            cursor: pointer;
          }
          .navbar-cart {
            margin-left: 2rem;
            position: relative;
          }
          .navbar-cart i {
            font-size: 1.4rem;
            color: #222;
          }
          .navbar-cart .badge {
            position: absolute;
            top: -8px;
            right: -10px;
            font-size: 0.7rem;
            background: #dc3545;
            color: #fff;
            border-radius: 50%;
            padding: 2px 6px;
          }
        `}
      </style>
      <nav className="navbar navbar-custom">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Left: Brand */}
          <div className="navbar-section">
            <Link className="navbar-brand-custom" to="/">
              Exclusive
            </Link>
          </div>
          {/* Center: Menu + Search */}
          <div className="navbar-center">
            <div className="navbar-menu">
              <Link className="nav-link-custom" to="/">Home</Link>
              <Link className="nav-link-custom" to="/contact">Contact</Link>
              <Link className="nav-link-custom" to="/about">About</Link>
              <Link className="nav-link-custom" to="/signup">Sign Up</Link>
            </div>
            <div className="navbar-search">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <i className="bi bi-search"></i>
            </div>
          </div>
          {/* Right: Cart */}
          <div className="navbar-section">
          <Link to="/wishlist" className="position-relative text-decoration-none">
                <i className="bi bi-heart fs-4 text-black"></i>
                {wishlist.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {wishlist.length}
                  </span>
                )}
            </Link>
            <Link to="/cart" className="navbar-cart">
              <i className="bi bi-cart"></i>
              {cart.length > 0 && (
                <span className="badge">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

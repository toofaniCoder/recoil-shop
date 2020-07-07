import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <i class="fas fa-store fa-2x"></i>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link to="/addProduct" class="button is-primary" href="#">
                  <strong>Add Product</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

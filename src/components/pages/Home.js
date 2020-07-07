import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Products from "../products/Products";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="has-background-light">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-3">
                <div className="box">
                  <Sidebar />
                </div>
              </div>
              <div className="column is-9">
                <Products />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

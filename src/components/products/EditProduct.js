import React, { useState, useEffect } from "react";
import { productState } from "../../recoil/productRecoil";
import { useRecoilState } from "recoil";
import { useHistory, useParams } from "react-router-dom";

import shortid from "shortid";

const EditProduct = (props) => {
  let { id } = useParams();
  let history = useHistory();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");
  const [type, setType] = useState("");

  const [products, setProducts] = useRecoilState(productState);

  const onSubmit = (e) => {
    e.preventDefault();
    const new_product = {
      name,
      price,
      picture,
      type,
      id,
    };
    // setProducts((oldProducts) => [new_product, ...oldProducts]);
    const updated_products = products.map((product) =>
      product.id == id ? new_product : product
    );
    setProducts(updated_products);
    history.push("/");
  };

  useEffect(() => {
    // load product
    const product = products.find((product) => product.id == id);
    setName(product.name);
    setPrice(product.price);
    setPicture(product.picture);
    setType(product.type);
  }, []);
  return (
    <div className="container">
      <div className="section">
        <div class="card">
          <div className="card-header">
            <p className="card-header-title">Edit A product</p>
          </div>
          <div class="card-content">
            <form onSubmit={onSubmit}>
              <div className="columns">
                <div className="column is-3">
                  <input
                    class="input"
                    type="text"
                    placeholder="Enter Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="column is-3">
                  <input
                    class="input"
                    type="text"
                    placeholder="Enter Product Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="column is-3">
                  <input
                    class="input"
                    type="text"
                    placeholder="Product Picture"
                    value={picture}
                    onChange={(e) => setPicture(e.target.value)}
                  />
                </div>
                <div className="column is-3">
                  <div class="select is-fullwidth">
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option>Select Product Type</option>
                      <option value="fruit">fruit</option>
                      <option value="vegetables">vegetables</option>
                      <option value="beverages">beverages</option>
                      <option value="meals">meals</option>
                      <option value="utensils">utensils</option>
                    </select>
                  </div>
                </div>
                <div className="column is-3"></div>
              </div>
              <button className="button is-primary">Update Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;

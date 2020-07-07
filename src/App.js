import React from "react";
import "./styles/App.css";
import Home from "./components/pages/Home";
import AddProduct from "./components/products/AddProduct";
import EditProduct from "./components/products/EditProduct";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addProduct" component={AddProduct} />
        <Route exact path="/editProduct/:id" component={EditProduct} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

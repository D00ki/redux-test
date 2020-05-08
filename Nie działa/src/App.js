import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./store/Store.js";
import Menu from "./menu";
import Order from "./Order";
import OrderClass from "./OrderClass";
function App() {
  return (
    <Provider store={Store}>
      <div>o apka</div>
      <Menu />
      <Order />
      <OrderClass />
    </Provider>
  );
}

export default App;

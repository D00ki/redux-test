import React, { Component } from "react";
import { connect } from "react-redux";

class Order extends Component {
  render() {
    const { order, test } = this.props;
    return (
      <div>
        <h1>RCE</h1>

        {order.map((element) => (
          <p>{element}</p>
        ))}
        <p>{test}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    order: state.reducer.order,
  };
};
const OrderClass = connect(mapStateToProps)(Order);
export default OrderClass;

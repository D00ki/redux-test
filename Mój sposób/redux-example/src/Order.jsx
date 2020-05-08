import React from "react";
import { useSelector } from "react-redux";
export default function Order() {
  const order = useSelector((a) => a.reducer.order);
  return (
    <div>
      <h1>RFC</h1>
      {order.map((element) => (
        <p key={element}>{element}</p>
      ))}
    </div>
  );
}

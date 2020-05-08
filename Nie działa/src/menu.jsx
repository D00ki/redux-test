import React, { useEffect } from "react";
import { AddToOrder } from "./store/reducer";

export default function Menu() {
  const arr = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh"];
  useEffect(() => {
    arr.forEach((element) => {
      AddToOrder(element);
    });
  });

  return <div>menua</div>;
}

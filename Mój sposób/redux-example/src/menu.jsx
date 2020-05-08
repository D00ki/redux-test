import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddToOrder } from "./store/reducer";

export default function Menu() {
  const dispatch = useDispatch();
  const arr = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh"];
  useEffect(() => {
    arr.forEach((element) => {
      AddToOrder(element, dispatch);
    });
  });

  return <div>menua</div>;
}

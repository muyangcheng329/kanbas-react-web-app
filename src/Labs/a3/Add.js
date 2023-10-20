import React from "react";
import { useParams } from "react-router-dom";
function Add() {
  const { a, b } = useParams();
  return (
    <div>
      <h2>Add Path Parameters</h2>
      {3} + {4} = {parseInt(3) + parseInt(4)}
    </div>
  );
}
export default Add;
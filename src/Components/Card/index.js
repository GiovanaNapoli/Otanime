import React from "react";
import "./style.css";

export default function Card() {
  return (
    <div className="card borderRotation">
      <img src="https://images.unsplash.com/photo-1605310868366-50faea41f618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
      <div className="card-body">
        <h1 className="card-title">titulo</h1>
      </div>
    </div>
  );
}

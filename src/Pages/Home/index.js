import React from "react";
import "../../Global/style.css";

import Header from "../../Components/Header/HeaderIndex";
import Menu from "../../Components/Menu/index";
import Card from "../../Components/Card/index";

export default function App() {
  return (
    <div>
      <Header />
      <Menu />
      <main className="container">
        <div className="row">
          <div className="col-lg">
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
}

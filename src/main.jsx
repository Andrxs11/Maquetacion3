import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ComponenteUno from "./ComponenteUno";
import ComponenteDos from "./ComponenteDos";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container">
      <ComponenteUno className="header" />
      <div className="content">
        <ComponenteDos className="sidebar" />
        <div className="main-container">
          <ComponenteDos className="main" />
          <div className="middle">
            <ComponenteDos className="box" />
            <ComponenteDos className="box" />
          </div>
          <div className="bottom">
            <ComponenteDos className="box" />
            <ComponenteDos className="box" />
            <ComponenteDos className="box" />
          </div>
        </div>
      </div>
    </div>
  </StrictMode>
);
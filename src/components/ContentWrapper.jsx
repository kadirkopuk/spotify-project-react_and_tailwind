import React from "react";
import { Outlet } from "react-router-dom";
import BottomBar from "./BottomBar";
import Content from "./Content";
import Sidebar from "./Sidebar";

function ContentWrapper() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div style={{ width: "100%" }}>
          <Content />
          <Outlet />
        </div>
      </div>
      <BottomBar />
    </>
  );
}

export default ContentWrapper;

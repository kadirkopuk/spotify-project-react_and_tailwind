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
        <div>
          <Content />
          <Outlet />
        </div>
      </div>
      <BottomBar />
    </>
  );
}

export default ContentWrapper;

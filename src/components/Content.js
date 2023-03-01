import Navbar from "components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "views/Home";
import Search from "views/Search";

function Content() {
  return (
    <main className="flex-auto">
      <Navbar />
    </main>
  );
}

export default Content;
// <div className="wrapper">
//   <Navbar />
// </div>

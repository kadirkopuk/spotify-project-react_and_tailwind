import Sidebar from "./components/Sidebar";
import BottomBar from "./components/BottomBar";
import Content from "./components/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "views/Home";
import ContentWrapper from "components/ContentWrapper";
import Search from "views/Search";
import Collection from "views/Collection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ContentWrapper />}>
          <Route element={<Home />} path="*" />
          <Route element={<Search />} path="/search" />
          <Route element={<Collection />} path="/collection" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

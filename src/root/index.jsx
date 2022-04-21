import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddTravel from "../pages/AddTravel";
import Api from "../pages/Api";
import EditTravel from "../pages/EditTravel";
import Home from "../pages/Home";
import ViewTravel from "../pages/ViewTravel";

export const Root = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="raw">
          <div className="col-lg-8 offset-lg-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddTravel />} />
              <Route path="/api" element={<Api />} />
              <Route path="/api/swager" element={<Api />} />
              <Route path="/api/table" element={<Api />} />
              <Route path="/edit:id" element={<EditTravel />} />
              <Route path="/view:userId" element={<ViewTravel />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;

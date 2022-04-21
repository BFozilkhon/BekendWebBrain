import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Swager from "../../components/Swager";
import Table from "../../components/Table";

export const Api = () => {
  const location = useLocation();
  return (
    <>
      <div className="d-flex mt-5">
        <NavLink to={"/api/swager"}>
          <h1 className="text pb-2">Swager</h1>
        </NavLink>
        <NavLink className="mx-5" to={"/api/table"}>
          <h1 className="text pb-2">Table</h1>
        </NavLink>
      </div>
      {location.pathname.split("/")[2] === "swager" ? <Swager /> : <Table />}
    </>
  );
};

export default Api;

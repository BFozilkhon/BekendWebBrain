import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import copy from "copy-text-to-clipboard";

export const Table = () => {
  const codeString = `
  import React, { useEffect, useState } from "react";
  import axios from "axios";

  export const Home = () => {
     const [data, setData] = useState([]);
     const [loading, setLoading] = useState("loading");
     const { REACT_APP_BASE_URL } = process.env;

     const onFetching = async () => {
       const datas = await axios.get(REACT_APP_BASE_URL);
       setData(datas.data.travels);
       setLoading(datas.data.message);
     }
     return (
         <h1>
           {data.map...}
         </h1>
     )
  }

  `;
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Method</th>
            <th scope="col">Router</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-primary ">
            <th scope="row">1</th>
            <td>GET</td>
            <td>/</td>
            <td>All News</td>
            <td>
              <button
                className="btn btn-primary cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{ width: 120 }}
              >
                View
              </button>
            </td>
          </tr>
          <tr className="table-primary">
            <th scope="row">2</th>
            <td>GET</td>
            <td>/:id</td>
            <td>One News find id</td>
            <td>
              <button
                className="btn btn-primary cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{ width: 120 }}
              >
                View
              </button>
            </td>
          </tr>
          <tr className="table-primary">
            <th scope="row">2</th>
            <td>GET</td>
            <td>/search/:text</td>
            <td>Search News</td>
            <td>
              <button
                className="btn btn-primary cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{ width: 120 }}
              >
                View
              </button>
            </td>
          </tr>
          <tr className="table-info">
            <th scope="row">3</th>
            <td>POST</td>
            <td>/add</td>
            <td>Add News</td>
            <td>
              <button
                className="btn btn-primary cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{ width: 120 }}
              >
                View
              </button>
            </td>
          </tr>
          <tr className="table-warning">
            <th scope="row">4</th>
            <td>PUT</td>
            <td>/:id</td>
            <td>Update News</td>
            <td>
              <button
                className="btn btn-primary cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{ width: 120 }}
              >
                View
              </button>
            </td>
          </tr>
          <tr className="table-danger">
            <th scope="row">5</th>
            <td>DELETE</td>
            <td>/:id</td>
            <td>Remove News</td>
            <td>
              <button
                className="btn btn-primary cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{ width: 120 }}
              >
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Fetching All Data
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <SyntaxHighlighter language="javascript" style={docco}>
                {codeString}
              </SyntaxHighlighter>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => copy(codeString)}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;

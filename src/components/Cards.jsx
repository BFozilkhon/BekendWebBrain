import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Cards = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState("loading");
  const { REACT_APP_BASE_URL } = process.env;

  const onFetching = async () => {
    const datas = await axios.get(`${REACT_APP_BASE_URL}`);
    setData(datas.data.travels);
    setLoading(datas.data.message);
  };

  const getDelete = async (id) => {
    await axios.delete(`${REACT_APP_BASE_URL}/${id}`);
    onFetching();
  };

 const SecondType = async() => {
  const datas = await axios.get(`${REACT_APP_BASE_URL}/search/${name}`)
  setLoading(datas.data.message)
  if(name !== ''){
    setData(datas.data.travel)
   }else{
     onFetching()
   }
 }


  const getClicked = () => {
   SecondType()
  }

  useEffect(() => {
    onFetching();
  }, []);
  // fetch()
 
  const onKey = (e) => {
    if(e.key == 'Enter'){
      SecondType()
    }
  }

  return (
    <>
     <nav className="navbar ">
        <div className="container-fluid">
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onKeyDown={onKey}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={getClicked} className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </nav>
      {loading === "loading" ? (
        <div className="d-flex justify-content-center my-5">
          <div
            style={{ width: "3rem", height: "3rem" }}
            className="spinner-border text-primary"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
       data.length == 0 ? <h1>Malumot topilmadi</h1>: data?.map(({ title, image, descr, _id }) => {
          return (
            <div key={_id} className="card mb-3 mt-3">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{descr}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
              <div className="df">
                <Link to={`/edit:${_id}`}>
                  <button type="button" className=" m-1 w-20 btn btn-primary">
                    Upadate
                  </button>
                </Link>
                <Link to={`view:${_id}`}>
                  <button type="button" className=" m-1 w-20 btn btn-warning">
                    View
                  </button>
                </Link>
                <button
                  onClick={() => getDelete(_id)}
                  type="button"
                  className="m-1 w-20 btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Cards;

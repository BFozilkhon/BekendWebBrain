import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link, useParams } from "react-router-dom";
export const ViewTravel = () => {
  const [data, setData] = useState({})
  const {userId} = useParams()
  
  const { REACT_APP_BASE_URL } = process.env;


  const onFetching = async () => { 
    const datas = await axios.get(`${REACT_APP_BASE_URL}/${userId.replace(':', '')}`) 
    setData(datas.data.travel)
  }


  useEffect(()=> {
      onFetching()
  },[])


    

  return (
    <>
    <div className="card mb-3 mt-3">
      <img
        src={data.image}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">
          {data.descr}
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
      <div className="df">

      <Link to={'/'}>
      <button type="button" className="btn btn-dark">Back</button>
        </Link>
      </div>
    </div>
        </>
  );
};

export default ViewTravel;

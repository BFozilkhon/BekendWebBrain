import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";

const { REACT_APP_BASE_URL } = process.env;
const Home = () => {
  const [name, setName] = useState('')


    // useEffect(()=> {
    //   getClicked()
    // },[])

  return (
    <>
     
      <Cards />
    </>
  );
};

export default Home;

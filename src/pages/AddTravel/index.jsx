import axios from "axios";
import React, {useState } from "react";
import {useNavigate} from 'react-router-dom'

const AddTravel = () => {
  const [inputData, setInputData] = useState({
    title:'',
    image: '',
    descr: ''
  })
  const navigate = useNavigate()
  const { REACT_APP_BASE_URL } = process.env;

  const handleChange = (e) => {
    setInputData({...inputData, [e.target.name]: e.target.value })
  }

  const addBooks = async (e) => {
    e.preventDefault()
     await axios.post(`${REACT_APP_BASE_URL}/add`, {
      title: inputData.title, 
      image: inputData.image,
      descr: inputData.descr,
     })
     navigate('/')
  }


  return (
    <form onSubmit={addBooks}>
  <div className="mb-3 mt-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" onChange={handleChange} name='title' className="form-control" id="title"/>
  </div>
  <div className="mb-3">
    <label htmlFor="descr" className="form-label">Description</label>
    <input type="text" onChange={handleChange} name='descr' className="form-control" id="descr"/>
  </div>
  <div className="mb-3">
    <label htmlFor="image" className="form-label">Image URL</label>
    <input type="text" onChange={handleChange} name='image' className="form-control" id="image"/>
  </div>
  <button type="submit"  className="btn btn-primary">Add News</button>
</form>
  )
};

export default AddTravel;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditTravel = () => {
   const [title, setTitle] = useState('')
   const [descr, setDescr] = useState('')
   const [image, setImage] = useState('')
  
   const navigate = useNavigate()
   const {id} = useParams()

   const { REACT_APP_BASE_URL } = process.env;

   const getOneBooks = async() => {
     const { data } = await axios.get(`${REACT_APP_BASE_URL}/${id.replace(':', '')}`)
     setTitle(data.travel.title)
     setDescr(data.travel.descr)
     setImage(data.travel.image)
   }

   const getEdit = async (e) => {
     e.preventDefault()
     await axios.put(`${REACT_APP_BASE_URL}/${id.replace(':', '')}`, {
       title,
       image,
       descr
     })

     navigate('/')
   }

   useEffect(()=> {
     getOneBooks()
    }, [])

  return (
    <form onSubmit={getEdit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input  type="text" className="form-control" id="title" aria-describedby="emailHelp" value={title} onChange={(e) => setTitle(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label htmlFor="descr" className="form-label">Description</label>
      <input onChange={(e) => setDescr(e.target.value)} type="text" className="form-control" id="descr" value={descr}/>
    </div>
    <div className="mb-3">
      <label htmlFor="image" className="form-label">Image URL</label>
      <input onChange={(e) => setImage(e.target.value)} type="text" className="form-control" id="image" value={image}/>
    </div>
    <button type="submit" className="btn btn-primary">Update News</button>
  </form>
  )
};

export default EditTravel;

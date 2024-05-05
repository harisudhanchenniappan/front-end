
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Link, Outlet } from 'react-router-dom';

const UrlShort = () => {
  const [data,setData]=useState({
    longUrl:"",
    hashValue:""
})

const handleChange=async(event)=>{
    event.preventDefault();
    setData({
        ...data,
        [event.target.name]:event.target.value

    })
}

const handleCreate=async(event)=>{
    event.preventDefault();
    await axios.post("https://backend-5-bk0v.onrender.com/createShortUrl",{
        longUrl:data.longUrl,
        hashValue:data.hashValue
    }).then(()=>alert('url shortened successfully'))
}
return (
<div>
  <Link to="/"><a href="">home</a></Link>
     <form onChange={handleChange} >
  <div className="mb-3">
        <label for="longUrl" className="form-label">long-url</label>
        <input type="text" className="form-control" name="longUrl" aria-describedby="emailHelp" required/>            
      </div>


      
      <div className="mb-3">
        <label for="hashValue" className="form-label">hashValue</label>
        <input type="password" className="form-control" name="hashValue" required/>
      </div>
    
      <button type="submit" className="btn btn-primary"  onClick={handleCreate}>submit</button>
<p>The shortened url is  </p>
<a href={data.longUrl}>{`www.urlShortner/${data.hashValue}`}</a>
</form>
</div>
)
}
export default UrlShort
import React, { useState,useEffect } from 'react'
import bcryptjs from "bcryptjs-react";
import axios from 'axios'
import {Link, Outlet } from 'react-router-dom';


const Signup = () => {
  const [userForm,setUserForm]=useState({
    username:"",
    email:"",
    password:""
  })
  const [users,setUsers]=useState([])
  /*useEffect(()=>{
      axios.get("https://forgot-password-1-053b.onrender.com/users").then(set=>setUsers(set.data))
  },[])*/

  const handleChange=(event)=>{
    
   setUserForm({
      ...userForm,
      [event.target.name]:event.target.value
    })
    //console.log(userForm)
  }

const handleNewUser=async(event)=>{
  event.preventDefault();
 const users1= await axios.get("https://backend-5-bk0v.onrender.com/users").then(set=>setUsers(set.data))
  console.log(users1)
  const user1= await users.filter(user=>user.username==userForm.username)
  //const hashPassword=await bcryptjs.hash(userForm.password,0)
  if(!user1.length){
  if(userForm.username&&userForm.email&&userForm.password)
  axios.post("https://backend-5-bk0v.onrender.com/createUser",{
  username:userForm.username,
  email:userForm.email,
  password:userForm.password
  }).then((res)=>alert('user created successfully!'))
 }
  else
  alert('user already exist')
}


  return (
    <div>
      <form onChange={handleChange}>
      <div className="mb-3">
            <label for="username" className="form-label">username</label>
            <input type="text" className="form-control" name="username" aria-describedby="emailHelp" required/>            
          </div>


          <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" aria-describedby="emailHelp" required/>            
          </div>


          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" required/>
          </div>
        
          <button type="submit" className="btn btn-primary"  onClick={handleNewUser}>Submit</button>
</form>
<Link to='/'>go to login</Link>
    </div>
  )
}

export default Signup
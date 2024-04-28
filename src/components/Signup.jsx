import React, { useState,useEffect } from 'react'
import bcryptjs from "bcryptjs-react";
import axios from 'axios'

const Signup = () => {
  const [userForm,setUserForm]=useState({
    username:"",
    email:"",
    password:""
  })
  const [users,setUsers]=useState([])
  useEffect(()=>{
      axios.get("http://localhost:4001/users").then(set=>setUsers(set.data))
  },[])

  const handleChange=(event)=>{
    
   setUserForm({
      ...userForm,
      [event.target.name]:event.target.value
    })
    //console.log(userForm)
  }

const handleNewUser=async(event)=>{
  event.preventDefault();
  const user1= users.filter(user=>user.username==userForm.username)
  const hashPassword=await bcryptjs.hash(userForm.password,0)
  if(!user1.length){
  if(userForm.username&&userForm.email&&userForm.password)
  axios.post("http://localhost:4001/createUser",{
  username:userForm.username,
  email:userForm.email,
  password:hashPassword
  }).then((res)=>console.log(res.data))
  console.log(hashPassword);}
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
    </div>
  )
}

export default Signup
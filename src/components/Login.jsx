import axios from 'axios';
import React, { useState } from 'react'
import bcryptjs from "bcryptjs-react";
import {Link, Outlet } from 'react-router-dom';

const Login = () => {
  const [token,setToken]=useState("")
  localStorage.setItem("userToken","")
  //const token=localStorage.getItem("userToken")

  const [logged,setLogged] =useState(false)

  const [loginForm,setLoginForm]=useState({
    username:'',
    password:''  })

    const [fpData,setFpData]=useState('')

const handleChange=(event)=>{
  event.preventDefault();
  setLoginForm({
    ...loginForm,
    [event.target.name]:event.target.value,
  })
}

const handleLogin=async (event)=>{
  event.preventDefault();
  //const hashPassword=await bcryptjs.hash(loginForm.password,0)
  
 const response= await axios.get(`https://backend-5-bk0v.onrender.com/login?username=${loginForm.username}&password=${loginForm.password}`)
console.log(response);
if(response.data.length){
setLogged(true)
await localStorage.setItem("userToken","efeqf")
await setToken(localStorage.getItem("userToken"))
}
else
alert('invalid credentials')
}

const handleLogout=()=>{
  setLogged(false)
  setToken("")
}

  return (
    <div>
        <form onChange={handleChange} style={logged?{display:"none"}:{display:"block"}}>
      <div className="mb-3">
            <label for="username" className="form-label">username</label>
            <input type="text" className="form-control" name="username" aria-describedby="emailHelp" required/>            
          </div>


          
          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" required/>
          </div>
        
          <button type="submit" className="btn btn-primary"  onClick={handleLogin}>login</button>
</form>
<button type="submit" className="btn btn-primary" style={token?{display:"block",margin:"10px"}:{display:"none"}} onClick={handleLogout}>logout</button>
<Link to='/signup' className='lii'><button style={token?{display:"none",margin:"10px"}:{display:"block",margin:"10px"}}>signup</button></Link>
<Link to='/forgotPassword' className='lii'><button style={token?{display:"block",margin:"10px"}:{display:"none"}}>forgot password</button></Link>
<Link to='/shortUrl' className='lii'><button style={token?{display:"block",margin:"10px"}:{display:"none"}}>url shortner</button></Link>
<Link to='/users' className='lii'><button style={token?{display:"block",margin:"10px"}:{display:"none"}}>list of short urls</button></Link>
<Outlet />
    </div>
  )
}

export default Login
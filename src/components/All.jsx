import React, { useState } from 'react'
import { Link,Outlet } from 'react-router-dom'

const All = () => {
  const [token,setToken]=useState(localStorage.getItem("userToken"))
  console.log(token)
  const handleLogout=()=>{
    setToken("")
  }
  return (
    <div>
        <button type="submit" className="btn btn-primary" style={token?{display:"block",margin:"10px"}:{display:"none"}} onClick={handleLogout}>logout</button>
<Link to='/signup' className='lii'><button style={token?{display:"none",margin:"10px"}:{display:"block",margin:"10px"}}>signup</button></Link>
<Link to='/forgotPassword' className='lii'><button style={token?{display:"block",margin:"10px"}:{display:"none"}}>forgot password</button></Link>
<Link to='/shortUrl' className='lii'><button style={token?{display:"block",margin:"10px"}:{display:"none"}}>url shortner</button></Link>
<Link to='/users' className='lii'><button style={token?{display:"block",margin:"10px"}:{display:"none"}}>list of short urls</button></Link>
<Outlet />
    </div>
  )
}

export default All
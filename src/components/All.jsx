import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const All = () => {
  return (
    <div>
        <div id='nav' style={{textAlign:"center",display:"flex", padding:"10px"}}>
      <Link to='/' className='lii'><h3 style={{margin:"10px"}}>all</h3></Link>
      <Link to='/users' className='lii'><h3 style={{margin:"10px"}}>users</h3></Link>
      <Link to='/signup' className='lii'><h3 style={{margin:"10px"}}>signup</h3></Link>
      <Link to='/forgotPassword' className='lii'><h3 style={{margin:"10px"}}>forgot password</h3></Link>
             
    </div>
    <Outlet />
    </div>
  )
}

export default All
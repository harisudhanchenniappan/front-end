import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const All = () => {
  return (
    <div>
        <div id='nav'>
      <Link to='/' className='lii'><h3>all</h3></Link>
      <Link to='/users' className='lii'><h3>users</h3></Link>
      <Link to='/signup' className='lii'><h3>signup</h3></Link>
      <Link to='/forgotPassword' className='lii'><h3>forgot password</h3></Link>
             
    </div>
    <Outlet />
    </div>
  )
}

export default All
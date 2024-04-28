import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Users = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://forgot-password-1-053b.onrender.com/users").then(set=>setUsers(set.data))
    },[])
    
    
  return (
    <div>
        {
            users.map(user=><ul><li>name:{user.username} ----  password: {user.password}</li></ul>)
        }
    </div>
  )
}

export default Users
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Users = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4001/users").then(set=>setUsers(set.data))
    },[])
    
    
  return (
    <div>
        {
            users.map(user=><ul><li>{user.username}   {user.email}</li></ul>)
        }
    </div>
  )
}

export default Users
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Users = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://backend-5-bk0v.onrender.com/urls").then(set=>setUsers(set.data))
    },[])
    
    
  return (
    <div>
      <p>List of Short url's</p>
        {
            users.map(user=><ul><li><a href={user.longUrl}>{user.shortUrl}</a></li></ul>)
        }
    </div>
  )
}

export default Users
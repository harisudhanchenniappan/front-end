import React, { useState,useEffect } from 'react'
import axios from 'axios'
import bcryptjs from "bcryptjs-react";

const Forgot = () => {
    const [name,setName]=useState({
        username:'',
        email:'',
        randomString:'',
        id:''
    })

    const [userVerified,setUserVerified]=useState(false)
    const [hide,setHide]=useState(true)

    let [otpId,setOtpId]=useState(0)
    const [otp,setOtp]=useState('')
    const [fpData,setFpData]=useState('')
const [userExist,setUserExist]=useState(false)

    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://forgot-password-1-053b.onrender.com/users").then(set=>setUsers(set.data))
    },[])

    const handleChange=(event)=>{
        event.preventDefault();
        setName({
            ...name,
            [event.target.name]:event.target.value
        })    
    };

    const handleCheckUser=async (event)=>{
        event.preventDefault();
        await setOtpId(Math.floor(Math.random()*10000000))
   await console.log(otpId);

        console.log(name)
       const user1= users.filter(user=>user.username==name.username)
       
       if(user1.length)
       {console.log(user1[0]);
    setUserExist(!userExist)}
    else{
    alert("user not found")
    console.log('user not found');}
   
    }


    const handleExistUser=async (event)=>{
        event.preventDefault();
        const randomString=await Math.floor(Math.random()*10000)
       await axios.post("https://forgot-password-1-053b.onrender.com/forgotPassword",{
            ...name,
            randomString:`${randomString}`,
            id:`${otpId}`,
        }).then((dbres)=>{console.log(dbres.data.randomString)
        alert(dbres.data.randomString)
        })
       
        setUserExist(!userExist)
        setHide(!hide)
        await axios.get("https://forgot-password-1-053b.onrender.com/verifyOtp").then((dbres)=>setFpData(dbres.data))
        console.log(fpData)

       /* axios.post("http://localhost:4001/sendMail",{
            ...name,
            randomString:`${randomString}`,
            id:`${otpId}`,
        }).then(()=>console.log('mail sent')).catch('mail not sent')*/
    }

    const handleOtpChange=(event)=>{
        event.preventDefault();
        setOtp(event.target.value)
        console.log(otp);
    }

    const verifyOtp=async(event)=>{
        event.preventDefault();
        await axios.get("https://forgot-password-1-053b.onrender.com/verifyOtp").then((dbres)=>setFpData(dbres.data))
        console.log(fpData)
       const fp= fpData.filter(user=>user.id==otpId)
       console.log(fp[0])
     if(fp[0].randomString==otp){
     alert('user verified')
     setUserVerified(true)
    // setOtpId(0)
     setHide(!hide)
    }
    else
    alert('invalid otp')

        
    }

    const handleNewPassword=async(event)=>{
        event.preventDefault();
        const fp=await fpData.filter(user=>user.id==otpId)
        console.log(fpData)
        const hashPassword=await bcryptjs.hash(event.target.value,0)
        await axios.patch("https://forgot-password-1-053b.onrender.com/changePassword",{
            username:fp[0].username,
            password:hashPassword
        }).then(()=>alert('password changed successfully!!!'))

        setUserVerified(false)
    }
    
  return (
    <div>
        <form style={hide?{display:'block'}:{display:'none'}} onChange={handleChange}>
            <div className="mb-3">
             <label for="username" className="form-label">username</label>
                <input type="text" className="form-control" name="username" aria-describedby="emailHelp" required/>            
             </div>    

              <div className="mb-3">
             <label for="email" className="form-label">email</label>
                <input type="text" className="form-control" name="email" aria-describedby="emailHelp" required/>            
             </div>          
         
        
          <button type="submit" className="btn btn-primary"  
         onClick={userExist?handleExistUser:handleCheckUser}>{userExist?'forgot password':'check user'}</button>
        </form>

        <form style={hide?{display:'none'}:{display:'block'}} onChange={handleOtpChange}>
        <div className="mb-3">
             <label for="otp" className="form-label">otp</label>
                <input type="text" className="form-control" name="otp" aria-describedby="emailHelp" required/>            
             </div>  

             <button type="submit" className="btn btn-primary"  
         onClick={verifyOtp}>verify otp</button>
        </form>

        <form style={userVerified?{display:'block'}:{display:'none'}}>
        <div className="mb-3">
             <label for="newPassword" className="form-label">new password</label>
                <input type="text" className="form-control" name="newPassword" aria-describedby="emailHelp" required/>            
             </div>  

             <button type="submit" className="btn btn-primary"  
         onClick={handleNewPassword}>submit</button>
        </form>
    </div>
  )
}

export default Forgot



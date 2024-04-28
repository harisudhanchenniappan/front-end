import React from 'react'

const Login = () => {
  return (
    <div>
        <form onChange={handleChange}>
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
    </div>
  )
}

export default Login
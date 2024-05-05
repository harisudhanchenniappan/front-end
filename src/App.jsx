import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import All from './components/All'
import Signup from './components/Signup'
import Users from './components/Users'
import Forgot from './components/Forgot'
import Login from './components/Login'
import UrlShort from './components/UrlShort'

/*import Career from './components/Career'
import Index from './components/Index'*/


const router=createBrowserRouter([
  {
    path:'/',
    element: <Login />,
    children:[
      
      
      {
        path:'/login',
        element:<Login />
      },
      
      
  ],
  
  },
  {
    path:'/signup',
    element:<Signup />
  },
  {
    path:'/shortUrl',
    element:<UrlShort />
  },
  {
    path:'/users',
    element:<Users />
  },
  {
    path:'/all',
    element:<All />
  },
  {
    path:'/forgotPassword',
    element:<Forgot />
  },
  

])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
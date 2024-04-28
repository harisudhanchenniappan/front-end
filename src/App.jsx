import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import All from './components/All'
import Signup from './components/Signup'
import Users from './components/Users'
import Forgot from './components/Forgot'
/*import Career from './components/Career'
import Index from './components/Index'*/


const router=createBrowserRouter([
  {
    path:'/',
    element: <All />,
    children:[
      {
        path:'/signup',
        element:<Signup />
      },
      {
        path:'/users',
        element:<Users />
      },
      {
        path:'/forgotPassword',
        element:<Forgot />
      }
  ]
  }
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
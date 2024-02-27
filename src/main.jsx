import App from "./App.jsx"
import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import Home from './routes/Home.jsx'
import NewUser from './routes/NewUser.jsx'
import Users from './routes/Users.jsx'
import User from './routes/User.jsx'
import Admin from './routes/Admin.jsx'
import EditUser from './routes/EditUser.jsx'

import './index.css'

const router = createBrowserRouter([
  {

    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/new-user",
        element: <NewUser/>,
      },
      {
        path: "/users",
        element: <Users/>,
      },
      {
        path: "/users/:id",
        element: <User/>,
      },
      {
        path: "/admin",
        element: <Admin/>
      },
      {
        path: "/users/edit/:id",
        element: <EditUser/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './components/About.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children : [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"",
        element:<About/>

      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {router} />
  </React.StrictMode>,
)

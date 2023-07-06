import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Gallery from './pages/Gallery/Gallery.jsx';

const router = createBrowserRouter([
  {
     path: "/",
     element: <App/>
  }
  ,
  {
    path: "/gallery",
    element: <Gallery/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)



import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About/aboutMe.jsx'
import Error from './pages/error.jsx'
import Contact from './pages/Contact/contact.jsx'
import Portfolio from './pages/Portfolio/portfolio.jsx';
import Resume from './pages/Resume/resume.jsx';




import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
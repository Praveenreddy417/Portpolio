import React from 'react';
import Blogs from './views/Blogs';
import Contact from './views/Contact';
import Home from './views/Home';
import Layout from './views/Layout';
import NoPage from './views/NoPage';
const routes = [
  {
    path: '/app',
    element: <Layout />,  
    children: [
      { path: 'Home', element: <Home /> },
      { path: 'Blogs', element: <Blogs /> },      
      { path: 'Contact', element: <Contact /> },
      { path: '404', element: <NoPage /> },
    ]
  }
];



export default routes;
import React from 'react';
import Navbar from './Navbar.jsx';
import { useEffect } from 'react';
import './Home.css'

const Home = () => {
  return (
    
    <div>
        <Navbar/>
        <img src="https://dwtr67e3ikfml.cloudfront.net/bookCovers/85d776b5-7c55-4e8e-bffa-d6b2567efb20.jpg__300x0"  alt=""  height= {350} />
        <img src="https://dwtr67e3ikfml.cloudfront.net/bookCovers/88aad336-6bfe-451b-8065-f53238d8b7aa.jpg__300x0" alt="" height= {350}/>
<img src="https://dwtr67e3ikfml.cloudfront.net/bookCovers/56b13e1e-8f22-4ce8-a61d-f5e0ab20c960.jpg__300x0" alt="" height= {350}/>
    </div>
  )
}

export default Home
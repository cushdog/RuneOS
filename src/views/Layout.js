import { Outlet, Link } from "react-router-dom";
// import { useEffect, useRef, useState } from 'react';
import hopeforcpp from "../hopeforcpp.svg";

const Layout = () => {
  
  // const navigationBarRef = useRef();
  // useEffect(()=>{
  //   const scollHandler = (entries) => {  
  //     const isVisible = entries[0].isIntersecting;
  //     console.log(isVisible);
  //   }
  //   const observer = new IntersectionObserver(scollHandler);
  //   observer.observe(navigationBarRef.current);
  // });

  return (
    <>
      <div className="nav-header">
        <div className="nav-item home-logo-outer">
          <Link to="/" className="home">
            <img src={hopeforcpp} className='home-logo' alt="hope for a c++ team logo" />
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/demo">
            <div className="link-item" >Demo</div>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/about">
            <div className="link-item">About</div>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/contact">
            <div className="link-item">Contact</div>
          </Link>
        </div>
      </div>
    
      <Outlet />
    </>
  )
};

export default Layout;


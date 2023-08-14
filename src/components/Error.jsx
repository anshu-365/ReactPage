import React from 'react';
import "../style/error.scss";
import {NavLink} from "react-router-dom";
import vg from "../assets/page_not_found.png";
const Error = () => {
  return (
    <div className="first">
       <div className='img'>
<img src={vg} alt="Page not found" />
       </div>
      <div className='sec' >
        <h1 className='h1'>404 Page not found</h1>
        <p className='p'> Sorry! this page doesn't exits</p>
        <button type='submit' className='but'><NavLink className="link" to="/"><b>click to redirect Home</b>
        </NavLink></button>
       </div>
    </div>
  );
}

export default Error;
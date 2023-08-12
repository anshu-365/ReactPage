import React from 'react';
import "../style/Header.scss";//header css
import {Link} from "react-router-dom";//this way linking isn not the relode the page 
import {HashLink} from "react-router-hash-link";

function Header() {
  return (
    <nav>
        <h1>welcome</h1>
        <main>
            {/* this all is link */}
            <HashLink to={"/#home"}>Home</HashLink>{/*this way do not relode the page when we move to next page */}
            <Link to="/contact">Contact</Link>
           {/* <Link to="/#about">About</Link> it will not scroll*/}
           {/*<a href="/#about">About</a>it relode the page so we do not use this */}
           <HashLink to="/#about">About</HashLink>
            <HashLink to="/#brand">Brand</HashLink>{/*now it will scroll to matching the given id */}
            <Link to="/services">Services</Link>
        </main>
    </nav>
  )
}

export default Header
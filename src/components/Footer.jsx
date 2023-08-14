import React from 'react';
import "../style/footer.scss";
import {AiFillYoutube,AiFillInstagram,AiFillGithub} from "react-icons/ai";//using this for 
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (<>
    <footer>
    <div>
        <h1>TechStar</h1>
        <p>@all right reserved</p>
    </div>
    <div>
        <h5>Follow Us</h5>
        <div>
            <NavLink  to="https://youtube.com" target={"blank"}>Youtube<AiFillYoutube/></NavLink>
            <NavLink  to="https://www.instagram.com/anshu__365/" target={"blank"}>Insta<AiFillInstagram/></NavLink>
            <NavLink  to="https://github.com/anshu-365" target={"blank"}>GitHub<AiFillGithub/></NavLink>
        </div>
    </div>
    </footer>
    
    </>
  )
}

export default Footer
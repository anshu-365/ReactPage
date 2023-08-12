import React from 'react';
import "../style/footer.scss";
import {AiFillYoutube,AiFillInstagram,AiFillGithub} from "react-icons/ai";//using this for 

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
            <a href="https://youtube.com" target={"blank"}>Youtube<AiFillYoutube/></a>
            <a href="https://instagram.com/anshu_365" target={"blank"}>Insta<AiFillInstagram/></a>
            <a href="https://github.com/anshu-365" target={"blank"}>GitHub<AiFillGithub/></a>
        </div>
    </div>
    </footer>
    
    </>
  )
}

export default Footer
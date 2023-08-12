import React from 'react';
import "../style/Home.scss";

import vg from "../assets/tech.png";
import {Link} from "react-router-dom";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";//using this for taking the Icon


const Home = () => {
  return (
    <>
    <div className="home" id="home">
      <main>
      <h1>TechStar</h1>
      <p>Solution to all your problem</p>
      </main>
      </div>
      <div className="home2">
       <img src={vg} alt="graphics"  />
       <div>
        <p>we are here for you to solve tech problems you face Every Day.
          our Tech compny aim to enhance problem solution ability in Student.  
        </p>
       </div>
      </div>

      <div className="home3" id="about">
      <div>
        <h1>Technical support teams</h1>
        <p>Technical support teams provide assistance for electronic products. A reliable IT support ticketing system like LiveAgent helps ensure top-notch customer service quality. LiveAgent offers various tools such as chat, calls, and social media integration. Technical support services can have a positive impact on customer satisfaction and brand image. Helpdesk software like LiveAgent can significantly improve customer satisfaction and retention while reducing stress and burnout for agents.</p>
      </div>
      </div>

      <div className="home4" id="brand">{/* giving id to brand so when we click brand this #brand will come*/}
        <div>
          <h1>Brands</h1>
       
      <article >
        <div style={{animationDelay:"0.3s",}}>{/*delay added */}
          <AiFillGoogleCircle/>
          <Link to="https://www.google.com/"><p>Google</p></Link>
          {/* <a href="https://www.google.com/"><p>Google</p></a> */}
        </div>
        <div style={{animationDelay:"0.5s",}}>
          <AiFillAmazonCircle/>
          <Link to="https://www.amazon.com/"><p>Amazon</p></Link>
         
        </div>
        <div style={{animationDelay:"0.7s",}}>
          <AiFillYoutube/>
          <Link to="https://www.youtube.com/"><p>YouTube</p></Link>
          
        </div>
        <div style={{animationDelay:"1s",}}>
          <AiFillInstagram/>
          <Link to="https://www.instagram.com/"><p>Instagram</p></Link>
         
        </div>
      </article>
      </div>
      </div>

    </>
  )
}

export default Home
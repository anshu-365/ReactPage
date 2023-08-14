import React from 'react';
// import "../style/services.scss";//no need oof css file
import {Carousel} from "react-responsive-carousel";
import img1 from "../assets/full_stack";
import img2 from "../assets/full_stack1.png";
import  "react-responsive-carousel/lib/styles/carousel.min.css";//inbuild css 

const Services =()=>{
    return(<>
        <div className="services"> </div>
        <Carousel
        infiniteLoop//rit run infinite
        autoPlay//it changes auto matic
        showStatus={false}//it remove the status of 1of2
        showArrows={false}//arrow of changes will remove
        showThumbs={false}//which indicate the current display of  image in small box bottom left
        interval={3000} 
        // showIndicators={false}//it show the how many slide

        >
            <div>
                <img src={img1} alt="Item1" />
                <p className="legend">Full stack</p>
            </div>
            <div>
                <img src={img2} alt="Item2" />
                <p className="legend"> Java Developer</p>
            </div>
        </Carousel>
        </>
    )
};
export default Services;
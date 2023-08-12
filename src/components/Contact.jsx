import React from 'react';
import "../style/contact.scss";

const Contact=()=>{
    return(
<>
<div className='contact'>
    <main>
        <h1> Contact us</h1>
        <form>
            <div>
                <label >Name</label>
                <input type="text" required placeholder="Enter Your Name"/>
            </div>
            <div>
                <label >Email</label>
                <input type="email" required placeholder="abc@gmail.com"/>
            </div>
            <div>
                <label >Name</label>
                {/* <input type="text" required placeholder="Write Here Your Problem"/> */}
                <textarea required placeholder="Write your query here"></textarea>
               
            </div>
            <button type="submit">Send</button>
        </form>
    </main>
</div>
</>
    )
};
export default Contact;





























// const Contact = () => {
//   return (
//     <>
//     <div>Contact</div>
//   )
// }
// export default Contact;
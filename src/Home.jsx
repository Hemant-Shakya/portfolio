import React from "react";
import img  from './images/myimage.jpeg'
function Home()
{
    return(
        <>
        <div className="home-main">
            <div className="home-text">

            <h2 >Hi, my name is...</h2>
            <h1 > Hemant Kumar Shakya </h1>
            
            <h1 > I'm a Front End Web Developer </h1>
            <br/>
            <h3>
                I'm a front end web developer specialising buildig (and ocasionaly desiging) in beautiful and wonderful
                digital web design. <br/> Currently I am focused on responsive frond end web design.<br/>
                Thank you! 
            </h3>
            </div>
            <div className="home-img">
                <br/>
                <img src={img}/>
            </div>
        </div>

        <div>
            <h1 style={{color:'gray'}}>Call Us</h1>
            <h2 style={{color:'pink'}}>Address: Bank Colony near Army Public School Morar, Gwalior, Madhya Pradesh-474006</h2>
            <h2 style={{color:'orange'}}>Mob: +91 8305996305</h2>
            <h2 style={{color:'yellow'}}>Email: shakya.hk@gmail.com</h2>
        </div>
        </>
       
    )
}
export default Home; 

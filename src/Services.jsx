import React from "react";

import img1 from './images/redux.png';
import img2 from './images/bmi.png';
import img3 from './images/todo.png';


function Services()
{
    return(
        <>
        
        <div className="sr-main">
          <div><a href="https://vitedemo1.netlify.app"><img className='sr-1' src={img1} /> </a> 
          <h2>Number with redux programming</h2>
          </div>
          <div><a href="https://thisbmi.netlify.app"> <img className='sr-1' src={img2} /> </a>
          <h2>BMI Calculator</h2>
          </div>
          <div><a href="https://to-do-list-app-online.netlify.app"> <img className='sr-1' src={img3} /> </a>
          <h2>TO DO LIST</h2>
          </div>
        </div>


        </>
    )
}
export default Services; 

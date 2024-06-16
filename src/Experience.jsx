import React from "react";

import img1 from './images/html.png';
import img2 from './images/css.png';
import img3 from './images/js.png';
import img4 from './images/react.png';

function Experience()
{
    return(
        <>
        
        <div className="ex-main">
          <div><img className='ex-1' src={img1} />
          <h2>HTML</h2>
          </div>
          <div><img className='ex-1' src={img2} />
          <h2>CSS</h2>
          </div>
          <div><img className='ex-1' src={img3} />
          <h2>JAVASCRIPT</h2>
          </div>
          <div><img className='ex-1' src={img4} />
          <h2>REACT</h2>
          </div>
        
        </div>


        </>
      )
}
export default Experience

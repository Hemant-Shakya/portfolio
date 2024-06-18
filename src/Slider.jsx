import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import img1 from './Slider/1.webp';
import img2 from './Slider/2.webp';
import img3 from './Slider/3.webp';
import img4 from './Slider/4.webp';
import img5 from './Slider/5.webp';

function Slider()
{
    return(
    <div>
    <Container>
    <Carousel data-bs-theme="dark" >
      <Carousel.Item>
        <img 
          className="d-block w-100" 
          src={img1}
          alt="First slide"
        />
        </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={img4}
          alt="Fourth slide"
        />
      </Carousel.Item> 
       <Carousel.Item >
        <img
          className="d-block w-100"
          src={img5}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>

    </Container>
    </div>
    )
}
export default Slider;
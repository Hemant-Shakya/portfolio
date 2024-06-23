import React from "react";
import img  from './images/myimage.jpeg'
import Slider from "./Slider.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home()
{
    return(
        <>
        <div className="home-main">
            <div className="home-text">
            <Slider/>

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

        <br/>
{/* responsive footer using css */}
        <div className="footer">
            <div>
                <h2>Our Services</h2>
                    <ul>
                        <li> Website Designing</li>
                        <li>Website Development</li>
                        <li>Website Development</li>
                        <li>eCommerce</li>
                    </ul>
            </div>     
            <div>
                   <h2>Contact Us</h2>
                    <ul>
                        <li>Harshita Tech Solution</li>
                        <li>shakya.hk@gmail.com</li>
                        <li>+91 8305996305 </li>
                    </ul>
            </div>  
            
        </div>



        
        {/* responsive footer without css */}
        {/* <Container>
            <Row>
                <Col>
                <h1>Services1</h1>
                </Col>
                <Col>
                <h1>Services2</h1>
                </Col>
                <Col>
                <h1>Services3</h1>
                </Col>
                <Col>
                <h1>Services4</h1>
                </Col>
            </Row>
        </Container> */}

        </>
       
    )
}
export default Home; 

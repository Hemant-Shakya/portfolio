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

        <div>
            <address>
            <Container>
                <Row style={{height:'5rem', textAlign:'center', color:'olive'}}>
                   <Col><h2>Our Services</h2></Col>   
                   <Col><h2>Contact Us</h2></Col>   
                   
                </Row>
                <Row>
                   <Col style={{lineHeight:'6rem', textAlign:'center'}}>
                    <h4 >Website Designing</h4>
                    <h4>Website Development</h4>
                    <h4>Website Domain & Hosting</h4>
                    <h4>eCommerce</h4>
                   </Col>
                  
                   <Col style={{lineHeight:'6rem', textAlign:'center'}}>
                    <h4>Harshita Tech Solution</h4>
                   
                    <h4>shakya.hk@gmail.com</h4>
                   
                    <h4>+91 8305996305 </h4>
                   </Col>   
                </Row>

            </Container>
            </address>
        </div>
        </>
       
    )
}
export default Home; 

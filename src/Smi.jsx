import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";
function Smi()
{
    return(
        <>
        <div className="sicon">
        <div className="f"><a href='https://www.facebook.com'> <AiFillFacebook/> Facebook </a></div>
        <div className="l"><a href='https://in.linkedin.com/'> <FaLinkedin /> Linkedin </a></div>
        <div className="w"><a href='https://wa.me/918305996305'> <ImWhatsapp /> WhatsApp </a> </div>
        <div className="e"><a href='mailto:shakya.hk@gmail.com'> <SiGmail /> Email </a> </div>

        </div>
        </>
    )
}
export default Smi; 

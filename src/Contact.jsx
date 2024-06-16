import React from "react";
function Contact()
{
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
    
        formData.append("access_key", "d7b42da3-ba06-41ef-907a-701d4b0b8123");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert('Your message is recorded successfully.');
        }
      };
    
      return (
          <form onSubmit={onSubmit} className="contact-form">
            <h1>Contact Us</h1>
            <lebel for>Name : </lebel>
            <input type="text" name="name"/><br/>
            <label for>Email id :</label> 
            <input type="email" name="email"/><br/>
            <label for>Message : </label>
            <textarea name="message" rows={10} cols={50}></textarea> <br/>
            <button type="submit">Submit Form</button>
          </form>
      );
    
}
export default Contact; 

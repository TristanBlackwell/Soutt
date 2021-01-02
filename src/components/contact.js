import { useState } from "react";
import Select from 'react-select';

import Navbar from "./navbar";

const options = [
    { value: 'Web Design', label: 'Web Design' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Ecommerce Functionality', label: 'Ecommerce Functionality' },
    { value: 'Website Servicing', label: 'Website Servicing'},
    { value: "Copywriting", label: "Copywriting"}
  ]

export default function Contact() {

    const [status, setStatus] = useState("");

    function submitForm(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        console.log(data);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    }

    return (
        <div id="contactPage">
            <Navbar />
            <div className="NavCover" data-aos="fade-left">
                <div className="container">
                    <h1>Let's Have A Chat</h1>
                    <p>Considering a project? Feel free to get in touch or need
                        some advice
                    </p>
                </div>
            </div>
            <div id="contactArea" data-aos="zoom-out">
                <div className="container center">
                <h4>Time Sensitive? Send Me An <a href="#email">Email</a> Or Give Me A <a href="#phone">Ring</a> Instead</h4>
                <h5>or...</h5>
                    <form id="contactForm" onSubmit={submitForm} action="https://formspree.io/f/xqkggolo" method="POST">
                        <div>
                            <span>Hi my name is</span> 
                            <input className="contactInput" id="contactName" name="name" type="text" placeholder="Name"/>
                            <span>and I'd love to chat to Tristan about</span>
                            <Select options={options} name="services" isMulti placeholder={<p>Web Design, Servicing etc...</p>} />
                            <br/>
                            <span>It's best to contact me on either</span>
                            <input className="contactInput" id="contactEmail" name="email" type="email" placeholder="Email address"/>
                            <br />
                            <span>or on</span>
                            <input className="contactInput" id="contactPhone" name="phone" type="text" placeholder="Phone number"/>
                            <br />
                            <span>Anything else to mention?</span>
                            <br />
                            <textArea className="contactInput" id="contactText" name="message" value="project info, timelines etc"/> 
                            <br />
                            {status === "SUCCESS" ? <p className="formMsg">Thank you!</p> :
                            <button type="submit" id="contactSubmit">Send Enquiry</button> }
                            {status === "ERROR" && <p className="formMsg">Oh no! I couldn't send your message.</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
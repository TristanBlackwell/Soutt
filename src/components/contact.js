import Select from 'react-select';

const options = [
    { value: 'Web Design', label: 'Web Design' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Ecommerce Functionality', label: 'Ecommerce Functionality' },
    { value: 'Website Servicing', label: 'Website Servicing'},
    { value: "Copywriting", label: "Copywriting"}
  ]

export default function Contact() {

    return (
        <div id="contactPage">
            <div className="NavCover" data-aos="fade-left">
                <div className="container">
                    <h1>Let's have a chat</h1>
                    <p>Considering a project? Feel free to get in touch or need
                        some advice
                    </p>
                </div>
            </div>
            <div id="contactArea" data-aos="zoom-out">
                <div className="container center">
                <h4>Time sensitive? Send me an <a href="#email">email</a> or give me a <a href="#phone">ring</a> instead</h4>
                <h5>or...</h5>
                    <form id="contactForm">
                        <div>
                            <span>Hi my name is</span> 
                            <input className="contactInput" id="contactName" type="text" placeholder="Name"/>
                            <span>and I'd love to chat to Tristan about</span>
                            <Select options={options} isMulti placeholder={<p>Web Design</p>} />
                            <br/>
                            <span>It's best to contact me on either</span>
                            <input className="contactInput" id="contactEmail" type="email" placeholder="Email address"/>
                            <br />
                            <span>or on</span>
                            <input className="contactInput" id="contactPhone" type="text" placeholder="Phone number"/>
                            <br />
                            <button type="submit" id="contactSubmit">Send Enquiry</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
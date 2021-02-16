import { useState, useEffect } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import logo from "../images/souttOrangeLogo";

export default function Navbar() {

    const [prevScrollPos, setprevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => { window.removeEventListener("scroll", handleScroll) }
    })

    function handleScroll()  {
        const currentScrollPos = window.pageYOffset;
        const isVisible = prevScrollPos > currentScrollPos;
        
        setprevScrollPos(currentScrollPos);
        setVisible(isVisible);
    }

    return (
        <div className={classnames("navbarHome", {"navbar--hidden": !visible})}>
            <div className="logo">
                <img src={logo} alt="logo" className="navLogo"/>
            </div>
            <div className="navigation">
                <Link to="/" className="active middle">Home</Link>
                <Link to="/work" className="middle">Work</Link>
                <Link to="/services" className="middle">Services</Link>
                <Link to="/about" className="middle">About</Link>
                <Link to="/blog" className="middle">Blog</Link>
                <Link to="/contact" className="middle">Contact</Link>
            </div>
            <div className="contact">
                <a href="tel: 07851934397" style={{display: "none"}}>
                    <i className="fas fa-phone-alt"></i>
                    <p>07851 934397</p>
                </a>
            </div>
        </div>
    )
}
import { useState, useEffect } from "react";
import classnames from "classnames";

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
        <div className={classnames("navbar", {"navbar--hidden": !visible})}>
            <div className="logo">Logo</div>
            <div className="navigation">
            <a href="#home" className="active middle">Home</a>
            <a href="#work" className="middle">Work</a>
            <a href="#services" className="middle">Services</a>
            <a href="#about" className="middle">About</a>
            <a href="Blog" className="middle">Blog</a>
            </div>
            <div className="contact">
                <i className="fas fa-phone-alt"></i>
                <p>07567 375491</p>
            </div>
        </div>
    )
}
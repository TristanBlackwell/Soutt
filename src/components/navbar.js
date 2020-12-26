import { useState, useEffect } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

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
                <Link to="/" className="active middle">Home</Link>
                <Link to="/work" className="middle">Work</Link>
                <Link to="/services" className="middle">Services</Link>
                <Link to="/about" className="middle">About</Link>
                <Link to="/blog" className="middle">Blog</Link>
            </div>
            <div className="contact">
                <a href="tel: 07567 375491">
                    <i className="fas fa-phone-alt"></i>
                    <p>07567 375491</p>
                </a>
            </div>
        </div>
    )
}


export default function Navbar() {

    return (
        <div className="navbar">
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
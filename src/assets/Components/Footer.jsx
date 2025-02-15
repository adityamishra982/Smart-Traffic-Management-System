import React from 'react';
import './Footer.css';
import  cm from'./cm.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-section">
                    <a href="https://up.gov.in/en/page/emergency-services" className="logo">
                        <img src={cm} className="logo-img"  alt="" /><span>SafeRoute</span>
                    </a>
                </div>
                <div className="footer-section">
                    <h2>Know More</h2>
                    <ul>
                        <li><a href="https://www.facebook.com/governmentofup/?locale=hi_IN">Facebook</a></li>
                        <li><a href="https://www.instagram.com/upgovt/?hl=en">Instagram</a></li>
                        <li><a href="Email:cmup@nic.in">Emergency No:112</a></li>
                        <li><a href="https://uppolice.gov.in/article/en/help">Help</a></li>
                        <li><a href="https://uppolice.gov.in/article/en--right-to-information">Right to Information</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Connect</h2>
                    <ul>
                        <li><a href="https://www.instagram.com/uppolice/?hl=en">UP Police</a></li>
                        <li><a href="https://www.instagram.com/imsafeapp/?hl=en">I'm Safe</a></li>
                        <li><a href="Email:cmup@nic.in">Email: cmup@nic.in</a></li>
                        <li><a href="https://uppolice.gov.in/article/en/dos-and-dont">Do's & Don'ts</a></li>
                        <li><a href="https://uppolice.gov.in/pages/en/topmenu/en-contact-us/en-contact-us">Feedback</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Legal</h2>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <span>© 2025 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.</span>
                <div className="social-icons">
                    <a href="#"><span className="sr-only">Facebook page</span></a>
                    <a href="#"><span className="sr-only">Twitter page</span></a>
                    <a href="#"><span className="sr-only">Instagram page</span></a>
                    <a href="#"><span className="sr-only">GitHub account</span></a>
                    <a href="#"><span className="sr-only">Dribbble account</span></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

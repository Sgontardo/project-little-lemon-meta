import React from 'react';
import logo from '../images/footerlogo.png';

const Footer = () => {
    return(
        <footer className='footer'>
            <section>
                <div className='company-info'>
                    <img src={logo} alt="logo"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div>
                    <h3>Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Log In</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: Chicago</li>
                        <li>Phone: +1 274 4548</li>
                        <li>Email: little@lemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="https://www.facebook.com/"></a>Facebook</li>
                        <li><a href="https://www.instagram.com/"></a>Instagram</li>
                        <li><a href="https://twitter.com/?lang=en"></a>Twitter</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
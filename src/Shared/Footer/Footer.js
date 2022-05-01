import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (

        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li>Web design</li>
                            <li>Development</li>
                            <li>Hosting</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li>Company</li>
                            <li>Team</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Rideriot</h3>
                        <p>We are Always here for you! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM).</p>
                    </div>
                    <div className="col item social"><Link to=""><i className="icon ion-social-facebook"></i></Link><Link to="#"><i className="icon ion-social-twitter"></i></Link><Link to="#"><i className="icon ion-social-snapchat"></i></Link><Link to="#"><i className="icon ion-social-instagram"></i></Link></div>
                </div>
                <p className="copyright">Rideriot © 2022s</p>
            </div>
        </footer>
    </div>

   
    );
};

export default Footer;
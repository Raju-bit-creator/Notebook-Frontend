import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <div className='top-footer'>
                <div className='container' >
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='address'>
                                <h2 className='location'>Location</h2>
                                <h4 className='icon'><FaMapMarkerAlt /> Kathmandu , Nepal</h4>
                                <h4 className='icon'><FaRegEnvelope /> testing@testing.com</h4>
                                <h4 className='icon'><FaPhoneAlt /> 9807776672</h4>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='quick links'>
                                <h2>Quick Links</h2>
                                <Link to="/" className='icon'>Home</Link><br></br>
                                <Link to="/profile" className='icon'>Profile</Link><br></br>
                                <Link to="/login" className='icon'>Login</Link><br></br>
                                <Link to="/signup" className='icon'>Signup</Link><br></br>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='quick links'>
                                <h2>About Us</h2>
                                <p className='para'>Our mission is to work with the customer for the entirety of the job. From the initial consultation, through to the design stage,
                                    installation and ongoing maintenance of all Knitting work. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <p className='footer-para'>Copyright © 2023 Testing Pty Ltd. All Rights Reserved. Designed By  :testing@testing.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

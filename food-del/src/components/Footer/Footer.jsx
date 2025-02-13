import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ducimus molestiae, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae alias provident quae voluptates, quis praesentium nemo cumque perspiciatis possimus soluta vitae? Consectetur, iusto? Maiores id quo hic, cum voluptates sint temporibus voluptatem odit incidunt animi, eos suscipit distinctio minima saepe ut illo cumque iste rem? Repellendus earum quo fugiat impedit. dolorum in atque id ad! Consectetur deserunt iste ab!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+92 328-9538-212</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>

        </div>
     <hr />
     <p className='footer-copyright'>Copyright 2025 fayaz qazi. All right reserved</p>
    </div>
  )
}

export default Footer

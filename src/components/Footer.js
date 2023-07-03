import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './../css/Footer.css'

export default function Footer() {
  return (
    <footer className=' footer-ct'>
      <div className='footer-w50'>
        <div className='dp-flex'>
          <div class="left-content">
            <img className='footer-img' src={require('./../assets/logo-images/Asset 18@4x.png')} alt="footer-img" />
          </div>
          <div class="center-content">
            <div className='footer-info'>
              <p>Contact Information: <span className='footer-email'>littlelemon@gmail.com</span></p>
              <p>Follow us on social media:</p>
              <ul class="social-media-list">
                <li className='social-li'>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                  </a>
                </li>
                <li className='social-li'>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                  </a>
                </li>
                <li className='social-li'>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='right-content'>
            <div class="footer-copy-right">
              <p>© 2023 Little Lemon. All rights reserved.</p>
              <p>Privacy Policy | Terms of Service.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
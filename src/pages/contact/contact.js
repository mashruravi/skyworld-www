import React, { Component } from 'react';

import location from '../../assets/icons/013-earth.svg';
import mobile from '../../assets/icons/037-tablet.svg';
import phone from '../../assets/icons/034-phone.svg';
import whatsapp from '../../assets/icons/006-call.svg';
import facebook from '../../assets/icons/012-facebook.svg';
import email from '../../assets/icons/020-mail.svg';


import './contact.scss';

export class Contact extends Component {
  render() {
    return (
      <div>
        <div className="pagewellStyle">
          <div className="locationImage" />

          <div className="contact-details">
            <div className="cd-row">
              <div className="cd-icon">
                <img src={location} alt="location" />
              </div>
              <div className="cd-text">
                <p>Plot No. 91/97, Anik Building,</p>
                <p>1st Floor, Suite 3, 7th Street</p>
                <p>Industrial Area</p>
                P.O. Box 2801, Kampala (Uganda)
              </div>
            </div>

            <div className="cd-row">
              <div className="cd-icon">
                <img src={mobile} alt="mobile" />
              </div>
              <div className="cd-text">
                <p>+256 787 815 725</p>
              </div>
            </div>

            <div className="cd-row">
              <div className="cd-icon">
                <img src={phone} alt="phone" />
              </div>
              <div className="cd-text">
                <p>+256 414 670 800</p>
              </div>
            </div>

            <div className="cd-row">
              <div className="cd-icon">
                <img src={whatsapp} alt="whatsapp" />
              </div>
              <div className="cd-text">
                <p>+256 759 990 446</p>
                <p>+256 752 352 177</p>
              </div>
            </div>

            <div className="cd-row">
              <div className="cd-icon">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="cd-text">
                <p>Skyworld Travels</p>
              </div>
            </div>

            <div className="cd-row">
              <div className="cd-icon">
                <img src={email} alt="email" />
              </div>
              <div className="cd-text">
                <p>
                  <a href="mailto:skyworldug@gmail.com">skyworldug@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

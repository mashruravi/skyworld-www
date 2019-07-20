import React from 'react';

import './about-us.scss';

import paresh from '../../../assets/paresh.jpg';

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <h2>About Us</h2>
      <p>
        We have more than 8 years of experience with walk-in and corporate
        clients. We have successfully handled individual and large group
        bookings, groups from national and international schools, local and
        international tours, and accounts and invoicing for corporate clients.
      </p>
      <p>
        We have a hardworking, motivated, professional and customer-centric
        staff that is guaranteed to give you the best tour and travel booking
        experience.
      </p>
      <div className="quote-container">
        <div className="quote-image">
          <img src={paresh} alt="" />
        </div>
        <div className="quote-text">
          <p>
            We understand that every customer wants something that suits their
            special needs. We strive to ensure that each customer gets the
            special attention that they need to cater to their specific
            requirements.
          </p>
          <p>
            With the kind of experience our staff has, all our customers are
            guaranteed to get an amazing experience be it for local travels,
            international tours, individual bookings, our mass group bookings.
          </p>
          <p style={{ alignSelf: 'flex-end' }}>
            Paresh Mehta <strong>(Director)</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

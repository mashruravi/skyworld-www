import React, { Component } from 'react';

import Card from '../../../components/card/card';

import plane from '../../../assets/icons/013-plane.svg';
import travel from '../../../assets/icons/017-travel.svg';
import boardingpass from '../../../assets/icons/003-boarding pass.svg';

import './services.scss';

const serviceDetails = [
  {
    id: 'ticket',
    label: 'Air Ticketing',
    description:
      'We guarantee to help you get the best deal possible for both local and international flights. ' +
      'Our aim is to enable you to enjoy your travel without burning a hole in your pocket.',
    image: plane
  },
  {
    id: 'tours',
    label: 'Tours & Packages',
    description:
      'We help you tailor custom packages based on locations you want to visit, your interests ' +
      'and your budget. Our packages will give you wholesome experiences that you will treasure.',
    image: travel
  },
  {
    id: 'visa',
    label: 'Visa Services',
    description:
      'We help you through the complete end-to-end process of obtaining a visa for your travels, ' +
      'saving your time and effort before your travel.',
    image: boardingpass
  }
];

export class Services extends Component {
  render() {
    return (
      <div>
        <h2>Our Services</h2>
        <div className="cards">
          {serviceDetails.map(e => (
            <Card
              key={e.id}
              title={e.label}
              image={e.image}
              text={e.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Services;

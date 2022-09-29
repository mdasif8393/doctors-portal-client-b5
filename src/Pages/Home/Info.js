import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../src/assets/icons/clock.svg'
import marker from '../../../src/assets/icons/marker.svg'
import phone from '../../../src/assets/icons/phone.svg'

const info = () => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <InfoCard cardTitle="Opening Hours" bgClass="bg-accent" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Location" bgClass="bg-info" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-accent" img={phone}></InfoCard>
        </div>
    );
};

export default info;
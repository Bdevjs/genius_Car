import React, { useEffect, useState } from 'react';
import useServices from '../../../hook/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services] = useServices()

    return (
        <div id="services" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our Services</h1>
            <div className="services-container">
            {
                services.map(service => <Service 
                    key={service._id}
                    service={service} //Ever service data  send to the service card from there
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;
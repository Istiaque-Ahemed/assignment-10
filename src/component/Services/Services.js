import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://istiaque-ahemed.github.io/json-file/output.json')
            .then(res => res.json())
            .then(data =>setServices(data))
    }, [])
    return (
        <div className="service-container">
           <h3>Our <b>Services</b></h3>
           <hr/>
            <div className="row">
            {
                services.map(service =><Service
                 key= {service.id}
                 service= {service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;
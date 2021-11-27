import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([])
    const {name,description,img} = service;

    useEffect(() => {
        const url = `https://istiaque-ahemed.github.io/json-file/output.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const p = data.find(d => d.id == serviceId)
                setService(p)
            })
    }, [serviceId])

    return (
        <>
        <h2 className="service-headr">{name}</h2>
        <hr />
          <div className="service-dtl">
              <div className="descript">
                {description}
              </div>
              <div>
                <img className="dtls-img" src={img} alt="" />
              </div>
          </div>
        </>
    );
};

export default ServiceDetails;

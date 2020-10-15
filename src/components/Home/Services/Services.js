import React, { useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css'


const Services = () => {
    const [serviceInfo, setServiceInfo] = useState([])
    fetch('https://cryptic-scrubland-55097.herokuapp.com/services')
    .then(res => {
        if(res){
          return  res.json()
        }
    })
    .then(data => setServiceInfo(data))

    return (
        <div id="service" className=" container service-root">
            <h2 className="text-center">Provide awesome <span className="landing-text">services</span></h2>
            <div className="row my-5 py-5">
                {
                    serviceInfo.map((service => <ServiceCard info = {service}></ServiceCard>))
                }
            </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'

const ServiceDetails = () => {

    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect(() => {

        fetch(`http://localhost:8888/service/${serviceId}`)
            .then(res => res.json())
            .then(item => {
                setService(item)
                console.log(item) })
},[serviceId]);



    const prop = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    return (
        <div className="card text-center col-md-6 col-sm-12 service-card" style={{ width: "18rem" }}>
      <img style={{ height: '400px' }} src={service.imageURL} className="card-img-top mt-5" alt="" />
      <div className="card-body">

        <animated.h3 style={prop}>{service.productName}</animated.h3>
        <p className="card-text">{service.desc}</p>
       
      </div>
    </div>
    );
};

export default ServiceDetails;
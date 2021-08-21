import React from 'react';
import './Service.css';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const Service = (props) => {

  const prop = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const service = props.service;
 
  return (
    <div className="card text-center col-md-6 col-sm-12 service-card" style={{ width: "24rem" }}>
      <img style={{ height: '400px' }} src={service.imageURL} className="card-img-top mt-3" alt="" />
      <div className="card-body">

        <animated.h3 style={prop}>{service.productName}</animated.h3>
      
       <div className="display-flex">
       <Link to={"/orderService/"+service._id}><button  className="btn btn-primary p-2 m-2" >order now</button></Link>
        <Link to={"/getService/"+service._id}><button onClick={()=> console.log(service._id)}  className="btn btn-primary p-2 m-2" >Service Details</button></Link>
       </div>
      </div>
    </div>
  );
};

export default Service;
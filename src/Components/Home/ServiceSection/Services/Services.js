import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Book from '../../../Dashboard/CustomerDashboard/Book/Book';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import Service from '../Service/Service';


const Services = (props) => {
  const handleGetService = props.handleGetService;
  const [services, setServices] = useState([]);





  useEffect(() => {
    fetch('http://localhost:8888/services')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setServices(data)
      })
  }, []);







  return (
    <section>
      <div>
        <div className="text-center mt-5 mb-5 text-secondary">
          <h2>Our Main Services</h2>

        </div>
        <div className="row d-flex justify-content-center d-grid gap-3">
          {
            services.map(service => <Service service={service} handleGetService={handleGetService}></Service>)
          }
        </div>
      </div>

    </section>
  );
};

export default Services;
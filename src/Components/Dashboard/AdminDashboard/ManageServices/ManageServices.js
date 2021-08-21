import React, { useEffect, useState } from 'react';


const ManageServices = () => {

    const [services, setServices] = useState([]);

    const loadServices= () => {
        fetch('http://localhost:8888/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }
    loadServices();
    const handleDelete = (id) => {
        fetch(`http://localhost:8888/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    loadServices();
                }
            })

    }

    return (

        <div style={{ backgroundColor: 'salmon', padding: '20px', marginTop: '30px' }}>

            <h3 className="text-dark">Manage Services</h3>

            <table className="table table-success table-striped">

                <thead>
                    <tr>
                        <th scope="col">SL.</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service =>
                            <tr>
                                <th scope="row">{1}</th>
                                <td>{service.productName}</td>
                                <td>{service.price}</td>
                                <td><button onClick={() => handleDelete(service._id)} className="btn btn-primary">delete</button></td>
                            </tr>)
                    }

                </tbody>
            </table>


        </div>
    );
};

export default ManageServices;
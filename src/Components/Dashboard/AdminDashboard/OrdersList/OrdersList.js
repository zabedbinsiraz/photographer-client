import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import UpdateStatus from './UpdateStatus';


const OrdersList = () => {


    const [orders, setOrders] = useState([]);
    const [singleOrder, setSingleOrder] = useState({});


    // const loadOrders= () => {
    //     fetch('https://infinite-hamlet-09689.herokuapp.com/orders')
    //         .then(res => res.json())
    //         .then(data => {
    //             setOrders(data)
    //         })
    // }
   
    //      loadOrders();

    useEffect(() => {
        fetch('http://localhost:8888/orders')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrders(data)
            })
    }, []);


    const handleStatus = (id) => {
        console.log(id)

        fetch(`https://infinite-hamlet-09689.herokuapp.com/singleOrder/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSingleOrder(data)

            })
    }




    return (

        <div style={{ backgroundColor: 'salmon', padding: '30px', marginTop: '30px' }}>
            <h3 className="text-dark">Order List</h3>

            <table className="table table-success table-striped">

                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <tr>
                                <th scope="row">{order.buyerName}</th>
                                <td>{order.buyerEmail}</td>
                                <td>{order.productName}</td>
                                <td>{order.paymentMethod}</td>

                                <td><button className="btn btn-primary" onClick={() => { handleStatus(order._id) }}>{order.status}</button></td>

                            </tr>)
                    }

                </tbody>
            </table>

            <UpdateStatus  singleOrder={singleOrder}></UpdateStatus>


        </div>

    );
};

export default OrdersList;
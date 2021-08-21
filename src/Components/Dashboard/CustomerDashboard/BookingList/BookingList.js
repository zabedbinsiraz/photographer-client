import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';
import SingleBooking from './SingleBooking';

const BookingList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        fetch('http://localhost:8888/allBookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
                console.log(data)
            })
    }, []);

    return (

        <div>
            <h3 className="text-dark">Your Ordered List</h3>
            <div style={{ backgroundColor: 'salmon', padding: '20px', height: '100%' }} className="d-flex flex-wrap justify-content-center">

                {
                    orders.map(order => <SingleBooking order={order}></SingleBooking>)
                }
            </div>
        </div>

    );
};

export default BookingList;
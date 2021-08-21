import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Navbar from '../../../Home/HeaderSection/Navbar/Navbar';
import ProcessPayment from '../../../PaymentProcess/ProcessPayment';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';
import { useParams } from 'react-router-dom';

const Book = () => {
    // const singleService = props.singleItem;

    const {id} = useParams();
    const [singleService,setSingleService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8888/service/${id}`)
        .then(res => res.json())
        .then(item => {
            setSingleService(item)
            console.log(item)


        })
    },[id]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [placeOrder, setPlaceOrder] = useState(false);

    const handlePaymentSuccess = (id, type) => {
        const orderDetails = { ...singleService, ...loggedInUser };
        const newOrder = {
            productName: orderDetails.productName,
            productPhoto: orderDetails.imageURL,
            price: orderDetails.price,
            desc: orderDetails.desc,
            buyerName: orderDetails.buyer,
            buyerEmail: orderDetails.email,
            paymentId: id,
            paymentMethod: type,
            status: 'On going',
            date: new Date(),
        }

        fetch('http://localhost:8888/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        setPlaceOrder(true);
        console.log(id)
    }
    return (

        <div>

            <div style={{ width: '50%', backgroundColor: 'tomato', padding: '100px', margin: '20px 350px' }}>

                <h3 className="text-dark">Order Service</h3>


                {
                    placeOrder ? <h2>Order submitted Successfully</h2>
                        : <div>
                            <form>
                                <div className="mb-3">

                                    <input defaultValue={loggedInUser.buyer} type="text" className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">

                                    <input defaultValue={loggedInUser.email} type="text" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">

                                    <input defaultValue={singleService.productName} type="text" className="form-control" name="productName" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>

                                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                            </form>

                            <small>You have to pay ${singleService.price}</small>
                            <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                        </div>
                }
            </div>
        </div>

    );
};

export default Book;






const handleOrderNow = () => {


}
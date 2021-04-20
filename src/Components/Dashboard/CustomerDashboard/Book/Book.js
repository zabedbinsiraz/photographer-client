import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';
import ProcessPayment from '../../../PaymentProcess/ProcessPayment';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';

const Book = (props) => {
    const singleService = props.singleItem;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [placeOrder, setPlaceOrder] = useState(false);

    const handlePaymentSuccess = (id, type) => {
        const orderDetails = { ...props.singleItem, ...loggedInUser };
        const newOrder = {
            productName: orderDetails.productName,
            productPhoto: orderDetails.imageURL,
            price: orderDetails.price,
            desc: orderDetails.desc,
            buyerName: orderDetails.buyer,
            buyerEmail: orderDetails.email,
            paymentId: id,
            paymentMethod: type,
            status:'On going',
            date: new Date(),
        }

        fetch('https://infinite-hamlet-09689.herokuapp.com/addOrder', {
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
       
            <div style={{ width: '50%', backgroundColor: 'salmon', padding: '20px' }} className="col-md-7">


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


                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>
       
    );
};

export default Book;






const handleOrderNow = () => {


}
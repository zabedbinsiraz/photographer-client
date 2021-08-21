import React from 'react';
import { useForm } from "react-hook-form";


const UpdateStatus = (props) => {
  const singleOrder = props.singleOrder;
  // const loadOrders = props.loadOrders;

  const handleStatus = (id,data) => {
    fetch(`http://localhost:8888/updateOrder/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          console.log('updated successfully')

        }
      })
  }
  const { register, handleSubmit } = useForm();





  const onSubmit = data => {
    const updateData = { ...singleOrder }
    singleOrder.status = data.status;
    console.log(data.status);


    console.log(updateData)

   handleStatus(updateData._id,updateData);
   


  };
  return (
    <div>
      <h3>Update Order Status</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <div>
            <label htmlFor="">Customer Name</label>
            <br />
            <input className="input" type="text" className="form-control" value={singleOrder.buyerName} {...register('name')} />
            <br />
            <label htmlFor="">Product Name</label>
            <br />
            <input className="input" type="text" className="form-control" value={singleOrder.productName} {...register('product')} />
            <br />
            <label htmlFor="">Order Status</label>
            <br />
           
            <select className="form-control" {...register("status")}>
              <option value="ongoing">ongoing</option>
              <option value="pending">pending</option>
              <option value="done">done</option>
            </select>

            <br />


          </div>
        </div>
        <br />
        <div className="text-center">
          <input className="save-btn btn btn-primary" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default UpdateStatus;
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { UserContext } from '../../../../App';

const AddService = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [addedService, setAddedService] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        const serviceData = {
            productName: data.name,
            imageURL: imageURL,
            desc: data.desc,
            price: data.price
        }
        console.log(serviceData)
        const url = `http://localhost:8888/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                console.log(res)
            })

        setAddedService(true);


    };



    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'b437b2988a9a7d177ebe83d13b4dc437')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                console.log(response.data.data.display_url)
                setImageURL(response.data.data.display_url)
            })
            .catch(error => {
                console.log(error)
            })

    }


    return (

        <div style={{ width: '80%', backgroundColor: 'salmon', padding: '30px', marginTop: '30px' }} >


            <div className="form-container">
                <h3 className="text-dark">Add Service</h3>
                {
                    addedService ? <h3 className="text-white"> New Service added Successfully</h3>
                        : <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <div>
                                    <label htmlFor="">Service Title</label>
                                    <br />
                                    <input className="input" type="text" className="form-control" placeholder="Add new service" {...register('name')} />
                                    <br />
                                    <label htmlFor="">Price</label>
                                    <br />
                                    <input className="input" type="text" className="form-control" placeholder="Add service charge" {...register('price')} />
                                    <br />
                                    <label htmlFor="">Description</label>
                                    <br />
                                    <input className="input" type="text" className="form-control" placeholder="Service description" {...register('desc')} />
                                </div>



                                <div>
                                    <br />
                                    <label htmlFor="">Add Photo</label>
                                    <br />
                                    <input className="input" className="form-control" type="file" onChange={handleImageUpload} />

                                </div>
                            </div>
                            <br />
                            <div className="text-center">
                                <input className="save-btn btn btn-primary" type="submit" />
                            </div>
                        </form>
                }
            </div>


        </div>

    );
};

export default AddService;



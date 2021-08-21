import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminDashboard from '../AdminDashboard/AdminDashboardMain/AdminDashboard';
import AdminSidebar from '../AdminDashboard/AdminSidebar/AdminSidebar';
import CustomerDashboard from '../CustomerDashboard/CustomerDashboard/CustomerDashboard';
import CustomerSidebar from '../CustomerDashboard/CustomerSidebar/CustomerSidebar';


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState({
        email: ''
    });
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetch('http://localhost:8888/allAdmin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                const mail = { email: data[0] }
                setAdmin(mail)
                setLoading(false)
                console.log(data[0], 'data')
            })
    }, [loggedInUser.email]);
    return (
        <div style={{ backgroundColor: 'teal' }}>

            {
                admin.email ? <div className='row '>
                    <div className='col-md-3' >
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className='col-md-8'>
                        <AdminDashboard></AdminDashboard>
                    </div>
                </div>
                    : <div className="row m-2 p-2 ">
                        <div className="col-md-3">
                            <CustomerSidebar></CustomerSidebar>
                        </div>
                        <div className="col-md-8">

                            <CustomerDashboard></CustomerDashboard>

                        </div>
                    </div>

            }



        </div>
    );
};

export default Dashboard;
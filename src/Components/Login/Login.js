import React, { useContext, useState } from 'react';
import logo from '../../logo.svg';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";



const Login = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        buyer: '',
        email: '',
        photo: '',
        error: '',
        success: false

    })


    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };



    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var userDetail = result.user;
                const { displayName, email, photoURL } = userDetail;
                const signedInUser = {
                    isSignedIn: true,
                    buyer: displayName,
                    email: email,
                    photo: photoURL,
                    success: true
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
                setUserToken();
                console.log(user.isSignedIn);
                console.log(loggedInUser.email);


            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
        console.log('clicked')
    }

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken);
        }).catch(function (error) {
            // Handle error
            console.log(error);
        });
    }




    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {

        console.log(data.email)
        const admin = {
            email: data.email,
            password:data.password
        };



        fetch('http://localhost:8888/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        

    };
    return (
        <div className="container d-flex justify-content-center m-3 p-3">

            <div className="row text-center">
                <div className="mb-5 ms-4">
                    {
                        loggedInUser.email ? <h2 className="text-primary">{loggedInUser.buyer}</h2>
                            : <h2>Login</h2>
                    }
                </div>
                <div className="d-flex justify-content-center">
                    <div>
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </div>
                    <div>
                        <h4>BasicView<br />Studio</h4>
                    </div>
                </div>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <div>
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <br />
                                <input className="input" id="exampleInputEmail1" type="email" className="form-control" placeholder="valid email address" {...register('email')} />
                                <br />
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input className="input" id="exampleInputPassword1" type="password" className="form-control" placeholder="password" {...register('password')} />


                            </div>

                            


                        </div>
                            <br />
                            <div className="text-center">
                                <input className="save-btn btn btn-primary" type="submit" />
                            </div>
                    </form>
                </div>
                    <div>
                        OR
                    </div>


                    <div
                        className=" text-center">
                        <button onClick={() => { handleGoogleSignIn() }} className="btn-primary btn ms-5 mt-5" style={{ height: '70px', minWidth: '300px', fontSize: '36px' }}>
                            {
                                loggedInUser.email ? 'You Logged In Successfully' : 'Continue With Google'
                            }
                        </button>
                    </div>

                </div>

            </div>
            );
};

            export default Login;
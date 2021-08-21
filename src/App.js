import React from 'react';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';
import Services from './Components/Home/ServiceSection/Services/Services';
import Footer from './Components/Home/FooterSection/Footer/Footer';
import Navbar from './Components/Home/HeaderSection/Navbar/Navbar';
import ServiceDetails from './Components/Home/ServiceSection/ServiceDetails/ServiceDetails';
import Book from './Components/Dashboard/CustomerDashboard/Book/Book';

export const UserContext = createContext();

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState({});


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
      <Navbar></Navbar>
        <Switch>
          
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/services">
              <Services></Services>
            </Route>
            
            <Route path="/contact">
              <Footer></Footer>
            </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/getService/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/orderService/:id">
            <Book></Book>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>

    </UserContext.Provider>

  );
};

export default App;









// https://github.com/Porgramming-Hero-web-course/complete-website-client-zabedbinsiraz

// https://plumbing-hero.firebaseapp.com/

// https://plumbing-hero.web.app/





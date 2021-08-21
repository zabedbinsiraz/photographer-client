// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { UserContext } from '../../../../App';
// import './Navbar.css';


// const Navbar = () => {

//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);



//   return (
//     <nav className="navbar navbar-expand-lg  navbar-dark  navbar-container">
//       <div className="container-fluid ">
//         <div className="col-md-4 col-sm-12 p-2">
//           <a className="navbar-brand" href="#">Plumbing-Hero</a>



//         </div>

//         <button className="navbar-toggler ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon "></span>
//         </button>

//         <div className="collapse navbar-collapse col-md-7 col-sm-12" id="navbarSupportedContent">

//           <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-wrap">
//             <li className="nav-item  ms-5">
//               <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//             </li>
//             <li className="nav-item ms-5">
//               <Link className="nav-link" to="/dashboard">Dashboard</Link>
//             </li>
//             <li className="nav-item ms-5">
//               <Link className="nav-link" to="/services">Services</Link>
//             </li>
//             <li className="nav-item ms-5">
//               <Link className="nav-link" to="/projects">Projects</Link>
//             </li>


//             <li className="nav-item ms-5">
//               <Link className="nav-link" to="/contact">Contact Us</Link>
//             </li>
//             <li className="nav-item ms-5">
//               <Link className="nav-link" to="/login">{loggedInUser.email ? loggedInUser.buyer : 'Login'}</Link>
//             </li>

//           </ul>

//         </div>

//       </div>

//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 hover:bg-gray-700 text-white px-3 py-2 rounded-md">
                {/* <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                /> */}
                <h3 style={{text:"white"}}>BasicView-Studio</h3>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">

                <Link
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </Link>
                  <Link
                    to="/dashboard"
                    className="text-gray-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>

                  

                 
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </Link>

                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>

                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Link>

              </div>
            </div>
          )}
        </Transition>
      </nav>

    </div>
  );
}

export default Navbar;
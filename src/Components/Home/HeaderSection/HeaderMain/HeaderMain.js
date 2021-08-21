// import React from 'react';
// import './HeaderMain.css';
// import Typist from 'react-typist';

// const HeaderMain = () => {
//     return (
//         <div className="text-center d-flex align-items-center 
//         justify-content-center header-container text-primary">


//             {/* <div>
//                 <h5>Plumbing-Hero Provides</h5>
//                 <h1>Best Plumbing Services</h1>
//             </div> */}

// <Typist>
//   <h5 className="my-custom-class h-5"> Plumbing-Hero Provides </h5>
//   <Typist.Delay ms={500} />
//   <br />
//   <div className="container">
//   <h1 className="h-1">Best Plumbing Services</h1>
//  </div>
// </Typist>


//         </div>
//     );
// };

// export default HeaderMain;



import React from 'react'
import Carousel from './Carousel';

export const IMAGES = [
    {
      imageUrl: "https://loremflickr.com/1200/600/paris",
      placeHolder: "Paris",
      title:'personal'
    },
    {
      imageUrl: "https://loremflickr.com/1200/600/dog",
      placeHolder: "Dog"
      ,
      title:'wedding'
    },
    {
      imageUrl: "https://loremflickr.com/1200/600/cat",
      placeHolder: "Cat"
      ,
      title:'party'
    },
    {
      imageUrl: "https://loremflickr.com/1200/600/forest",
      placeHolder: "Forest"
      ,
      title:'anniversary'
    },
  ];

export default function HeaderMain() {

 

    return (
      <div>
        <div className="relative max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Carousel time={3000}>
            { 
              IMAGES.map((image, index) => <img key={index} src={image.imageUrl} alt={image.placeHolder} />) 
            }
          </Carousel>

            <div className="absolute inset-0  w-screen h-screen bg-transparent text-white flex flex-col items-center justify-center text-7xl font-bold">
              <h1 style={{fontSize:"5rem"}} >Hello, I Am Your</h1>
              <br/>
                <h1 style={{fontSize:"5rem"}}> Next Photographer</h1>
               
            </div>

        </div>
      </div>
    );
  }
  

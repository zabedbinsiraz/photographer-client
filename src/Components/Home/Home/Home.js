import React from 'react';

import Footer from '../FooterSection/Footer/Footer';
import Header from '../HeaderSection/Header/Header';

import Services from '../ServiceSection/Services/Services';



const Home = () => {

  
    return (

        <section style={{ backgroundColor: 'lightblue' }}>

             <div>
                        <Header></Header>
                        <Services ></Services>
                          <Footer></Footer>

                    </div>
            
        </section>

    );
};

export default Home;
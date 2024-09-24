import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import banner1 from '../../../public/banner.jpg';
import Footer from '../../components/Footer';
// import Thumbs from '../../components/Thumbs';

function Home() {
    return (
        <div>
          <Header />
          <Banner 
            bannerImg={banner1}
            text="Chez vous, partout et ailleurs"
          />
          {/* <Thumbs /> */}
          <Footer /> 
         
        </div>
    );
};

export default Home;
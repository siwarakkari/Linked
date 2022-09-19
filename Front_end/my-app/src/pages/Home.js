import React from "react";
import Footer from "../components/Footer";
import Announcement from '../Announcement';
import Categories from '../components/Categories';
import Joboffer from '../components/Joboffer';
import Offers from '../Offers';
import Header from '../components/header';
import Slider2 from "../Slider2";

const Home = () => {
    return <div>
    <Announcement/> 
    <Header/>
    <Categories/>
    
    <Joboffer/>
    <Offers/>
    <Slider2/>
    <Footer/>
  
   </div>
   
};

export default Home;
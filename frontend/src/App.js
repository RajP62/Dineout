
import './App.css';

import Navbar from './Components/navbar';
import {Signup} from "./Components/signup"
import { Signin } from './Components/signin';
import TimeSlots from "./Components/Timeslot";
import { AppRoutes } from './Components/Routes/route';
import Footer from './Components/footer';
import Example from './Components/ImageSlider';
import { Carousel } from './Components/Carousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function App() {
  return (
    <div className="App">
      <Navbar/>
   <AppRoutes/>
    <Footer/>
    
    </div>


   
  );
}
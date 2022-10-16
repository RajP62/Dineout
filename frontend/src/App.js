
import './App.css';

import Navbar from './Components/navbar';
import {Signup} from "./Components/signup"
import { Signin } from './Components/signin';
import TimeSlots from "./Components/Timeslot";
import { AppRoutes } from './Components/Routes/route';
import Footer from './Components/footer';
export default function App() {
  return (
    <div className="App">
      <Navbar/>
   <AppRoutes/>
    <Footer/>
    
    </div>


   
  );
}
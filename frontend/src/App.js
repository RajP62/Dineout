
import './App.css';



import Footer from "./Components/footer"
// import Navbar from "./Components/navbar"
import {Signup} from "./Components/signup"
import { Signin } from './Components/signin';
import TimeSlots from "./Components/Timeslot";
export default function App() {
  return (
    <div className="App">
     
hello
 <div className="scroll">
 
 <TimeSlots/>
    
   </div>
   
      
   <div>
     <Signup/>
     <Signin/>
    </div>
    
   

    
    </div>


   
  );
}
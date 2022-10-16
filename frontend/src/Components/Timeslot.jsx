import styled from "styled-components";
import {useEffect, useState} from "react"
import Calender from "./calender";
import {useContext} from "react"
import displayRazorpay from "../utils/PaymentGateway";
import { CalenderContext } from "../Context/CalenderContext";
import "./Timeslot.css";
import { SigninContext } from "../Context/SignInContext";
import { Signup } from "./signup";
import { useDispatch, useSelector } from "react-redux";
import { BOOK, GUEST, STATUS } from "../Store/actiontype/auth.action.type";
const Wrapper = styled.div`
  object-fit: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 210px !important; */


  .timestatus__parent {
    margin: 8px 8px 24px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 4px;
    box-shadow: 2px -1px 16px #00000028;

    > button {
      height: 48px;
      width: 101.33px;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: #797979;
      background-color: #ffffff;
    }
    .focused__zone {
      color: #3595ff;
      font-weight: 700;
      box-shadow: inset 0px -4px 0px #3595ff;
    }
  }
  > div > button {
    border: none;
  }
  .show__times--parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 8px 89px 16px 22px !important;
    grid-gap: 10px;
    padding-left: 72px;
    > button {
      color: #333333;
      background-color: #dcdcdc;
      height: 40px;
      width: 6.88vw;
      > p {
        color: #333333;
      }
    }
  }
`;

const TimeSlots = ({ timeStatus, setTimeStatus }) => {

  const loadScript = (src)=>{
    return new Promise((resolve)=>{
       const script = document.createElement("script");
       script.src = src;
       script.onload = ()=>{
        resolve(true);
       }
       script.onerror = ()=>{
        resolve(false);
       }

       document.body.appendChild(script);
    });
  }
  
let state= useSelector((state)=>state)

console.log(state,"details")
let {BookTime,Status,Guest,Date}=state.bookingDetails


  useEffect(()=>{
    loadScript(`https://checkout.razorpay.com/v1/checkout.js`);
  })
  

const {handleSignupModel} = useContext(SigninContext)


let dispatch = useDispatch()

let handleBookTime = (value)=>{
dispatch({type:BOOK,payload:value})
}


let handleStatus =(value)=>{
dispatch({type:STATUS,payload:value})
}

let handleGuest = (num)=>{
  dispatch({type:GUEST,payload:num})
}


  
  
  return (
    <>
    
      <div className="scroll">
        <div className="title">
          <h1>Make a Reservation</h1>
        </div>

        <div className="reservation__offerAndTime" style={{height:"auto"}}>
          {"23 December 2021" && (
            <div>
              <img
                src="https://dineout-clone.vercel.app/static/media/Dineout%20Pay%20Offers.7f80ae72.svg"
                alt="doOfferImg"
              />
            </div>
          )}
          <div>
           {Date}
          </div>
          <div>
          <Calender/>
          </div>
        </div>

        
      </div>

      <Wrapper>
        
        <div className="timestatus__parent">
          <button
            onClick={() => handleStatus("breakfast")}
            className={Status === "breakfast" ? "focused__zone" : null}
          >
            <p>Breakfast</p>
          </button>
          <button
            onClick={() => handleStatus("lunch")}
            className={Status === "lunch" ? "focused__zone" : null}
          >
            <p>Lunch</p>
          </button>
          <button
            onClick={() => handleStatus("dinner")}
            className={Status === "dinner" ? "focused__zone" : null}
          >
            <p>Dinner</p>
          </button>
        </div>
        {Status === "breakfast" ? (
          <div className="show__times--parent">
            <button className={BookTime=="9:00 AM"?"focused__zone":null}  onClick={() => handleBookTime("9:00 AM")}>
              <p>9:00 AM</p>
            </button>
            <button className={BookTime=="9:15 AM"?"focused__zone":null} onClick={() => handleBookTime("9:15 AM")}>
              <p>9:15 AM</p>
            </button>
            <button className={BookTime=="9:30 AM"?"focused__zone":null}  onClick={() => handleBookTime("9:30 AM")}>
              <p>9:30 AM</p>
            </button>
            <button className={BookTime=="9:45 AM"?"focused__zone":null}  onClick={() => handleBookTime("9:45 AM")}>
              <p>9:45 AM</p>
            </button>
            <button className={BookTime=="10:00 AM"?"focused__zone":null}  onClick={() => handleBookTime("10:00 AM")}>
              <p>10:00 AM</p>
            </button>
            <button className={BookTime=="10:15 AM"?"focused__zone":null}  onClick={() => handleBookTime("10:15 AM")}>
              <p>10:15 AM</p>
            </button>
            <button className={BookTime=="10:30 AM"?"focused__zone":null}  onClick={() => handleBookTime("10:30 AM")}>
              <p>10:30 AM</p>
            </button>
            <button className={BookTime=="10:45 AM"?"focused__zone":null}  onClick={() => handleBookTime("10:45 AM")}>
              <p>10:45 AM</p>
            </button>
            <button className={BookTime=="11:00 AM"?"focused__zone":null}  onClick={() => handleBookTime("11:00 AM")}>
              <p>11:00 AM</p>
            </button>
          </div>
        ) : Status === "lunch" ? (
          <div className="show__times--parent">
            <button className={BookTime=="1:00 PM"?"focused__zone":null} onClick={() => handleBookTime("1:00 PM")}>
              <p>1:00 PM</p>
            </button>
            <button className={BookTime=="1:15 PM"?"focused__zone":null} onClick={() => handleBookTime("1:15 PM")}>
              
              <p>1:15 PM</p>
            </button>
            <button className={BookTime=="1:30 PM"?"focused__zone":null} onClick={() => handleBookTime("1:30 PM")}>
              <p>1:30 PM</p>
            </button>
            <button className={BookTime=="1:45 PM"?"focused__zone":null} onClick={() => handleBookTime("1:45 PM")}>
              <p>1:45 PM</p>
            </button>
            <button className={BookTime=="2:00 PM"?"focused__zone":null} onClick={() => handleBookTime("2:00 PM")}>
              <p>2:00 PM</p>
            </button>
            <button className={BookTime=="2:15 PM"?"focused__zone":null} onClick={() => handleBookTime("2:15 PM")}>
              <p>2:15 PM</p>
            </button>
            <button className={BookTime=="3:30 PM"?"focused__zone":null} onClick={() => handleBookTime("3:30 PM")}>
              <p>3:30 PM</p>
            </button>
            <button className={BookTime=="3:45 PM"?"focused__zone":null} onClick={() => handleBookTime("3:45 PM")}>
              <p>3:45 PM</p>
            </button>
            <button className={BookTime=="4:00 PM"?"focused__zone":null} onClick={() => handleBookTime("4:00 PM")}>
              <p>4:00 PM</p>
            </button>
          </div>
        ) : (
          <div className="show__times--parent">
            <button onClick={() => handleBookTime("5:00 PM")}>
              <p>5:00 PM</p>
            </button>
            <button onClick={() => handleBookTime("5:15 PM")}>
              <p>5:15 PM</p>
            </button>
            <button onClick={() => handleBookTime("5:30 PM")}>
              <p>5:30 PM</p>
            </button>
            <button onClick={() => handleBookTime("5:45 PM")}>
              <p>5:45 PM</p>
            </button>
            <button onClick={() => handleBookTime("6:00 PM")}>
              <p>6:00 PM</p>
            </button>
            <button onClick={() => handleBookTime("6:15 PM")}>
              <p>6:15 PM</p>
            </button>
            <button onClick={() => handleBookTime("6:30 PM")}>
              <p>6:30 PM</p>
            </button>
            <button onClick={() => handleBookTime("7:00 PM")}>
              <p>7:00 PM</p>
            </button>
            <button onClick={() => handleBookTime("7:15 PM")}>
              <p>7:15 PM</p>
            </button>
          </div>
        )}
      </Wrapper>
      <div class="default__time">
        <p>
          <b>Time</b>
        </p>
        <div>
          <p>Choose an available time slot</p>
          <p>{BookTime}</p>
          <div></div>
        </div>
      </div>
{ BookTime=="9:00 AM"?(   <div class="noOffer__parent">
   <div>
     <img
       src="	https://dineout-clone.vercel.app/static/media/No%20offer.ee675c59.svg"
       alt="noofferimg"
     ></img>
   </div>
   <div>
     <p className="nooffer">
       Sorry there are no Offers available for these timings. Select guests
       to continue to reserve a table.
     </p>
   </div>
 </div>):(<div className="nooffer"><p>Available</p></div>)

}
   

      
      <div class="select__guest--parent">
        <h4 style={{fontSize:"14px", color:"rgb(121, 121, 121)"}}>Select Guest/s</h4>
        <p>Choose the number of guests going</p>
        <div className="guest__count--parent">
          <h4>Guests:</h4>
          <button style={{border:"none"}} onClick={()=>handleGuest(-1)}
          
          disabled={Guest < 1}>
            <img
              src="https://dineout-clone.vercel.app/static/media/remove.83088a06.svg"
              alt="removeImg"
            ></img>
          </button>
          {Guest}
          <button style={{border:"none"}} onClick={()=>handleGuest(1)}
               disabled={Guest > 10}>
            <img
              src="https://dineout-clone.vercel.app/static/media/add.00614146.svg"
              alt="addImg"
            ></img>
          </button>
        </div>
        <div class="addGuest__special">
          <span></span>
          <p>Any special request (Optional)</p>
        </div>
      </div>
{/* handleSignupModel() should be called in button click */}
      {Guest > 0 ? (
                
      <div className="continue__parent"><button onClick={displayRazorpay} className="btn">Continue</button></div>
                ) : null}
     
    </>
  );
};

export default TimeSlots;

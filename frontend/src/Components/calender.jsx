import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./calender.css";
import styled from "styled-components";

import { useContext } from "react";
import { CalenderContext } from "../Context/CalenderContext";
import { useState } from "react";

const Wrapper = styled.div`
  padding: 20px 24px 20px 30px;
  width: 100%;
  display: flex;
  gap:10px;
  justify-content:"space-between";
  height: 70px;
  .prev__arrow {
    z-index: 1;
    top: 40px;
    left: 10px;
  }
  .next__arrow {
    z-index: 1;
    top: 40px;
    right: 18px;
  }
  .calender__dayes {
    height: 52px;
    width: 37.5px;
    border: none;
    background-color: #ffffff;
    height: 77px;
    .select__day {
      color: #797979;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;

    }
    .select__date {
      color: #797979;
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
    }
  }
  .active__date {
    .select__day {
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      color: #333333;
    }
    .select__date--parent {
      display: flex;
      animation: blinker 1000ms linear infinite;
      align-items: center;
      justify-content: center;
      background-color: #3595ff;
      color: #ffffff;
      height: 30px;
      width: 30px;
      border-radius: 15px;
      border: 3px solid #8cbcf2;
    }
    /* .blink__border {
        width: ;
        animation: blinker 3000ms linear infinite;
      } */
    @keyframes blinker {
      50% {
        opacity: 0.7;
      }
    }
    .select__date {
      color: inherit;
    }
  }
`;

export default function Calender({ bookDate, setBookDate }) {


  const settings = {
    dot: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    cssEase: "linear",
    arrows: true
    // nextArrow: <ArrowHead />,
    // prevArrow: <ArrowHead />,
  };


  const {Date,handleDate} = useContext(CalenderContext)


  
  return (
    <Wrapper>
        <button
          className={
            Date === "21st DEC 2021"
              ? "calender__dayes active__date"
              : "calender__dayes"
          }
          onClick={() => handleDate("21st DEC 2021")}
        >
          <p className="select__day">Today</p>
          <div className="select__date--parent">
            <p className="select__date">21</p>
          </div>
        </button>
        <button
          className={
            Date === "22nd DEC 2021"
              ? "calender__dayes active__date"
              : "calender__dayes"
          }
          onClick={() =>handleDate("22nd DEC 2021")}
        >
          <p className="select__day">Wed</p>
          <div className="select__date--parent">
            <p className="select__date">22</p>
          </div>
        </button>
        <button
          className={
            Date === "23rd DEC 2021"
              ? "calender__dayes active__date"
              : "calender__dayes"
          }
          onClick={() => handleDate("23rd DEC 2021")}
        >
          <p className="select__day">Thu</p>
          <div className="select__date--parent">
            <p className="select__date">23</p>
          </div>
        </button>
        <button
          className={
            Date === "24th DEC 2021"
              ? "calender__dayes active__date"
              : "calender__dayes"
          }
          onClick={() => handleDate("24th DEC 2021")}
        >
          <p className="select__day">Fri</p>
          <div className="select__date--parent">
            <p className="select__date">24</p>
          </div>
        </button>
        <button
          className={
            Date === "25th DEC 2021"
              ? "calender__dayes active__date"
              : "calender__dayes"
          }
          onClick={() => handleDate("25th DEC 2021")}
        >
          <p className="select__day">Sat</p>
          <div className="select__date--parent">
            <p className="select__date">25</p>
          </div>
        </button>
        <button
          className={
            Date === "26th DEC 2021"
              ? "calender__dayes active__date"
              : "calender__dayes"
          }
          onClick={() => handleDate("26th DEC 2021")}
        >
          <p className="select__day">Sun</p>
          <div className="select__date--parent">
            <p className="select__date">26</p>
          </div>
        </button>
       
      
    </Wrapper>
  );
}
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
  max-width: 238px;
  margin: auto;
  position: relative;
  .arrow__head {
    position: absolute;
    cursor: pointer;
  }
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
      <div className="arrow__head prev__arrow">
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.68998 11.29C6.78268 11.1975 6.85623 11.0876 6.90641 10.9666C6.95659 10.8456 6.98242 10.7159 6.98242 10.585C6.98242 10.454 6.95659 10.3243 6.90641 10.2034C6.85623 10.0824 6.78268 9.97249 6.68998 9.87998L2.80998 5.99998L6.68998 2.11998C6.87696 1.933 6.982 1.67941 6.982 1.41498C6.982 1.15055 6.87696 0.896955 6.68998 0.709978C6.503 0.523001 6.2494 0.417959 5.98498 0.417959C5.72055 0.417959 5.46696 0.523001 5.27998 0.709978L0.689978 5.29998C0.597275 5.39249 0.523726 5.50238 0.473545 5.62335C0.423364 5.74433 0.397535 5.87401 0.397535 6.00498C0.397535 6.13595 0.423364 6.26563 0.473545 6.3866C0.523726 6.50758 0.597275 6.61746 0.689978 6.70998L5.27998 11.3C5.65998 11.68 6.29998 11.68 6.68998 11.29Z"
            fill="#DCDCDC"
          />
        </svg>
      </div>
      <div className="arrow__head next__arrow">
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.310022 0.710022C0.217319 0.802536 0.143771 0.912424 0.0935898 1.0334C0.0434083 1.15437 0.0175781 1.28405 0.0175781 1.41502C0.0175781 1.54599 0.0434083 1.67567 0.0935898 1.79665C0.143771 1.91762 0.217319 2.02751 0.310022 2.12002L4.19002 6.00002L0.310022 9.88002C0.123045 10.067 0.0180016 10.3206 0.0180016 10.585C0.0180016 10.8494 0.123045 11.103 0.310022 11.29C0.497 11.477 0.750596 11.582 1.01502 11.582C1.27945 11.582 1.53304 11.477 1.72002 11.29L6.31002 6.70002C6.40273 6.60751 6.47627 6.49762 6.52645 6.37665C6.57664 6.25567 6.60247 6.12599 6.60247 5.99502C6.60247 5.86405 6.57664 5.73437 6.52645 5.6134C6.47627 5.49242 6.40273 5.38254 6.31002 5.29002L1.72002 0.700022C1.34002 0.320022 0.700022 0.320022 0.310022 0.710022Z"
            fill="#333333"
          />
        </svg>
      </div>
      <Slider {...settings}>
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
        <button
          className={
            Date === "27th DEC 2021"
              ? "calender__dayes active__date"
              : "calender__dayes"
          }
          onClick={() => handleDate("27th DEC 2021")}
        >
          <p className="select__day">Mon</p>
          <div className="select__date--parent">
            <p className="select__date">27</p>
          </div>
        </button>
        <button
          className={
            Date === "28th DEC 2021"
              ? "calender__dayes active__date"
              : "calender__dayes"
          }
          onClick={() => handleDate("28th DEC 2021")}
        >
          <p className="select__day">Tue</p>
          <div className="select__date--parent">
            <p className="select__date">28</p>
          </div>
        </button>
        <button
          className={
            Date === "29th DEC 2021"
              ? "calender__dayes active__date"
              : "calender__dayes"
          }
          onClick={() => handleDate("29th DEC 2021")}
        >
          <p className="select__day">Wed</p>
          <div className="select__date--parent">
            <p className="select__date">29</p>
          </div>
        </button>
        <button
          className={
            Date === "30th DEC 2021"
              ? "calender__dayes active__date"
              : "calender__dayes"
          }
          onClick={() => handleDate("30th DEC 2021")}
        >
          <p className="select__day">Thu</p>
          <div className="select__date--parent">
            <div className="blink__border">
              <p className="select__date">30</p>
            </div>
          </div>
        </button>
        <button
          className={
            Date === "31st DEC 2021"
              ? "calender__dayes active__date"
              : "calender__dayes"
          }
          onClick={() => handleDate("31st DEC 2021")}
        >
          <p className="select__day">Fri</p>
          <div className="select__date--parent">
            <p className="select__date">31</p>
          </div>
        </button>
      </Slider>
   
    </Wrapper>
  );
}
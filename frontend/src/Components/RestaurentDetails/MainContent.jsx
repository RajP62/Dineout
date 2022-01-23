import "./maincont.css"
import { RestraurantDetail } from "./RestraurantDetail"

import React, { useState, useEffect } from "react";
import "./RestraurantDetail.css";
import DinePage from "./DinePage";
import Menu from "./Menu";
// import SimpleImageSlider from "react-simple-image-slider";
import AboutRestaurant from "./AboutRestaurant";
import OverView from "./OverView";
import NewOffers from "./NewOffers";
import TopHead from "./TopHead";
import YouMayLike from "./YouMayLike";
import Help from "./Help";
import { useParams } from "react-router";
// import axios from "axios";
import TimeSlots from "../Timeslot";
import { useContext } from "react";
import { ClickedContext } from "../../Context/clickedItem";

export const MainContent = ()=>{
    return (<div className="wholeBodyContainer">
    <div className="firstContainer">
        <RestraurantDetail/>
        <OverView />
              <NewOffers />
              <DinePage />
              <Menu />
              <AboutRestaurant product="product" />
              <YouMayLike />
              <Help />
    </div>
    <div className="sidebar-book-section" style={{padding:"2%"}}>
        <TimeSlots/>
    </div>
    </div>)
}